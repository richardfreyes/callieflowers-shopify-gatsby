import '../../stylesheets/main.scss'
import * as React from "react"
import { Link, graphql, StaticQuery  } from "gatsby"
import PreviewCompatibleImage from './preview-compatible-image'

class ProductList extends React.Component {
  render() {
    const { data } = this.props
    console.log('this.props', data.allShopifyProduct);
    return (
      <div className="section featured-products">
        <div className="container">
          <h4 className="title">Featured Products</h4>
          <div className="row row-holder">
            {data.allShopifyProduct.edges.map(({ node }) => (
              node.productType === 'flowers' ?
              <div className="col-lg-3 col-xl-2 col-sm-3 col-6 col-holder" key={node.shopifyId}>
                <Link to={`/products/${node.handle}`} className="wrapper">
                  {/* <p className="badge best-seller">Best Seller</p> */}
                  <div className="img-holder">
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: node.images[0].src,
                      alt: `${node.title}`,
                    }}
                  />
                  </div>
                  <div className="text-holder">
                    <p className="product-name">{node.title}</p>
                    {node.variants[0].compareAtPrice ? 
                      <span>
                        <p className="origina-price"><span>Original Price: ₱{node.variants[0].price}</span></p> 
                        <p className="price-now">Now: ₱{node.priceRangeV2.minVariantPrice.amount}</p>
                      </span>
                      : 
                      <span>
                        <p className="origina-price">Price: ₱{node.variants[0].price}</p>
                      </span>
                    }
                  </div>
                </Link>
            </div> : ''
            ))}

          </div>
          <div className="btn-wrapper text-center">
            <Link className="btn-load-more" to="/">See more products</Link>
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
          allShopifyProduct(sort: {fields: [title]}) {
            edges {
              node {
                title
                shopifyId
                description
                priceRangeV2 {
                  minVariantPrice {
                    amount
                    currencyCode
                  }
                }
                images {
                  id
                  src
                }
                productType
                tags
                variants {
                  compareAtPrice
                  price
                }
                handle
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