import * as React from "react"
import { Link, graphql, StaticQuery  } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { formatPrice } from "../utils/format-price"
import IconVday from '../../images/vday.svg'

class ProductList extends React.Component {
  render() {
    const { data } = this.props;
    // let featuredProducts = [];
    let valentinesProducts = [];
    let budgetDealsProducts = [];
    let allProducts = [];

    if(!data) return null
    data.allShopifyCollection.edges.map(({node}) => {
      if(node.handle.includes('valentines')) { valentinesProducts = node.products }
      // if(node.handle.includes('featured')) { featuredProducts = node.products }
      if(node.handle.includes('budget-deals')) { budgetDealsProducts = node.products }
      if(node.handle.includes('all')) { allProducts = node.products }
      return null;
    })

    return (
      <div>
        {/* Valentines */}
        <div className="section featured-products">
          <div className="container">
            <h4 className="title">Valentines Sale</h4>
            <div className="row row-holder">
              { valentinesProducts.map((node, index) => index < 18 ? (
                <div className="col-lg-2 col-sm-3 col-6 col-holder" key={node.shopifyId}>
                  <Link to={`/products/${node.handle}`} className="wrapper">
                    <IconVday className='icon-vday' />
                    <div className="img-holder">
                      <GatsbyImage
                        objectFit="contain"
                        loading={index === 0 ? "eager" : "lazy"}
                        alt={ node?.featuredImage?.altText ? node.featuredImage?.altText : `Product Image of ${node?.title} #${index + 1}` }
                        image={node?.featuredImage?.gatsbyImageData}
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
            <div className="btn-wrapper text-center">
              <Link className="btn-load-more" to="/collections/valentines">See more products</Link>
            </div>
          </div>
        </div>

        {/* featured */}
        {/* <div className="section featured-products">
          <div className="container">
            <h4 className="title">Featured Products</h4>
            <div className="row row-holder">
              { featuredProducts.map((node, index) => index < 6 ? (
                <div className="col-lg-2 col-sm-3 col-6 col-holder" key={node.shopifyId}>
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
            <div className="btn-wrapper text-center">
              <Link className="btn-load-more" to="/collections/featured">See more products</Link>
            </div>
          </div>
        </div> */}

        {/* budget deals */}
        <div className="section featured-products">
          <div className="container">
            <h4 className="title">Budget Deals</h4>
            <div className="row row-holder">
              { budgetDealsProducts.map((node, index) => index < 6 ? (
                <div className="col-lg-2 col-sm-3 col-6 col-holder" key={node.shopifyId}>
                  <Link to={`/products/${node.handle}`} className="wrapper">
                    <div className="img-holder">
                    <GatsbyImage
                      objectFit="contain"
                      loading={index === 0 ? "eager" : "lazy"}
                      alt={ node.featuredImage?.altText ? node.featuredImage?.altText : `Product Image of ${node?.title} #${index + 1}` }
                      image={node.featuredImage?.gatsbyImageData}
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
            <div className="btn-wrapper text-center">
              <Link className="btn-load-more" to="/collections/budget-deals">See more products</Link>
            </div>
          </div>
        </div>

        {/* other products */}
        <div className="section featured-products">
          <div className="container">
            <h4 className="title">Other Products</h4>
            <div className="row row-holder">
              { allProducts.map((node, index) => index < 6 ? (
                <div className="col-lg-2 col-sm-3 col-6 col-holder" key={node.shopifyId}>
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
            <div className="btn-wrapper text-center">
              <Link className="btn-load-more" to="/collections/all">See more products</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const productsSection = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allShopifyCollection {
            edges {
              node {
                title
                description
                shopifyId
                handle
                products {
                  description
                  descriptionHtml
                  shopifyId
                  priceRangeV2 {
                    maxVariantPrice {
                      amount
                      currencyCode
                    }
                    minVariantPrice {
                      amount
                      currencyCode
                    }
                  }
                  variants {
                    availableForSale
                    storefrontId
                    title
                    price
                    selectedOptions {
                      name
                      value
                    }
                    compareAtPrice
                  }
                  status
                  options {
                    name
                    values
                    id
                  }
                  productType
                  storefrontId
                  tags
                  handle
                  featuredImage {
                    originalSrc
                    id
                    height
                    altText
                    gatsbyImageData(layout: CONSTRAINED, width: 160)
                  }
                  title
                }
                descriptionHtml
              }
            }
          }
        }      
      `}
      render={(data, count) => <ProductList data={data} count={count} />}
    />
  )
}

export default productsSection;