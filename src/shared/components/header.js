import '../../stylesheets/main.scss'
import '../utils/fontawesome.js'
import * as React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faShippingFast, faShoppingBasket } from "@fortawesome/free-solid-svg-icons"
import { StoreContext } from '../context/store-context'
import * as burgerMenuService from '../services/general-menus'
import Logo from '../../images/logo.svg';
// import { Toast } from './toast'

export function Header() {
  // constructor(props) {
  //   super(props);
  //   // this.state = { toggle: true };
  //   // this.sideBar = React.createRef();
  //   // this.burgerSideNav = this.burgerSideNav.bind(this);
  // }
  // burgerSideNav(e) {
  //   // this.setState(prevState => ({ toggle: !prevState.toggle }));
  //   // if(this.state.toggle) {
  //   //   document.getElementById('sidebar').classList.toggle('active');
  //   //   document.getElementById('sidebarClear').classList.toggle('active');
  //   // }
  //   // var _sideBar = function() {
  //   //   $('#sidebarCollapse').on('click', function () {
  //   //       $('#sidebar').toggleClass('active');
  //   //       $('#sidebarClear').toggleClass('active');
  //   //       $('#sidebarCollapse').attr('aria-expanded',$(this).attr('aria-expanded')==='true'?'false':'true' );
  //   //   });
  //   //   if(pathName === '/') {
  //   //     $('#sidebarCollapse').attr("aria-expanded", true);
  //   //     $('#sidebar').removeClass('active');
  //   //     $('#sidebarClear').removeClass('active');
  //   //   }
  //   // }
  // }


  const { checkout } = React.useContext(StoreContext)
  // const { checkout, loading, didJustAddToCart } = React.useContext(StoreContext)
  const items = checkout ? checkout.lineItems : []
  const quantity = items.reduce((total, item) => { return total + item.quantity }, 0)
  
  const [burgerState, setBurgerState] = React.useState(true);

  function burgerSideNav() {
    setBurgerState(prevState => !prevState);
    burgerMenuService.burgerState.next(burgerState);
  }

  // render() {
    return (
      <div className="holder">
        <header className="fb-header">
          <div className="top-nav">
            <div className="container">
              <div className="wrapper">
                <div className="content-left">
                  <p className="top-desc d-none d-lg-block">
                    <span className="icon ei-truck-2"></span>&nbsp;
                    <span className="desc">Free delivery across all over Metro Manila. Same day delivery! Order now!</span>
                  </p>
                </div>
                <div className="content-right">
                  <p className="top-desc">
                    <Link to="tel:09770884111">
                      <FontAwesomeIcon icon={faPhone}/>
                      <span className="desc">+63 977 088 4111</span>
                    </Link>
      
                    <Link to="/">
                      <FontAwesomeIcon icon={faShippingFast}/>
                      <span className="desc">Track your order</span>
                    </Link>
      
                    <Link to="/" className="d-none d-lg-block">
                      <span className="icon ei-search"></span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
            {/* <SideNavigation sideBar={this.sideBar} /> */}
            <div className="main-nav">
              <div className="container-fluid">
                <div className="row row-holder">
                  <div className="col-6 col-lg-6 col-holder logo">
                    <button 
                      onClick={() => {burgerSideNav()}}
                      className="navbar-toggler navbar-toggler-right" 
                      id="sidebarCollapse" 
                      type="button" 
                      data-toggle="collapse" 
                      data-target="#navbarSupportedContent" 
                      aria-controls="navbarSupportedContent" 
                      aria-expanded={burgerState}
                      aria-label="Toggle navigation">
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                    <Link className="navbar-brand" to="/">
                      {/* <StaticImage src={logo} alt="Logo" /> */}
                      <Logo />
                    </Link>
                  </div>
                  <div className="col-6 col-lg-6 col-holder options">
                    <div className="options-holder d-none d-lg-block">
                      <Link to="/">
                        <span className="icon search ei-search"></span>
                      </Link>
                    </div>
      
                    {/* <div className="options-holder">
                      <Link to="/">
                        <FontAwesomeIcon className="icon user" icon={faUserAlt}/>
                        <span className="desc">Login</span>
                      </Link>
                    </div> */}
      
                    <div className="options-holder">
                      <Link to="/cart">
                        <span className="icon basket ei-shopping-basket">
                          <FontAwesomeIcon icon={faShoppingBasket}/>
                          {/* <span className="count">0</span> */}
                          {quantity > 0 && <span className="count">{quantity}</span>}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </header> 
        {/* <Toast show={loading || didJustAddToCart}>
            {!didJustAddToCart ? ( "Updating…" ) : (
              <>
                Added to cart{" "}
                <svg width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg" >
                  <path d="M5.019 10.492l-2.322-3.17A.796.796 0 013.91 6.304L6.628 9.14a1.056 1.056 0 11-1.61 1.351z" fill="#fff" />
                  <path d="M5.209 10.693a1.11 1.11 0 01-.105-1.6l5.394-5.88a.757.757 0 011.159.973l-4.855 6.332a1.11 1.11 0 01-1.593.175z" fill="#fff" />
                  <path d="M5.331 7.806c.272.326.471.543.815.163.345-.38-.108.96-.108.96l-1.123-.363.416-.76z" fill="#fff" />
                </svg>
              </>
            )}
          </Toast> */}
      </div>
    )
  // }
}


// const Header = ({ siteTitle }) => (

// )

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

// export default Header
