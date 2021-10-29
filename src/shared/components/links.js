import '../../stylesheets/main.scss'
import * as React from "react"
import { Link } from "gatsby"
import Slider from "react-slick"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons"

export default class LinksNavigation extends React.Component {
  render() {
    const settings = {
      lazyLoad: 'ondemand',
      dots: false,
      infinite: false,
      speed: 300,
      arrows: true,
      // nextArrow: `<FontAwesomeIcon className="fr-slick-next fas fa-chevron-right" icon={faChevronRight}/>`,
      // prevArrow: `<FontAwesomeIcon className="fr-slick-prev fas fa-chevron-left" icon={faChevronRight}/>`,
      slidesToShow: 20,
      centerMode: false,
      variableWidth: true
    };

    return (
      <div className="links">
        <div className="container-fluid">
          <Slider className="nav-tags" {...settings}>
            <span className="tags"><Link to="/">View All Products</Link></span>
            <span className="tags"><Link to="/">Sunflower</Link></span>
            <span className="tags"><Link to="/">Roses</Link></span>
            <span className="tags"><Link to="/">Lilies</Link></span>
            <span className="tags"><Link to="/">Sale</Link></span>
            <span className="tags"><Link to="/">Premium Flowers</Link></span>
            <span className="tags"><Link to="/">Birthday Bundle</Link></span>
            <span className="tags"><Link to="/">Cakes</Link></span>
            <span className="tags"><Link to="/">FAQ</Link></span>
            <span className="tags"><Link to="/">Contact Us</Link></span>
            <span className="tags"><Link to="/">Facebook</Link></span>
            <span className="tags"><Link to="/">Card Message Ideas</Link></span>
            <span className="tags"><Link to="/">Anniversary</Link></span>
            <span className="tags"><Link to="/">Congratulations</Link></span>
            <span className="tags"><Link to="/">Father's Day Collection</Link></span>
            <span className="tags"><Link to="/">Tulips</Link></span>
            <span className="tags"><Link to="/">Condolence</Link></span>
            <span className="tags"><Link to="/">View All Products</Link></span>
            <span className="tags"><Link to="/">Sunflower</Link></span>
            <span className="tags"><Link to="/">Roses</Link></span>
            <span className="tags"><Link to="/">Lilies</Link></span>
            <span className="tags"><Link to="/">Sale</Link></span>
            <span className="tags"><Link to="/">Premium Flowers</Link></span>
            <span className="tags"><Link to="/">Birthday Bundle</Link></span>
            <span className="tags"><Link to="/">Cakes</Link></span>
            <span className="tags"><Link to="/">FAQ</Link></span>
            <span className="tags"><Link to="/">Contact Us</Link></span>
            <span className="tags"><Link to="/">Facebook</Link></span>
            <span className="tags"><Link to="/">Card Message Ideas</Link></span>
            <span className="tags"><Link to="/">Anniversary</Link></span>
            <span className="tags"><Link to="/">Congratulations</Link></span>
            <span className="tags"><Link to="/">Father's Day Collection</Link></span>
            <span className="tags"><Link to="/">Tulips</Link></span>
            <span className="tags"><Link to="/">Condolence</Link></span>
          </Slider>
          {/* <ul className="nav-tags">

          </ul> */}
        </div>
      </div>
    )
  }
}

