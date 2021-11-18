import * as React from "react"
import HeroBanner from "../shared/components/hero-banner"
import Layout from "../shared/components/layout"
import LinksNavigation from "../shared/components/links"
import ProductList from "../shared/components/product-list"
import Seo from "../shared/components/seo"
import SideNavigation from "../shared/components/side-nav"

export default class IndexPage extends React.Component {
  render() {

    return (
      <Layout>
        <Seo title="Home" />
        <SideNavigation/>
        <div className="sections-wrapper" id="content">
          <LinksNavigation />
          <HeroBanner />
          <ProductList />
        </div>
      </Layout>
    )
  }
}