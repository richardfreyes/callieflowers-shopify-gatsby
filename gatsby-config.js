require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Callie Flowers`,
    description: `Sending flowers to a loved ones, a colleague, or an old friend has been one of the greatest way to express feelings, fondness or affection for centuries. It inspires love that magically warms the heart and lifts one’s spirit on a bad day.`,
    author: `Richard Frey U. Reyes`,
    designer: `Adrian Rayco`,
    siteUrl: `https://callieflowers.com/`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-210773594-1",
        // this option places the tracking script into the head of the DOM
        head: true,
        // other options
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/, // See below to configure properly
          omitKeys: ['xmlnsDc', 'xmlnsCc', 'xmlnsRdf', 'xmlnsSvg', 'xmlnsSodipodi', 'xmlnsInkscape']
        }
      }
    },
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
        icon: `src/images/callie-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    // Added plugins
    {
      resolve: "gatsby-source-shopify",
      options: {
        password: process.env.DEV_GATSBY_SHOPIFY_PASSWORD,
        storeUrl: process.env.DEV_GATSBY_SHOPIFY_STORE_URL,
        shopifyConnections: ["collections"],
      },
    },
    {
      resolve: `gatsby-plugin-crazyegg`,
      options: {
        accountNumber: '01108162'
      }
    }
  ],
}