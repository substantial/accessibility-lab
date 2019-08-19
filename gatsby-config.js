const NAV_MENU_LINKS = `when there are many nav links it can be hard to reach the main content quickly which is very annoying`
const FOOTER_MENU_LINKS = `yep there are a lot of page links down here too so it goes`

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
    title: `Supercalifragilisticexpialidocious Antidisestablishmentarianism Accessibility Lab`,
    description: `Accessibility is cool.`,
    author: `Rendezvous Planning Committee`,
    navLinks: generateMenuLinks(NAV_MENU_LINKS),
    footerLinks: generateMenuLinks(FOOTER_MENU_LINKS),
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
