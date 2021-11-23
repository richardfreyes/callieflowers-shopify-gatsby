import * as React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import Slider from "react-slick"

class LinksNavigation extends React.Component {
  render() {
    const { data } = this.props;
    const settings = {
      className: "slider variable-width nav-tags",
      lazyLoad: 'ondemand',
      dots: false,
      infinite: true,
      speed: 300,
      nextArrow: <span className="icon slick-arrow fr-slick-next"></span>,
      prevArrow: <span className="icon slick-arrow fr-slick-prev"></span>,
      slidesToShow: 5,
      centerMode: true,
      variableWidth: true
    };

    return (
      <div className="links">
        <div className="container-fluid">
          <Slider className="nav-tags" {...settings}>
            {data.allShopifyCollection.edges.map(({node}) => 
              node.handle !== "addons" ?
                <span className="tags" key={node.handle}><Link to={`/collections/${node.handle}`}>{node.title}</Link></span>
              : null
            )}
          </Slider>
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