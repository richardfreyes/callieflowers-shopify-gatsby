import * as React from "react"
import HeroBanner from "../shared/components/hero-banner"
import Layout from "../shared/components/layout"
import ProductList from "../shared/components/product-list"
import Seo from "../shared/components/seo"

export default class IndexPage extends React.Component {
  render() {

    return (
      <Layout>
        <Seo title="Same Day Flower Delivery | Best Rated Online Flower Shop" />
        <HeroBanner />
        <ProductList />
      </Layout>
    )
  }
}