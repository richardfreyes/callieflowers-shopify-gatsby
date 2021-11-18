const path = require(`path`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // Query for all products in Shopify

  const result = await graphql(`
    query {
      allShopifyProduct(sort: {fields: [title]}) {
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
              availableForSale
              storefrontId
              selectedOptions {
                name
                value
              }
            }
            status
            options {
              name
              position
              values
              id
            }
            productType
            storefrontId
            tags
          }
        }
      }
    }
  `);

  const collectionData = await graphql(`
    query {
      allShopifyCollection {
        edges {
          node {
            title
            description
            shopifyId
            handle
            products {
              description
              images {
                originalSrc
              }
              shopifyId
              priceRangeV2 {
                minVariantPrice {
                  amount
                }
                maxVariantPrice {
                  amount
                }
              }
              variants {
                compareAtPrice
                price
                availableForSale
                storefrontId
                selectedOptions {
                  name
                  value
                }
              }
              status
              options {
                name
                position
                values
                id
              }
              productType
              storefrontId
              tags
              handle
            }
          }
        }
      }
    }
  `);

  // Iterate over all products and create a new page using a template
  // The product "handle" is generated automatically by Shopify
  result.data.allShopifyProduct.edges.forEach(({ node }) => {
    createPage({
      path: `/products/${node.handle}`,
      component: path.resolve(`./src/shared/templates/product.js`),
      context: {
        product: node
      },
    })
  })

  collectionData.data.allShopifyCollection.edges.forEach(({ node }) => {
    createPage({
      path: `/collections/${node.handle}`,
      component: path.resolve(`./src/shared/templates/collections.js`),
      context: {
        product: node
      },
    })
  })
}