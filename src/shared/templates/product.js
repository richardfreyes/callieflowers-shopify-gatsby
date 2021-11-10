import React from "react"
import Layout from "../components/layout"
import { graphql, StaticQuery  } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import PreviewCompatibleImage from "../components/preview-compatible-image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StoreContext } from "../context/store-context"
import { AddToCart } from "../components/add-to-cart"
import isEqual from "lodash.isequal"
import { formatPrice } from "../utils/format-price"

export function ProductTemplate(props) {
  console.log('props', props)
  // render() {
    const { product } = props.pageContext
    const {
      options,
      variants,
      variants: [initialVariant],
      priceRangeV2,
      title,
      description,
      images,
      images: [firstImage],
    } = product
    const { client } = React.useContext(StoreContext)
    console.log('client', client)
    const [variant, setVariant] = React.useState({ ...initialVariant })
    const [quantity, setQuantity] = React.useState(1)
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
    const handleOptionChange = (index, event) => {
      const value = event.target.value
      if (value === "") { return }
      const currentOptions = [...variant.selectedOptions]
      currentOptions[index] = { ...currentOptions[index], value }
      const selectedVariant = variants.find((variant) => { return isEqual(currentOptions, variant.selectedOptions) })
      setVariant({ ...selectedVariant })
    }
    React.useEffect(() => { checkAvailablity(product.storefrontId) }, [productVariant.storefrontId, checkAvailablity, product.storefrontId])
    // const price = formatPrice( priceRangeV2.minVariantPrice.currencyCode, variant.price )
    const hasVariants = variants.length > 1
    const hasImages = images.length > 0
    const hasMultipleImages = true || images.length > 1



    console.log('addtocart productVariant.storefrontId', productVariant.storefrontId)
    console.log('addtocart quantity', quantity)
    console.log('addtocart available', available)



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
      <div className="product-page-detail">
        <div className="section product-view-content">
          <div className="container">
            <div className="row row-holder">
              <div className="col-lg-5 col-md-5 col-holder">
                <div className="product-view">
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: product.images[0]?.originalSrc,
                      alt: `${product.title}`,
                    }}
                  />
                </div>
                <div className="image-view-option">
                  <Slider {...productSlider}>
                    {product.images && product.images.map((image) => (
                      <div className="image-holder" key={image}>
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: image.originalSrc,
                            alt: `${product.title}`,
                          }}
                        />
                      </div>
                    ))}
                  </Slider>
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
                        <p className="current-price">Now: ₱{product.variants[0].price}</p>
                      </div>
                      :
                      <div className="f-price">
                        <p className="current-price-not-sale">Price: ₱{product.variants[0].price}</p>
                      </div>
                    }
                    <div className="add-minus">
                      <a href="#"><span className="icon ei-minus-circle-fill"></span></a>
                      <span className="value">0</span>
                      <a href="#"><span className="icon ei-plus-circle-fill"></span></a>
                    </div>
                  </div>
                  <p className="addons-title">Make it Extra Special with our add ons!</p>
                  <div className="addons-carousel">
                  <Slider {...addOnsSlider}>
                    {addOnsLists.map((addOns) => (
                      <div className="addons-item item-1" key={addOns.node.id}>
                          <label htmlFor={addOns.node.id}>
                            <div className="img-holder">
                              <PreviewCompatibleImage
                                imageInfo={{
                                  image: addOns.node.images[0].src,
                                  alt: `${addOns.node.title}`,
                                }}
                              />
                            </div>
                            <p className="addons-name">{addOns.node.title}</p>
                            <p className="addons-price">P99.00</p>
                            <input type="checkbox" id={addOns.node.id} name="id[]" name="addons"/>
                          </label>
                      </div>
                      ))}
                    </Slider>
                  </div>

                  <AddToCart
                    variantId={productVariant.storefrontId}
                    quantity={quantity}
                    available={available}
                  />
                  {/* <a className="btn-add-cart" href="#">Add to cart</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
    )
  // }
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
        }
      }
    }
  }
`

export default ProductTemplate;


// const ProductTemplate = ({ pageContext }) => {
//   const { product } = pageContext;
//   // const { test } = this.props;

//   // console.log('addOns', addOns);
//   // console.log('this.props', this.props);
//   const settings = {
//     lazyLoad: 'ondemand',
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     infinite: true,
//     // nextArrow: `<FontAwesomeIcon className="fr-slick-next fas fa-chevron-right" icon={faChevronRight}/>`,
//     // prevArrow: `<FontAwesomeIcon className="fr-slick-prev fas fa-chevron-left" icon={faChevronRight}/>`,
//   };
//   return (
//     <Layout>
//       <div className="product-page-detail">
//         <div className="section product-view-content">
//           <div className="container">
//             <div className="row row-holder">
//               <div className="col-lg-5 col-md-5 col-holder">
//                 <div className="product-view">
//                   <PreviewCompatibleImage
//                     imageInfo={{
//                       image: product.images[0]?.originalSrc,
//                       alt: `${product.title}`,
//                     }}
//                   />
//                 </div>
//                 <div className="image-view-option">
//                   <Slider {...settings}>
//                     {product.images && product.images.map((image) => (
//                       <div className="image-holder" key={image}>
//                         <PreviewCompatibleImage
//                           imageInfo={{
//                             image: image.originalSrc,
//                             alt: `${product.title}`,
//                           }}
//                         />
//                       </div>
//                     ))}
//                   </Slider>
//                 </div>
//               </div>
//               <div className="col-lg-7 col-md-7 col-holder">
//                 <div className="product-desc-holder">
//                   <p className="product-title">{product.title}</p>
//                   <p className="product-desc">{product.description}</p>
//                   <div className="product-add-minus-holder">
//                     {product.variants[0].compareAtPrice ? 
//                       <div className="f-price">
//                         <p>Original Price: <span className="old-price">₱{product.variants[0].compareAtPrice}</span></p>
//                         <p className="current-price">Now: ₱{product.variants[0].price}</p>
//                       </div>
//                       :
//                       <div className="f-price">
//                         <p className="current-price-not-sale">Price: ₱{product.variants[0].price}</p>
//                       </div>
//                     }
//                     <div className="add-minus">
//                       <a href="#"><span className="icon ei-minus-circle-fill"></span></a>
//                       <span className="value">0</span>
//                       <a href="#"><span className="icon ei-plus-circle-fill"></span></a>
//                     </div>
//                   </div>
//                   <p className="addons-title">Make it Extra Special with our add ons!</p>
//                   {/* <div className="addons-carousel">
//                     <div className="addons-item item-1">
//                       <label for="ProductSelect">
//                         <div className="img-holder">
//                           <StaticImage src="assets/images/product-detail/addons-1.png" alt="addons" />
//                         </div>
//                         <p className="addons-name">Happy Birthday Baloon</p>
//                         <p className="addons-price">P99.00</p>
//                         <input type="checkbox" id="ProductSelect" name="id[]" name="addons"/>
//                       </label>
//                     </div>
//                     <div className="addons-item item-2">
//                       <label for="ProductSelect1">
//                         <div className="img-holder">
//                           <StaticImage src="assets/images/product-detail/addons-2.jpg" alt="addons" />
//                         </div>
//                         <p className="addons-name">Happy Birthday Baloon</p>
//                         <p className="addons-price">P99.00</p>
//                         <input type="checkbox" id="ProductSelect1" name="id[]" name="addons"/>
//                       </label>
//                     </div>
//                     <div className="addons-item item-3">
//                       <label for="ProductSelect2">
//                         <div className="img-holder">
//                           <StaticImage src="assets/images/product-detail/addons-3.png" alt="addons" />
//                         </div>
//                         <p className="addons-name">Happy Birthday Baloon</p>
//                         <p className="addons-price">P99.00</p>
//                         <input type="checkbox" id="ProductSelect2" name="id[]" name="addons"/>
//                       </label>
//                     </div>
//                     <div className="addons-item item-2">
//                       <label for="ProductSelect3">
//                         <div className="img-holder">
//                           <StaticImage src="assets/images/product-detail/addons-2.jpg" alt="addons" />
//                         </div>
//                         <p className="addons-name">Happy Birthday Baloon</p>
//                         <p className="addons-price">P99.00</p>
//                         <input type="checkbox" id="ProductSelect3" name="id[]" name="addons"/>
//                       </label>
//                     </div>
//                     <div className="addons-item item-3">
//                       <label for="ProductSelect4">
//                         <div className="img-holder">
//                           <StaticImage src="assets/images/product-detail/addons-3.png" alt="addons" />
//                         </div>
//                         <p className="addons-name">Happy Birthday Baloon</p>
//                         <p className="addons-price">P99.00</p>
//                         <input type="checkbox" id="ProductSelect4" name="id[]" name="addons"/>
//                       </label>
//                     </div>
//                   </div> */}

//                   <a className="btn-add-cart" href="#">Add to cart</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* <h1>{product.title}</h1>
//       <div>{product.description}</div> */}
//     </Layout>
//   )
// }

// const addOns = graphql`
//   query addOnsQuery {
//     allShopifyProduct(filter: {productType: {eq: "addons"}}) {
//       edges {
//         node {
//           id
//           title
//           images {
//             src
//             gatsbyImageData
//           }
//         }
//       }
//     }
//   }
// `

// // const ProductPage = () => {
// //   return (
// //     <StaticQuery
// //       query={graphql`
// //         {
// //           allShopifyProduct(filter: {productType: {eq: "addons"}}) {
// //             edges {
// //               node {
// //                 id
// //                 title
// //                 images {
// //                   src
// //                   gatsbyImageData
// //                 }
// //               }
// //             }
// //           }
// //         }      
// //       `}
// //       render={(data) => <ProductTemplate test={data} />}
// //     />
// //   )
// // }


// export default ProductTemplate