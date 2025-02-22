import React from "react"
import Layout from "../components/layout"
import PreviewCompatibleImage from '../components/preview-compatible-image'
import { Link } from "gatsby"
import IconTime from '../../images/services/time.svg'
import IconDelivery from '../../images/services/delivery.svg'
import IconCalendar from '../../images/services/calendar.svg'
import IconFresh from '../../images/services/fresh.svg'
import IconVday from '../../images/vday.svg'

export default function CollectionTemplate(props) {
  const data = props.pageContext.product
  return (
    <Layout>
      <div className="section page-banner stars">
        <div className="container">
          <div className="desc-wrapper">
            <h1 className="page-title">{data.title}</h1>
            <p className="page-desc">{data.description}</p>
          </div>
          <div className="services-wrapper">
          <div className="row row-holder">
            <div className="col-3 col-holder">
              <div className="holder">
                <div className="icon-holder">
                  <IconTime />
                </div>
                <div className="text-holder">
                  <p className="text-heading">Same Day Delivery</p>
                  <p className="desc">Orders before 2PM</p>
                </div>
              </div>
            </div>

            <div className="col-3 col-holder">
              <div className="holder">
                <div className="icon-holder">
                  <IconDelivery />
                </div>
                <div className="text-holder">
                  <p className="text-heading">Free Flower Delivery</p>
                  <p className="desc">Across Metro Manila</p>
                </div>
              </div>
            </div>

            <div className="col-3 col-holder">
              <div className="holder">
                <div className="icon-holder">
                  <IconCalendar />
                </div>
                <div className="text-holder">
                  <p className="text-heading">Choose Date</p>
                  <p className="desc">Always on time</p>
                </div>
              </div>
            </div>

            <div className="col-3 col-holder">
              <div className="holder">
                <div className="icon-holder">
                  <IconFresh />
                </div>
                <div className="text-holder">
                  <p className="text-heading">Always Fresh</p>
                  <p className="desc">Last 7 Days</p>
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
            {data && data.products.map((node) => {
              return (
                <div className="col-lg-2 col-sm-3 col-6 col-holder" key={node.shopifyId}>
                  <Link to={`/products/${node.handle}`} className="wrapper">
                    {/* { node.tags.map(tag => ( tag === 'vday' ? <IconVday key={tag} className='icon-vday' /> : '' ))} */}
                    <div className="img-holder">
                      <PreviewCompatibleImage imageInfo={{ image: node.images[0]?.originalSrc, alt: `${node.title}` }} />
                    </div>
                    <div className="text-holder">
                      <p className="product-name">{node.title}</p>
                      {node.variants[0].compareAtPrice ? 
                        <span>
                          <p className="origina-price"><span>Original Price: ₱{node.variants[0].compareAtPrice}</span></p> 
                          <p className="price-now">Now: ₱{node.variants[0].price}</p>
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
    </Layout>
  )
}