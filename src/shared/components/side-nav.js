import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faHeart, faGift, faPercentage } from "@fortawesome/free-solid-svg-icons"

export default class SideNavigation extends React.Component {
  render() {
    return (
      <nav className="fb-sidebar sidebar-fixed active" id="sidebar">
      <ul className="list-unstyled menu">
        <li className="fb-nav-item">
          <Link className="active" to="/">
            <FontAwesomeIcon className="icon" icon={faHome}/>
            <span className="label">Home</span>
          </Link>
        </li>
        <li className="fb-nav-item">
          <Link to="/">
            <FontAwesomeIcon className="icon" icon={faHeart}/>
            <span className="label">Anniversary</span>
          </Link>
        </li>
        <li className="fb-nav-item">
          <Link to="/">
            <FontAwesomeIcon className="icon" icon={faGift}/>
            <span className="label">Birthday Bundles</span>
          </Link>
        </li>
        <li className="fb-nav-item">
          <Link to="/">
            <FontAwesomeIcon className="icon" icon={faPercentage}/>
            <span className="label">Sale Products</span>
          </Link>
        </li>
      </ul>
      {/* role="tablist" */}
      <ul className="list-unstyled menu dropdown" id="accordion">
      {/* role="tab" */}
        <li className="fb-nav-item" id="headingOne">
          <Link data-toggle="collapse" to="#occasions" aria-expanded="true" aria-controls="occasions">
            {/* <!-- <span className="icon ei-flower"></span> --> */}
            <span className="label">Occasions</span>
            <span className="arrow ei-chevron-down"></span>
          </Link>
          {/* role="tabpanel" */}
          <div id="occasions" className="collapse" aria-labelledby="headingOne">
            <ul className="list-unstyled">
              <li className="fb-category"><Link to="/">Anniversary</Link></li>
              <li className="fb-category"><Link to="/">Birthday</Link></li>
              <li className="fb-category"><Link to="/">Congratulations</Link></li>
              <li className="fb-category"><Link to="/">Father's Day Collection</Link></li>
              <li className="fb-category"><Link to="/">Get well</Link></li>
              <li className="fb-category"><Link to="/">I love you</Link></li>
              <li className="fb-category"><Link to="/">I'm sorry</Link></li>
              <li className="fb-category"><Link to="/">New baby</Link></li>
              <li className="fb-category"><Link to="/">Romance</Link></li>
              <li className="fb-category"><Link to="/">Thank you</Link></li>
            </ul>
          </div>
        </li>

        {/* role="tab" */}
        <li className="fb-nav-item" id="headingTwo">
          <Link data-toggle="collapse" to="#types" aria-expanded="true" aria-controls="types">
            {/* <!-- <span className="icon ei-gift"></span> --> */}
            <span className="label">Types</span>
            <span className="arrow ei-chevron-down"></span>
          </Link>
          {/* role="tabpanel" */}
          <div id="types" className="collapse" aria-labelledby="headingTwo">
            <ul className="list-unstyled">
              <li className="fb-category"><Link to="/">Anniversary</Link></li>
              <li className="fb-category"><Link to="/">Birthday</Link></li>
              <li className="fb-category"><Link to="/">Congratulations</Link></li>
              <li className="fb-category"><Link to="/">Father's Day Collection</Link></li>
              <li className="fb-category"><Link to="/">Get well</Link></li>
              <li className="fb-category"><Link to="/">I love you</Link></li>
              <li className="fb-category"><Link to="/">I'm sorry</Link></li>
              <li className="fb-category"><Link to="/">New baby</Link></li>
              <li className="fb-category"><Link to="/">Romance</Link></li>
              <li className="fb-category"><Link to="/">Thank you</Link></li>
            </ul>
          </div>
        </li>

        {/* role="tab" */}
        <li className="fb-nav-item" id="headingThree">
          <Link data-toggle="collapse" to="budget" aria-expanded="true" aria-controls="budget">
            <span className="label">Budget</span>
            <span className="arrow ei-chevron-down"></span>
          </Link>
          <div id="budget" className="collapse" role="tabpanel" aria-labelledby="headingThree">
            <ul className="list-unstyled">
              <li className="fb-category"><Link to="/">₱999 below</Link></li>
              <li className="fb-category"><Link to="/">₱1,500 - ₱2,499</Link></li>
              <li className="fb-category"><Link to="/">₱3,000 above</Link></li>
            </ul>
          </div>
        </li>
      </ul>
      <ul className="list-unstyled menu sitemap">
        <li className="fb-nav-item"><Link to="/"><span className="label">About Us</span></Link></li>
        <li className="fb-nav-item"><Link to="/"><span className="label">Card Message Ideas</span></Link></li>
        <li className="fb-nav-item"><Link to="/"><span className="label">Care Instructions</span></Link></li>
        <li className="fb-nav-item"><Link to="/"><span className="label">Birthday Flowers</span></Link></li>
        <li className="fb-nav-item"><Link to="/"><span className="label">Anniversary Gift</span></Link></li>
        <li className="fb-nav-item"><Link to="/"><span className="label">Contact Us</span></Link></li>
        <li className="fb-nav-item"><Link to="/"><span className="label">FAQs</span></Link></li>
        <li className="fb-nav-item"><Link to="/"><span className="label">Discover the Meaning of Flowers</span></Link></li>
        <li className="fb-nav-item"><Link to="/"><span className="label">Terms and Conditions</span></Link></li>
        <li className="fb-nav-item"><Link to="/"><span className="label">Privacy Policy</span></Link></li>
      </ul>
      <ul className="list-unstyled services">
        <li className="fb-services">
          <div className="wrapper">
            <div className="icon-holder">
              <StaticImage src="../../images/services/delivery.svg" alt="Category" />
            </div>
            <div className="text-holder">
              <p className="text-heading">Free Flower Delivery</p>
              <p className="desc">Across Metro Manila</p>
            </div>
          </div>
        </li>
        <li className="fb-services">
        <div className="wrapper">
          <div className="icon-holder">
            <StaticImage src="../../images/services/calendar.svg" alt="Category" />
          </div>
          <div className="text-holder">
            <p className="text-heading">Choose Date</p>
            <p className="desc">Always on time</p>
          </div>
        </div>
        </li>
        <li className="fb-services">
        <div className="wrapper">
          <div className="icon-holder">
            <StaticImage src="../../images/services/fresh.svg" alt="Category" />
          </div>
          <div className="text-holder">
            <p className="text-heading">Always Fresh</p>
            <p className="desc">Last 7 Days</p>
          </div>
        </div>
        </li>
      </ul>

      <ul className="list-unstyled social">
        <li>
          <Link to="/"><span className="social-icon ei-facebook"></span></Link>
        </li>
        <li>
          <Link to="/"><span className="social-icon ei-instagram"></span></Link>
        </li>
      </ul>
        <p className="copyright">©{new Date().getFullYear()} Callie Flowers. <br /> All rights reserved.</p>
      </nav>
    )
  }
}
