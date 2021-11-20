import React from "react"
import Layout from "../components/layout"
import { graphql  } from "gatsby"
import PreviewCompatibleImage from "../components/preview-compatible-image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StoreContext } from "../context/store-context"
import { AddToCart } from "../components/add-to-cart"
import { formatPrice } from "../utils/format-price"
// import { Redirect } from 'react-router'
import Seo from "../../shared/components/seo"
import { GatsbyImage, getSrc } from "gatsby-plugin-image"


export default function ProductTemplate(props) {
    const [StoreFrontId, setStoreFrontId] = React.useState([])
    const { product } = props.pageContext
    const { variants: [initialVariant], priceRangeV2, title, description, images, images: [firstImage] } = product
    const { client } = React.useContext(StoreContext)
    const [variant] = React.useState({ ...initialVariant })
    // const [variant, setVariant] = React.useState({ ...initialVariant })
    // const [quantity, setQuantity] = React.useState(1)
    const productVariant = client.product.helpers.variantForOptions(product, variant) || variant
    const [available, setAvailable] = React.useState( productVariant.availableForSale )
    const checkAvailablity = React.useCallback(
      (productId) => {
        client.product.fetch(productId).then((fetchedProduct) => {
          const result = fetchedProduct?.variants.filter( (variant) => variant.id === productVariant.storefrontId ) ?? []
          if (result.length > 0) { setAvailable(result[0].available) }
        })
      },
      [productVariant.storefrontId, client.product]
    )
  
    function handleClick() {
      // history.push("/home");
      // <Redirect to="/cart" />
    }

    function handleGetAddOnsValue(event) {
      // add to list
      if (event.target.checked) {
        setStoreFrontId([
          ...StoreFrontId,
          { variantId: event.target.value, quantity: 1 }
        ])
      } else {
        // remove from list
        setStoreFrontId(
          StoreFrontId.filter((storeFront) => storeFront.variantId !== event.target.value)
        )
      }
    }

    // const handleChange = (e) => {
    //   this.setState({
    //     [e.target.name]: e.target.value,
    //   });
    // }

    // const handleOptionChange = (index, event) => {
    //   const value = event.target.value
    //   if (value === "") { return }
    //   const currentOptions = [...variant.selectedOptions]
    //   currentOptions[index] = { ...currentOptions[index], value }
    //   const selectedVariant = variants.find((variant) => { return isEqual(currentOptions, variant.selectedOptions) })
    //   setVariant({ ...selectedVariant })
    // }

    React.useEffect(() => { checkAvailablity(product.storefrontId) }, [productVariant.storefrontId, checkAvailablity, product.storefrontId])
    const price = formatPrice( priceRangeV2.minVariantPrice.currencyCode, variant.price )
    // const hasVariants = variants.length > 1
    const hasImages = images.length > 0
    const hasMultipleImages = true || images.length > 1
    const addOnsLists = props.data.allShopifyProduct.edges;
    const productSlider = {
      lazyLoad: 'ondemand',
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      // nextArrow: `<FontAwesomeIcon className="fr-slick-next fas fa-chevron-right" icon={faChevronRight}/>`,
      // prevArrow: `<FontAwesomeIcon className="fr-slick-prev fas fa-chevron-left" icon={faChevronRight}/>`,
    };
    const addOnsSlider = {
      lazyLoad: 'ondemand',
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: false,
      // nextArrow: `<FontAwesomeIcon className="fr-slick-next fas fa-chevron-right" icon={faChevronRight}/>`,
      // prevArrow: `<FontAwesomeIcon className="fr-slick-prev fas fa-chevron-left" icon={faChevronRight}/>`,
    };


    return (
    <Layout>
      {firstImage ? (
        <Seo
          title={title}
          description={description}
          image={getSrc(firstImage.gatsbyImageData)}
        />
      ) : undefined}
      <div className="product-page-detail">
        <div className="section product-view-content">
          <div className="container">
            <button onClick={handleClick}>TEST</button>
            <div className="row row-holder">
              <div className="col-lg-5 col-md-5 col-holder">
                <div className="product-view">
                  {hasImages && (
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: product.images[0]?.originalSrc,
                        alt: `${product.title}`,
                      }}
                    />
                  )}
                </div>
                <div className="image-view-option">
                  {hasMultipleImages && (
                    <Slider {...productSlider}>
                      {images && images.map((image, index) => (
                        <div className="image-holder" key={image}>
                          <GatsbyImage
                            objectFit="contain"
                            loading={index === 0 ? "eager" : "lazy"}
                            alt={ image.altText ? image.altText : `Product Image of ${title} #${index + 1}` }
                            image={image.gatsbyImageData}
                          />
                        </div>
                      ))}
                    </Slider>
                  )}
                </div>
              </div>
              <div className="col-lg-7 col-md-7 col-holder">
                <div className="product-desc-holder">
                  <p className="product-title">{product.title}</p>
                  <p className="product-desc">{product.description}</p>
                  <div className="product-add-minus-holder">
                    {product.variants[0].compareAtPrice ? 
                      <div className="f-price">
                        <p>Original Price: <span className="old-price">₱{product.variants[0].compareAtPrice}</span></p>
                        <p className="current-price">Now: {price}</p>
                      </div>
                      :
                      <div className="f-price">
                        <p className="current-price-not-sale">Price: {price}</p>
                      </div>
                    }
                    {/* <div className="add-minus">
                      <Link to="/"><span className="icon ei-minus-circle-fill"></span></Link>
                      <span className="value">0</span>
                      <Link to="/"><span className="icon ei-plus-circle-fill"></span></Link>
                    </div> */}
                  </div>
                  <p className="addons-title">Make it Extra Special with our add ons!</p>
                  <div className="addons-carousel">
                  <Slider {...addOnsSlider}>
                    {addOnsLists.map((addOns) => (
                      <div className="addons-item" key={addOns.node.id}>
                          <label htmlFor={addOns.node.id}>
                            <div className="img-holder">
                              <PreviewCompatibleImage
                                imageInfo={{
                                  image: addOns.node.images[0].src,
                                  alt: `${addOns.node.title}`
                                }}
                              />
                            </div>
                            <p className="addons-name">{addOns.node.title}</p>
                            <p className="addons-price">P99.00</p>
                            <input 
                              type="checkbox" 
                              id={addOns.node.id}
                              name="addons"
                              value={addOns.node.variants[0].storefrontId}
                              onChange={(e) => { handleGetAddOnsValue(e) }}
                            />
                          </label>
                      </div>
                      ))}
                    </Slider>
                  </div>

                  <AddToCart
                    variantId={productVariant.storefrontId}
                    quantity={1}
                    available={available}
                    addOns={StoreFrontId}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
    )
}

export const addOns = graphql`
  query addOnsQuery {
    allShopifyProduct(filter: {productType: {eq: "addons"}}) {
      edges {
        node {
          id
          title
          images {
            src
            gatsbyImageData
          }
          variants {
            storefrontId
          }
        }
      }
    }
  }
`