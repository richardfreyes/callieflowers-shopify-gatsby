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


// const IndexPage = () => (
//   <Layout>
//     <Seo title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <StaticImage
//       src="../images/gatsby-astronaut.png"
//       width={300}
//       quality={95}
//       formats={["auto", "webp", "avif"]}
//       alt="A Gatsby astronaut"
//       style={{ marginBottom: `1.45rem` }}
//     />
//     <p>
//       <Link to="/page-2/">Go to page 2</Link> <br />
//       <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
//       <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
//       <Link to="/using-dsg">Go to "Using DSG"</Link>
//     </p>
//   </Layout>
// )

// export default IndexPage
