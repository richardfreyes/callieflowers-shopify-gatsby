import * as React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons"

class LinksNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productListSteps: 1,
      productAmountVisible: 10,
      carouselWidth: 0
    }
    // this.width = window.innerWidth;

    // if(this.width < 575) {
    //   this.state.productAmountVisible = 17;
    // }

    // console.log('this.width', this.width)
  }

  handleCarouselNext = () => {
    this.carouselize();
    if(this.state.productListSteps < this.state.productAmountVisible) {
      this.setState({
        productListSteps: this.state.productListSteps + 1
      })
    }
  }

  handleCarouselPrev = () => {
    this.carouselize();
    if(this.state.productListSteps > 0) {
      this.setState(prevState => {
        return { productListSteps: prevState.productListSteps - 1 }
      });
    }
  }

  carouselize() {
    let productListWidth = 0;
    let productList = document.querySelector('.js-product-list');
    let products = document.querySelectorAll('.tags');

    [].forEach.call(products, function(product) {
      productListWidth += product.clientWidth;
      productList.style.width = productListWidth+"px";
    });

    this.setState({
      carouselWidth: productListWidth / products.length
    })
  }


  render() {
    const { data } = this.props;

    return (
      <div className="links">
        <div className="container-fluid">
          <div className="nav-tags js-product-carousel">
            <button type="button" data-role="none" className="prev js-carousel-prev" onClick={ this.handleCarouselPrev }>
              <FontAwesomeIcon className="fr-icon" icon={faChevronLeft}/>
            </button>
            <button type="button" data-role="none" className="next js-carousel-next" onClick={ this.handleCarouselNext }>
              <FontAwesomeIcon className="fr-icon" icon={faChevronRight}/>
            </button>
            <div className="slides js-product-list product-list" style={{transform: `translateX(-${this.state.carouselWidth*this.state.productListSteps}px)`}}>
              {data && data.allShopifyCollection.edges.map(({node}) => 
                node.handle !== "addons" ?
                  <span className="tags" key={node.handle}><Link to={`/collections/${node.handle}`}>{node.title}</Link></span>
                : null
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const navLinks = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allShopifyCollection {
            edges {
              node {
                title
                handle
              }
            }
          }
        }      
      `}
      render={(data) => <LinksNavigation data={data} />}
    />
  )
}

export default navLinks;