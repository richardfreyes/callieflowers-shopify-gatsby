require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Callie Flowers`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Richard Frey U. Reyes`,
    siteUrl: `https://callieflowers.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    // Added plugins
    {
      resolve: "gatsby-source-shopify",
      options: {
        password: process.env.PASSWORD,
        storeUrl: process.env.SHOP_URL,
        shopifyConnections: ["collections"],
      },
    },
  ],
}

console.log('process.env.STAGING', process.env.STAGING)

if (process.env.STAGING) {
  require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}.development`,
  })
} else {
  require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}.production`,
  })
}

const contentfulConfig = {
  shopUrl: process.env.SHOP_URL,
  storeFrontToken: process.env.STOREFRONT_ACCESS_KEY,
  apiKey: process.env.API_KEY,
  password: process.env.PASSWORD,
  sharedSecret: process.env.SHARED_SECRET
};

console.log('contentfulConfig', contentfulConfig)

if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST;
}

console.log('process.env.CONTENTFUL_HOST', process.env.CONTENTFUL_HOST)
