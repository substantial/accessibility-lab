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
  margin: " 2.5rem 2rem",
  padding: "1.1rem 1rem",
  backgroundColor: "#f5f9fa",
  fontFamily: "Arial",
  color: "#333333",
  "& a": {
    color: "#3d7e9a",
  },
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
