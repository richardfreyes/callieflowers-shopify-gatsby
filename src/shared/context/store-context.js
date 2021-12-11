import * as React from "react"
import fetch from "isomorphic-fetch"
import Client from "shopify-buy"

console.log('process.env', process.env)
console.log('process.env.GATSBY_SHOPIFY_STORE_URL', process.env.GATSBY_SHOPIFY_STORE_URL)



const shopUrl = process.env.SHOP_URL;
const storeFrontToken = process.env.STOREFRONT_ACCESS_KEY;

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
  addVariantToCart: () => {},
  removeLineItem: () => {},
  updateLineItem: () => {},
  client,
  checkout: {
    lineItems: [],
    attributes: [{
      DeliveryDate: "26/11/2021",
      DeliverySlot: "8AM-1PM",
    }]
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

  const addVariantToCart = (variantId, addOns, quantity) => {
    setLoading(true)

    const checkoutID = checkout.id

    const lineItemsToUpdate = [{
      variantId,
      quantity: parseInt(quantity, 10)
    }]

    const input = { 
      customAttributes: [{ key: "Delivery Instructions", value: "Test Delivery Instruction" }], 
      note: "NoteTest",
    }

    Array.prototype.push.apply(lineItemsToUpdate, addOns); 

    return client.checkout.addLineItems(checkoutID, lineItemsToUpdate).then((res) => {
      // console.log('checkoutID', checkoutID)
      client.checkout.updateAttributes(checkoutID, input)
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

    // console.log('lineItemsToUpdate', lineItemsToUpdate)

    return client.checkout.updateLineItems(checkoutID, lineItemsToUpdate).then((res) => {
      setCheckout(res)
      setLoading(false)
    })
  }

  return (
    <StoreContext.Provider
      value={{
        ...defaultValues,
        addVariantToCart,
        removeLineItem,
        updateLineItem,
        checkout,
        loading,
        didJustAddToCart,
        attributes: {"Delivery Date": "18/11/2021", "Delivery Slot": "8AM-1PM", "Sender Name": "asd"},
        note: "asdasdas"
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}
