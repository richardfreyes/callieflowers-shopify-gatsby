import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import PreviewCompatibleImage from '../components/preview-compatible-image'
import SideNavigation from "../components/side-nav"
import { StaticImage } from "gatsby-plugin-image"

export default function CollectionTemplate(props) {
  const data = props.pageContext.product
  return (
    <Layout>
      <SideNavigation/>
      <div className="sections-wrapper" id="content">
        <div className="section page-banner stars">
          <div className="container">
            <div className="desc-wrapper">
              <h1 className="page-title">{data.title}</h1>
              <p className="page-desc">
                {data.description}
              </p>
            </div>
            <div className="services-wrapper">
            <div class="row row-holder">
              <div class="col-3 col-holder">
                <div class="holder">
                  <div class="icon-holder">
                    <StaticImage src="../../images/services/time.svg" alt="Order Time" />
                  </div>
                  <div class="text-holder">
                    <p class="text-heading">Same Day Delivery</p>
                    <p class="desc">Orders before 2PM</p>
                  </div>
                </div>
              </div>

              <div class="col-3 col-holder">
                <div class="holder">
                  <div class="icon-holder">
                    <StaticImage src="../../images/services/delivery.svg" alt="Free Delivery" />
                  </div>
                  <div class="text-holder">
                    <p class="text-heading">Free Flower Delivery</p>
                    <p class="desc">Across Metro Manila</p>
                  </div>
                </div>
              </div>

              <div class="col-3 col-holder">
                <div class="holder">
                  <div class="icon-holder">
                    <StaticImage src="../../images/services/calendar.svg" alt="Date" />
                  </div>
                  <div class="text-holder">
                    <p class="text-heading">Choose Date</p>
                    <p class="desc">Always on time</p>
                  </div>
                </div>
              </div>

              <div class="col-3 col-holder">
                <div class="holder">
                  <div class="icon-holder">
                    <StaticImage src="../../images/services/fresh.svg" alt="Fresh Flowers" />
                  </div>
                  <div class="text-holder">
                    <p class="text-heading">Always Fresh</p>
                    <p class="desc">Last 7 Days</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className="section featured-products">
          <div className="container">
            <div className="row row-holder">
              {data.products.map((node) => {
                return (
                  <div className="col-lg-2 col-sm-3 col-6 col-holder" key={node.shopifyId}>
                    <Link to={`/products/${node.handle}`} className="wrapper">
                      <div className="img-holder">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: node.images[0].originalSrc,
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
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}