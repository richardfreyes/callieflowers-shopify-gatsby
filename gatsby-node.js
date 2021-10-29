const path = require(`path`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // Query for all products in Shopify

  const result = await graphql(`
    query {
      allShopifyProduct(sort: { fields: [title] } filter: {productType: {eq: "addons"}) {
        edges {
          node {
            title
            images {
              originalSrc
            }
            shopifyId
            handle
            description
            priceRangeV2 {
              maxVariantPrice {
                amount
              }
              minVariantPrice {
                amount
              }
            }
            variants {
              compareAtPrice
              price
            }
            status
          }
        }
      }
    }
  `);



  // Iterate over all products and create a new page using a template
  // The product "handle" is generated automatically by Shopify
  result.data.allShopifyProduct.edges.forEach(({ node }) => {
    console.log('node', node);
    createPage({
      path: `/products/${node.handle}`,
      component: path.resolve(`./src/shared/templates/product.js`),
      context: {
        product: node
      },
    })
  })
}