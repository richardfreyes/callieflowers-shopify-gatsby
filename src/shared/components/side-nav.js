import * as React from "react"
import * as burgerMenuService from '../services/general-menus'
import Accordion from 'react-bootstrap/Accordion'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faHeart, faGift, faPercentage, faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"


export default class SideNavigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = { sideNavState: true }
  }

  burgerStateService() {
    burgerMenuService.burgerState.subscribe((res) => {
      this.setState({ sideNavState: res })
    })
  }

  componentDidMount() {
    this.burgerStateService()
  }

  render() {
    let pathName = window.location.pathname;

    return (
      <div>
        <div className={`fb-sidebar sidebar-clear ${this.state.sideNavState ? 'active' : null}`} id="sidebarClear"></div>
        <nav className={`fb-sidebar sidebar-fixed ${this.state.sideNavState ? 'active' : null}`} id="sidebar">
          <ul className="list-unstyled menu">
            <li className="fb-nav-item">
              <Link activeClassName="active"  to="/">
                <FontAwesomeIcon className="icon" icon={faHome}/><span className="label">Home</span>
              </Link>
            </li>
            <li className="fb-nav-item">
              <Link to="/collections/anniversary" activeClassName="active">
                <FontAwesomeIcon className="icon" icon={faHeart}/><span className="label">Anniversary</span>
              </Link>
            </li>
            <li className="fb-nav-item">
              <Link to="/collections/budget-deals" activeClassName="active">
                <FontAwesomeIcon className="icon" icon={faGift}/><span className="label">Budget Deals</span>
              </Link>
            </li>
            <li className="fb-nav-item">
              <Link to="/collections/sale" activeClassName="active">
                <FontAwesomeIcon className="icon" icon={faPercentage}/><span className="label">Sale Products</span>
              </Link>
            </li>
          </ul>
          {/* role="tablist" */}
          <Accordion className="menu ul dropdown" flush>
            <Accordion.Item className="li" eventKey="0">
              <Accordion.Header>
                <span className="label">Occasions</span>
                <FontAwesomeIcon className="arrow" icon={faChevronDown}/>
              </Accordion.Header>
              <Accordion.Body>
                <ul className="list-unstyled">
                  <li className="fb-category"><Link to="/collections/congratulations">Congratulations</Link></li>
                  <li className="fb-category"><Link to="/collections/get-well">Get well</Link></li>
                  <li className="fb-category"><Link to="/collections/i-love-you">I love you</Link></li>
                  <li className="fb-category"><Link to="/collections/thank-you">Thank you</Link></li>
                  <li className="fb-category"><Link to="/collections/new-baby">New baby</Link></li>
                  <li className="fb-category"><Link to="/collections/im-sorry">I'm sorry</Link></li>
                  <li className="fb-category"><Link to="/collections/funerals">Funeral &amp; Condolence Flowers</Link></li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="li" eventKey="1">
              <Accordion.Header>
                <span className="label">Types</span>
                <FontAwesomeIcon className="arrow" icon={faChevronDown}/>
              </Accordion.Header>
              <Accordion.Body>
                <ul className="list-unstyled">
                  <li className="fb-category"><Link to="/collections/roses">Roses</Link></li>
                  <li className="fb-category"><Link to="/collections/tulips">Tulips</Link></li>
                  <li className="fb-category"><Link to="/collections/sunflowers">Sunflowers</Link></li>
                  <li className="fb-category"><Link to="/collections/fruit-basket">Flowers Fruits and Basket</Link></li>
                  <li className="fb-category"><Link to="/collections/teddy">Teddy</Link></li>
                  <li className="fb-category"><Link to="/collections/vase">Vase</Link></li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            {/* <Accordion.Item className="li" eventKey="2">
              <Accordion.Header>
                <span className="label">Budget</span>
                <FontAwesomeIcon className="arrow" icon={faChevronDown}/>
              </Accordion.Header>
              <Accordion.Body>
                <ul className="list-unstyled">
                  <li className="fb-category"><Link to="/collections/below-999">₱999 below</Link></li>
                  <li className="fb-category"><Link to="/collections/all/1000-1999">₱1,000 - ₱1,000</Link></li>
                  <li className="fb-category"><Link to="/collections/all/2000-2999">₱2,000 - 2,999</Link></li>
                  <li className="fb-category"><Link to="/collections/all/3000-3999">₱3,000 - 3,999</Link></li>
                  <li className="fb-category"><Link to="/collections/all/4000-above">₱4000 above</Link></li>
                </ul>
              </Accordion.Body>
            </Accordion.Item> */}
          </Accordion>
          <ul className="list-unstyled menu sitemap">
            <li className="fb-nav-item"><Link to="/pages/about-us"><span className="label">About Us</span></Link></li>
            <li className="fb-nav-item"><Link to="/pages/card-messages-ideas"><span className="label">Card Messages Ideas</span></Link></li>
            <li className="fb-nav-item"><Link to="/pages/care-instructions"><span className="label">Care Instructions</span></Link></li>
            <li className="fb-nav-item"><Link to="/pages/contact-us"><span className="label">Contact Us</span></Link></li>
            <li className="fb-nav-item"><Link to="/pages/faqs"><span className="label">FAQs</span></Link></li>
            <li className="fb-nav-item"><Link to="/pages/discover-the-meaning-of-flowers"><span className="label">Discover the Meaning of Flowers</span></Link></li>
            <li className="fb-nav-item"><Link to="/pages/terms-and-conditions"><span className="label">Terms and Conditions</span></Link></li>
            <li className="fb-nav-item"><Link to="/pages/privacy-policy"><span className="label">Privacy Policy</span></Link></li>
          </ul>
          <ul className="list-unstyled ul services">
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
            <li><a href="https://www.facebook.com/callieflowersph/" aria-label="facebook" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="icon" icon={faFacebook}/></a></li>
            <li><a href="https://www.instagram.com/callieflowersph/" aria-label="instagram" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="icon" icon={faInstagram}/></a></li>
          </ul>
          <p className="copyright">©{new Date().getFullYear()} Callie Flowers. <br /> All rights reserved.</p>
        </nav>
      </div>
    )
  }
}
