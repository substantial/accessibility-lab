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

const StyledLayout = styled.div({
  margin: "2rem",
  padding: "2rem",
  backgroundColor: "#EFF1F9",
  fontFamily: "Arial",
  color: "gray",
})

const StyledFooter = styled.footer({
  marginTop: "1rem",
})

const StyledAnchor = styled.a({
  color: "black",
})

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
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
        menuLinks={data.site.siteMetadata.menuLinks}
        siteTitle={data.site.siteMetadata.title}
      />
      <main>{children}</main>
      <StyledFooter>
        © {new Date().getFullYear()}, Built with
        {` `}
        <StyledAnchor href="https://www.gatsbyjs.org">Gatsby</StyledAnchor>
      </StyledFooter>
    </StyledLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
