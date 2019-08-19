const NAV_MENU_LINKS = `these are nav links to other pages that do not even exist but you still have to deal with them`

const generateMenuLinks = sentence => {
  const menuLinks = []
  sentence.split(" ").forEach(word => {
    menuLinks.push({
      name: `${word}`,
      link: `/${word}`,
    })
  })
  return menuLinks
}

module.exports = {
  siteMetadata: {
    title: `Supercalifragilisticexpialidocious Accessibility Lab`,
    description: `Accessibility is cool.`,
    author: `Rendezvous Planning Committee`,
    menuLinks: generateMenuLinks(NAV_MENU_LINKS),
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
