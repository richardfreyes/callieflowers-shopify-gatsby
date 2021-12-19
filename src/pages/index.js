import * as React from "react"
import HeroBanner from "../shared/components/hero-banner"
import Layout from "../shared/components/layout"
import ProductList from "../shared/components/product-list"
import Seo from "../shared/components/seo"

export default class IndexPage extends React.Component {
  render() {

    return (
      <Layout>
        <Seo title="Home" />
        <HeroBanner />
        <ProductList />
      </Layout>
    )
  }
}