import * as React from "react"
import { Link, graphql, StaticQuery  } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage } from "gatsby-plugin-image"
import { formatPrice } from "../utils/format-price"
import Slider from "react-slick"
import IconAllProducts from '../../images/home/category/all-products.svg'
import IconSale from '../../images/home/category/sale.svg'
import IconPremiumFlowers from '../../images/home/category/premium-flowers.svg'
import IconBudgetDeals from '../../images/home/category/budget-deals.svg'
import IconBirthdayBundle from '../../images/home/category/birthday-bundle.svg'
import IconAnniversary from '../../images/home/category/anniversary.svg'
import IconBirthdayFlowers from '../../images/home/category/birthday-flowers.svg'
import IconCakes from '../../images/home/category/cakes.svg'

class HeroBanner extends React.Component {
  render() {
    const { data } = this.props;
    const bannerSlider = {
      lazyLoad: 'ondemand',
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      fade: true,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 5000,
      cssEase: 'linear',
    };
    return (
      <div className="section intro">
        <div className="container">
          <div className="row row-holder">
            <div className="col-holder col-xl-10 col-lg-9 col-md-12 col-12">
              {/* <!-- desktop --> */}
              <Slider className="featured-slider d-none d-md-block" {...bannerSlider}>
                <StaticImage src="../../images/home/v2/birthday-flowers.png" layout="fullWidth" alt="Birthday Flowers" />
                <StaticImage src="../../images/home/v2/budget-deals.png" layout="fullWidth" alt="Budget Deals"/>
              </Slider>

              {/* <!-- mobile --> */}
              <Slider className="featured-slider d-xs-block d-md-none" {...bannerSlider}>
                <StaticImage src="../../images/home/v2/birthday-flowers-mobile.png" layout="fullWidth" alt="Birthday Flowers"/>
                <StaticImage src="../../images/home/v2/budget-deals-mobile.png" layout="fullWidth" alt="Budget Deals"/>
              </Slider>
            </div>
            <div className="flash-sale col-holder col-xl-2 col-lg-3 d-none d-lg-block">
              {
                data.allShopifyProduct.edges.map(({node}) => (
                  <Link to={`/products/${node.handle}`} key={node.title} className="link-wrap">
                    <div className="img-holder">
                      <GatsbyImage
                        objectFit="contain"
                        alt={ node.featuredImage.altText ? node.featuredImage.altText : `Product Image of ${node.title}` }
                        image={node.featuredImage.gatsbyImageData}
                      />
                    </div>
                    <div className="desc">
                      <p className="badge best-seller">Recommended</p>
                      <p className="product-name">{node.title}</p>
                      {node.variants[0].compareAtPrice ? 
                        <span>
                          <p className="old-price">{formatPrice("PHP", node.variants[0].price)}</p>
                          <p className="original-price hero-price">{formatPrice("PHP", node.variants[0].compareAtPrice)}</p> 
                        </span>
                        : 
                        <span>
                          <p className="original-price">{formatPrice("PHP", node.variants[0].price)}</p>
                        </span>
                      }
                    </div>
                  </Link>
                ))
              }
            </div>
          </div>

          <div className="categories">
            <svg className="d-none" width="48" height="48" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" fill="white"></rect><g clipPath="url(#clip0)"><path d="M43.1092 15.5894C42.8699 10.2254 38.4468 5.94971 33.0237 5.94971C28.7253 5.94971 25.0567 8.63681 23.5997 12.4218C22.1427 8.63681 18.4741 5.94971 14.1757 5.94971C8.84902 5.94971 4.48885 10.0753 4.10866 15.305C2.59095 24.1218 17.3891 37.5942 21.9352 41.4961C22.6874 42.1418 23.7957 42.1506 24.5584 41.5173C29.2126 37.6523 44.5066 24.2124 43.1092 15.5894Z" fill="#E8C2D8"></path><path d="M43.1092 15.5895C42.8699 10.2254 38.4467 5.94971 33.0237 5.94971C31.2718 5.94971 28.6095 6.47174 26.6128 8.248C32.4055 7.78458 35.5261 10.0372 36.4024 14.8665C37.2787 19.6958 30.1639 27.4453 25.0793 32.1048C22.3401 34.615 18.7572 34.5092 15.7965 32.2662C13.1327 30.2482 8.31233 26.6713 6.12689 23.5651C6.82755 25.1531 8.89119 27.8631 9.68716 28.9132C13.951 34.4131 19.4609 39.3718 21.935 41.4958C22.6874 42.1417 23.7957 42.1508 24.5586 41.5173C29.2128 37.6521 44.5065 24.2123 43.1092 15.5895Z" fill="#D392D8"></path><path d="M8.09944 35.45L8.76323 37.3164C8.79165 37.3963 8.84791 37.4596 8.91891 37.4917L10.5772 38.2388C10.8114 38.3443 10.8114 38.7176 10.5772 38.8231L8.91891 39.5702C8.84791 39.6022 8.79165 39.6655 8.76323 39.7454L8.09944 41.6119C8.00566 41.8756 7.67401 41.8756 7.58023 41.6119L6.91645 39.7454C6.88803 39.6655 6.83176 39.6022 6.76076 39.5702L5.10251 38.8231C4.86826 38.7176 4.86826 38.3443 5.10251 38.2388L6.76076 37.4917C6.83176 37.4597 6.88803 37.3963 6.91645 37.3164L7.58023 35.45C7.67401 35.1863 8.00566 35.1863 8.09944 35.45Z" fill="#E8C2D8"></path><path d="M42.0318 31.3806L42.5242 32.7651C42.5453 32.8243 42.587 32.8713 42.6397 32.8951L43.8698 33.4492C44.0436 33.5276 44.0436 33.8044 43.8698 33.8827L42.6397 34.4369C42.587 34.4607 42.5453 34.5076 42.5242 34.5669L42.0318 35.9514C41.9622 36.147 41.7162 36.147 41.6467 35.9514L41.1542 34.5669C41.1332 34.5077 41.0915 34.4607 41.0387 34.4369L39.8086 33.8827C39.6348 33.8044 39.6348 33.5276 39.8086 33.4492L41.0387 32.8951C41.0914 32.8713 41.1332 32.8244 41.1542 32.7651L41.6467 31.3806C41.7162 31.185 41.9622 31.185 42.0318 31.3806Z" fill="#E8C2D8"></path></g><defs><clipPath id="clip0"><rect width="40" height="40" fill="white" transform="translate(4 4)"></rect></clipPath></defs></svg>
            <ul className="scroll-category" id="scrollCategory">
              <li>
                <Link to="/collections/all">
                  <IconAllProducts />
                  <p>All Products</p>
                </Link>
              </li>
              <li>
                <Link to="/collections/sale">
                  <IconSale />
                  <p>Sale</p>
                </Link>
              </li>
              <li>
                <Link to="/collections/premium-flowers">
                  <IconPremiumFlowers />
                  <p>Premium Flowers</p>
                </Link>
              </li>
              <li>
                <Link to="/collections/budget-deals">
                  <IconBudgetDeals />
                  <p>Budget Deals</p>
                </Link>
              </li>
              <li>
                <Link to="/collections/all">
                  <IconBirthdayBundle />
                  <p>Birthday Bundle</p>
                </Link>
              </li>
              <li>
                <Link to="/collections/anniversary">
                  <IconAnniversary />
                  <p>Anniversary</p>
                </Link>
              </li>
              <li>
                <Link to="/collections/all">
                  <IconBirthdayFlowers />
                  <p>Birthday Flowers</p>
                </Link>
              </li>
              <li>
                <Link to="/collections/all">
                  <IconCakes />
                  <p>Cakes</p>
                </Link>
              </li>
            </ul>
          </div>

          <div className="categories-holder d-xs-block d-md-none">
            <div className="categories-bar">
              <div className="indicator" id="indicator"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


const heroBanner = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allShopifyProduct(filter: {title: {eq: "Callie"}}) {
            edges {
              node {
                title
                handle
                id
                featuredImage {
                  originalSrc
                }
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
                featuredImage {
                  originalSrc
                  id
                  height
                  altText
                  gatsbyImageData(layout: CONSTRAINED, width: 150)
                }
              }
            }
          }
        }      
      `}
      render={(data, count) => <HeroBanner data={data} count={count} />}
    />
  )
}

export default heroBanner;