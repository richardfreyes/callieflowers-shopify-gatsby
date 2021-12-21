import React from "react"
import Layout from "../components/layout"
import { graphql, Link  } from "gatsby"
import PreviewCompatibleImage from "../components/preview-compatible-image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { StoreContext } from "../context/store-context"
import { AddToCart } from "../components/add-to-cart"
import { formatPrice } from "../utils/format-price"
import Seo from "../../shared/components/seo"
import { GatsbyImage, getSrc } from "gatsby-plugin-image"
import ChevronLeftSolid from '../../images/icons/chevron-left-solid.svg'
import ChevronRightSolid from '../../images/icons/chevron-right-solid.svg'


export default function ProductTemplate(props) {
  const [ StoreFrontId, setStoreFrontId] = React.useState([])
  const { product } = props.pageContext
  const { variants: [initialVariant], priceRangeV2, title, description, images, images: [firstImage] } = product
  const { client } = React.useContext(StoreContext)
  const [ variant ] = React.useState({ ...initialVariant })
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

  function handleGetAddOnsValue(event) {
    if (event.target.checked) {
      setStoreFrontId([
        ...StoreFrontId,
        { variantId: event.target.value, quantity: 1 }
      ])
    } else {
      setStoreFrontId(
        StoreFrontId.filter((storeFront) => storeFront.variantId !== event.target.value)
      )
    }
  }

  React.useEffect(() => { checkAvailablity(product.storefrontId) }, [productVariant.storefrontId, checkAvailablity, product.storefrontId])
  const price = formatPrice( priceRangeV2.minVariantPrice.currencyCode, variant.price )

  const hasImages = images.length > 0
  const hasMultipleImages = true || images.length > 1
  const addOnsLists = [];
  const otherProductLists = [];
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button {...props}
      className={ "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")}
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <ChevronLeftSolid />
    </button>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button {...props}
      className={ "slick-next slick-arrow" + (currentSlide === slideCount - 1 ? " slick-disabled" : "") }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <ChevronRightSolid />
    </button>
  );
  const addOnsSlider = {
    lazyLoad: 'ondemand',
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  // nextArrow: <FontAwesomeIcon className="slick-next slick-arrow fr-slick-next" aria-hidden="true" icon={faChevronRight}/>,
  // prevArrow: <FontAwesomeIcon className="slick-prev slick-arrow fr-slick-prev" aria-hidden="true" icon={faChevronLeft}/>,

  props.data.allShopifyProduct.edges.map(({node}) => {
    if(node.productType.includes('addons')) { addOnsLists.push(node) } 
    else { otherProductLists.push(node) }
    return null;
  })

  return (
    <Layout>
      {firstImage ? (
        <Seo
          title={title}
          description={description}
          image={getSrc(firstImage.gatsbyImageData)}
        />
      ) : undefined }
      <div>
        <div className="product-page-detail">
          <div className="section product-view-content">
            <div className="container">
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
                      <div className="wrapper">
                        {images && images.map((image, index) => (
                          index < 3 ? <div className="image-holder" key={index}>
                          <GatsbyImage
                            objectFit="contain"
                            loading={index === 0 ? "eager" : "lazy"}
                            alt={ image.altText ? image.altText : `Product Image of ${title} #${index + 1}` }
                            image={image.gatsbyImageData}
                          />
                        </div> : null
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-lg-7 col-md-7 col-holder">
                  <div className="product-desc-holder">
                    <p className="product-title">{product.title}</p>
                    <p className="product-desc" dangerouslySetInnerHTML={{__html: product.descriptionHtml}}></p>
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
                    </div>
                    <p className="addons-title">Make it Extra Special with our add ons!</p>
                    <div className="addons-carousel">
                      <Slider {...addOnsSlider}>
                        {addOnsLists.map((addOns, index) => (
                          <div className="addons-item" key={addOns.id}>
                            <label htmlFor={addOns.id}>
                              <div className="img-holder">
                                <GatsbyImage
                                  objectFit="contain"
                                  loading={index === 0 ? "eager" : "lazy"}
                                  alt={ addOns.featuredImage.altText ? addOns.featuredImage.altText : `Product Image of ${addOns.title} #${index + 1}` }
                                  image={addOns.featuredImage.gatsbyImageData}
                                />
                              </div>
                              <p className="addons-name">{addOns.title}</p>
                              <p className="addons-price">P99.00</p>
                              <input 
                                type="checkbox" 
                                id={addOns.id}
                                name="addons"
                                value={addOns.variants[0].storefrontId}
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
        <div className="section featured-products also-like">
          <div className="container">
            <h4 className="title">You may also like</h4>
            <div className="row row-holder">
              { otherProductLists && otherProductLists.map((node, index) => index < 6 ? (
                <div className="col-lg-2 col-sm-3 col-6 col-holder" key={node.title}>
                  <Link to={`/products/${node.handle}`} className="wrapper">
                    <div className="img-holder">
                    <GatsbyImage
                      objectFit="contain"
                      loading={index === 0 ? "eager" : "lazy"}
                      alt={ node.featuredImage.altText ? node.featuredImage.altText : `Product Image of ${node.title} #${index + 1}` }
                      image={node.featuredImage.gatsbyImageData}
                    />
                    </div>
                    <div className="text-holder">
                      <p className="product-name">{node.title}</p>
                      {node.variants[0].compareAtPrice ? 
                        <span>
                          <p className="origina-price"><span>Original Price: {formatPrice("PHP", node.variants[0].compareAtPrice)}</span></p> 
                          <p className="price-now">Now: {formatPrice("PHP", node.variants[0].price)}</p>
                        </span>
                        : 
                        <span>
                          <p className="origina-price">Price: {formatPrice("PHP", node.variants[0].price)}</p>
                        </span>
                      }
                    </div>
                  </Link>
                </div>
              ) : null )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const addOns = graphql`
  query addOnsQuery {
    allShopifyProduct {
      edges {
        node {
          id
          title
          featuredImage {
            gatsbyImageData(width: 178, layout: CONSTRAINED)
            altText
          }
          handle
          storefrontId
          shopifyId
          productType
          variants {
            storefrontId
            price
            compareAtPrice
          }
        }
      }
    }
  }
`