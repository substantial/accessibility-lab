/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import Footer from "./Footer"

const StyledLayout = styled.div({
  margin: "2rem",
  padding: "2rem",
  backgroundColor: "#EFF1F9",
  fontFamily: "Arial",
  color: "gray",
})

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          navLinks {
            name
            link
          }
          footerLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <StyledLayout>
      <Header
        navLinks={data.site.siteMetadata.navLinks}
        siteTitle={data.site.siteMetadata.title}
      />
      <main>{children}</main>
      <Footer footerLinks={data.site.siteMetadata.footerLinks}></Footer>
    </StyledLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
