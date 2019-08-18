module.exports = {
  siteMetadata: {
    title: `Accessibility Lab`,
    description: `Accessibility is cool.`,
    author: `Rendezvous Planning Committee`,
    menuLinks: [
      {
        name: "home",
        link: "/",
      },
      {
        name: "page 2",
        link: "/page-2",
      },
      {
        name: "this",
        link: "/this",
      },
      {
        name: "navigation",
        link: "/navigation",
      },
      {
        name: "menu",
        link: "/menu",
      },
      {
        name: "sure",
        link: "/sure",
      },
      {
        name: "has",
        link: "/has",
      },
      {
        name: "a",
        link: "/a",
      },
      {
        name: "lot",
        link: "/lot",
      },
      {
        name: "of",
        link: "/of",
      },
      {
        name: "links",
        link: "/links",
      },
      {
        name: "in",
        link: "/in",
      },
      {
        name: "it",
        link: "/it",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
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
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
