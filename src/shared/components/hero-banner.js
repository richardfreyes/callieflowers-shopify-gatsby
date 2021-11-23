import '../../stylesheets/main.scss'
import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import deskSlider1 from "../../images/home/desk-slider-1.gif"
import mobSlider1 from "../../images/home/mob-slider-1.gif"
import Slider from "react-slick"

export default class HeroBanner extends React.Component {
  render() {
    const bannerSlider = {
      lazyLoad: 'ondemand',
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      fade: true,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 1500,
      cssEase: 'linear',
      // nextArrow: '<i class="fr-slick-next fas fa-chevron-right"></i>',
      // prevArrow: '<i class="fr-slick-prev fas fa-chevron-left"></i>',
      // lazyLoad: 'ondemand',
      // slidesToShow: 3,
      // slidesToScroll: 1,
      // infinite: true,
      // nextArrow: `<FontAwesomeIcon className="fr-slick-next fas fa-chevron-right" icon={faChevronRight}/>`,
      // prevArrow: `<FontAwesomeIcon className="fr-slick-prev fas fa-chevron-left" icon={faChevronRight}/>`,
    };
    return (
      <div className="section intro">
        <div className="container">
          <div className="row row-holder">
            <div className="col-holder col-xl-10 col-lg-9 col-md-12 col-12">
              {/* <!-- desktop --> */}
              <Slider className="featured-slider d-none d-md-block" {...bannerSlider}>
                <img src={deskSlider1} alt="Birthday Flowers" />
              </Slider>

              {/* <!-- mobile --> */}
              <Slider className="featured-slider d-xs-block d-md-none" {...bannerSlider}>
                <img src={mobSlider1} alt="Birthday Flowers" />
              </Slider>
            </div>
            <div className="flash-sale col-holder col-xl-2 col-lg-3 d-none d-lg-block">
              <Link to="/" className="link-wrap">
                <div className="img-holder">
                  <StaticImage src="../../images/home/product-flash.png" alt="Category" />
                </div>
                <div className="desc">
                  <p className="badge best-seller">Best Seller</p>
                  <p className="product-name">Beautiful You</p>
                  <p className="original-price">P2,000<span className="decimal">.00</span></p>
                  <p className="old-price"><span className="price">P2,000<span className="decimal">.00</span></span> -50%</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="categories">
            <ul className="scroll-category" id="scrollCategory">
              <li>
                <Link to="/collections/all">
                  <StaticImage src="../../images/home/category/all-products.svg" alt="Category" />
                  <p>All Products</p>
                </Link>
              </li>
              <li>
                <Link to="/collections/sale">
                  <StaticImage src="../../images/home/category/sale.svg" alt="Category" />
                  <p>Sale</p>
                </Link>
              </li>
              <li>
                <Link to="/collections/premium-flowers">
                  <StaticImage src="../../images/home/category/premium-flowers.svg" alt="Category" />
                  <p>Premium Flowers</p>
                </Link>
              </li>
              <li>
                <Link to="/collections/budget-deals">
                  <StaticImage src="../../images/home/category/budget-deals.svg" alt="Category" />
                  <p>Budget Deals</p>
                </Link>
              </li>
              <li>
                <Link to="/collections/all">
                  <StaticImage src="../../images/home/category/birthday-bundle.svg" alt="Category" />
                  <p>Birthday Bundle</p>
                </Link>
              </li>
              <li>
                <Link to="/collections/anniversary">
                  <StaticImage src="../../images/home/category/anniversary.svg" alt="Category" />
                  <p>Anniversary</p>
                </Link>
              </li>
              <li>
                <Link to="/collections/all">
                  <StaticImage src="../../images/home/category/birthday-flowers.svg" alt="Category" />
                  <p>Birthday Flowers</p>
                </Link>
              </li>
              <li>
                <Link to="/collections/all">
                  <StaticImage src="../../images/home/category/cakes.svg" alt="Category" />
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

