import '../utils/fontawesome.js'
import * as React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faShippingFast, faShoppingBasket } from "@fortawesome/free-solid-svg-icons"
import { StoreContext } from '../context/store-context'
import * as burgerMenuService from '../services/general-menus'
import Logo from '../../images/logo.svg';

export function Header() {
  const { checkout } = React.useContext(StoreContext)
  const items = checkout ? checkout.lineItems : []
  const quantity = items.reduce((total, item) => { return total + item.quantity }, 0)
  let state;
  burgerMenuService.burgerState.subscribe((res) => { state = res })
  const [burgerState, setBurgerState] = React.useState(state);

  function burgerSideNav() {
    let state = false;
    if(burgerState) { state = false } 
    else { state = true; }
    setBurgerState(state);
    burgerMenuService.burgerState.next(state);
  }

  React.useEffect(() => {
    burgerMenuService.burgerState.subscribe((res) => {
      setBurgerState(res);
    })
  });

  return (
    <div className="holder">
      <header className="fb-header">
        <div className="top-nav">
          <div className="container">
            <div className="wrapper">
              <div className="content-left">
                <p className="top-desc">
                  <FontAwesomeIcon icon={faShippingFast}/>
                  <span className="desc">Free Delivery On All Orders!</span>
                </p>
              </div>
              <div className="content-right">
                <p className="top-desc">
                  <a href="tel:09770884111" rel='noopener norefferer'>
                    <FontAwesomeIcon icon={faPhone}/>
                    <span className="desc">+63 977 088 4111</span>
                  </a>
    
                  {/* <Link to="/">
                    <FontAwesomeIcon icon={faShippingFast}/>
                    <span className="desc">Track your order</span>
                  </Link> */}
    
                  {/* <Link to="/" className="d-none d-lg-block">
                    <span className="icon ei-search"></span>
                  </Link> */}
                </p>
              </div>
            </div>
          </div>
        </div>
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
                    <Logo />
                  </Link>
                </div>
                <div className="col-6 col-lg-6 col-holder options">
                  <div className="options-holder d-none d-lg-block">
                    <Link to="/">
                      <span className="icon search ei-search"></span>
                    </Link>
                  </div>      
                  <div className="options-holder">
                    <Link to="/cart">
                      <span className="icon basket ei-shopping-basket">
                        <FontAwesomeIcon icon={faShoppingBasket}/>
                        {quantity > 0 && <span className="count">{quantity}</span>}
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </header>
    </div>
  )
}