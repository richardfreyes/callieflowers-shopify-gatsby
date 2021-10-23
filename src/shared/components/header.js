import '../../stylesheets/main.scss'
import '../utils/fontawesome.js'
import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faShippingFast, faShoppingBasket, faUserAlt } from "@fortawesome/free-solid-svg-icons"


export default class Header extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = { toggle: true };
  //   // this.sideBar = React.createRef();
  //   // this.burgerSideNav = this.burgerSideNav.bind(this);

  //   // console.log('this.ref', this.ref)
  // }

  // burgerSideNav(e) {
  //   // this.setState(prevState => ({ toggle: !prevState.toggle }));

  //   // console.log('toggle', this.state.toggle);

  //   // console.log('this.sideBar', this.sideBar);


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
  
  //   //   var pathName = window.location.pathname;
  
  //   //   if(pathName === '/') {
  //   //     $('#sidebarCollapse').attr("aria-expanded", true);
  //   //     $('#sidebar').removeClass('active');
  //   //     $('#sidebarClear').removeClass('active');
  //   //   }
  
  //   // }
  // }

  render() {
    // const { data } = this.props.data;
    // console.log('data', data);
    return (
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
                  <button onClick={ this.burgerSideNav } className="navbar-toggler navbar-toggler-right" id="sidebarCollapse" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                    {/* <Navbar.Toggle aria-controls="sidebarCollapse">
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </Navbar.Toggle> */}
                  <Link className="navbar-brand" href="index.html">
                    <StaticImage src="../../images/logo.svg" alt="Logo" />
                  </Link>
                </div>
                <div className="col-6 col-lg-6 col-holder options">
                  <div className="options-holder d-none d-lg-block">
                    <Link to="/">
                      <span className="icon search ei-search"></span>
                    </Link>
                  </div>
    
                  <div className="options-holder">
                    <Link to="/">
                      <FontAwesomeIcon className="icon user" icon={faUserAlt}/>
                      <span className="desc">Login</span>
                    </Link>
                  </div>
    
                  <div className="options-holder">
                    <Link to="/">
                      <span className="icon basket ei-shopping-basket">
                        <FontAwesomeIcon icon={faShoppingBasket}/>
                        <span className="count" data-cart-count="">0</span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </header>
    )
  }
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
