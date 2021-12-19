import * as React from "react"
import fetch from "isomorphic-fetch"
import Client from "shopify-buy"

const shopUrl = process.env.GATSBY_SHOPIFY_STORE_URL;
const storeFrontToken = process.env.GATSBY_SHOPIFY_STOREFRONT_ACCESS_KEY;

const client = Client.buildClient({
  domain: shopUrl,
  storefrontAccessToken: storeFrontToken,
}, fetch )


const defaultValues = {
  cart: [],
  isOpen: false,
  loading: false,
  onOpen: () => {},
  onClose: () => {},
  addDateAndTime: () => {},
  addVariantToCart: () => {},
  removeLineItem: () => {},
  updateLineItem: () => {},
  client,
  checkout: {
    lineItems: []
  },
}

export const StoreContext = React.createContext(defaultValues)

const isBrowser = typeof window !== `undefined`
const localStorageKey = `shopify_checkout_id`

export const StoreProvider = ({ children }) => {
  const [checkout, setCheckout] = React.useState(defaultValues.checkout)
  const [loading, setLoading] = React.useState(false)
  const [didJustAddToCart, setDidJustAddToCart] = React.useState(false)

  const setCheckoutItem = (checkout) => {
    if (isBrowser) { localStorage.setItem(localStorageKey, checkout.id) }
    setCheckout(checkout)
  }

  // const productsQuery = client.graphQLClient.query((root) => {
  //   root.addConnection('products', {args: {first: 10}}, (product) => {
  //     // product.add('title');
  //     // product.add('tags');// Add fields to be returned
  //   });
  // });

  // client.graphQLClient.send(productsQuery).then(({model, data}) => {
  //   // Do something with the products
  //   console.log('model', model);
  //   console.log('data', data);
  // });
      

  React.useEffect(() => {
    const initializeCheckout = async () => {
      const existingCheckoutID = isBrowser ? localStorage.getItem(localStorageKey) : null

      if (existingCheckoutID && existingCheckoutID !== `null`) {
        try {
          const existingCheckout = await client.checkout.fetch(existingCheckoutID)
          if (!existingCheckout.completedAt) {
            setCheckoutItem(existingCheckout)
            return
          }
        } catch (e) { localStorage.setItem(localStorageKey, null) }
      }

      const newCheckout = await client.checkout.create()
      setCheckoutItem(newCheckout)
    }

    initializeCheckout()
  }, [])

  const addDateAndTime = (date, time, note, senderName) => {
    const checkoutID = checkout.id

    const input = { 
      customAttributes: [
        { 
          key: "Delivery Date", 
          value: `${date}`,
        },
        {
          key: "Delivery Time", 
          value: `${time}`,
        },
        {
          key: "Sender Name", 
          value: `${senderName}`,
        }
      ],
      note: note
    }

    if(date || time || note || senderName) {
      client.checkout.updateAttributes(checkoutID, input)
    }
  }

  const addVariantToCart = (variantId, addOns, quantity) => {
    setLoading(true)

    const checkoutID = checkout.id

    const lineItemsToUpdate = [{
      variantId,
      quantity: parseInt(quantity, 10)
    }]

    Array.prototype.push.apply(lineItemsToUpdate, addOns); 

    return client.checkout.addLineItems(checkoutID, lineItemsToUpdate).then((res) => {
      setCheckout(res)
      setLoading(false)
      setDidJustAddToCart(true)
      setTimeout(() => setDidJustAddToCart(false), 3000)
      // productsQuery
    })
  }

  const removeLineItem = (checkoutID, lineItemID) => {
    setLoading(true)

    return client.checkout.removeLineItems(checkoutID, [lineItemID]).then((res) => {
      setCheckout(res)
      setLoading(false)
    })
  }

  const updateLineItem = (checkoutID, lineItemID, quantity) => {
    setLoading(true)

    const lineItemsToUpdate = [{ id: lineItemID, quantity: parseInt(quantity, 10) } ]

    return client.checkout.updateLineItems(checkoutID, lineItemsToUpdate).then((res) => {
      setCheckout(res)
      setLoading(false)
    })
  }

  return (
    <StoreContext.Provider
      value={{
        ...defaultValues,
        addDateAndTime,
        addVariantToCart,
        removeLineItem,
        updateLineItem,
        checkout,
        loading,
        didJustAddToCart,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}
