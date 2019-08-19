import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import Heading1 from "./Heading1"
import Nav from "./Nav"

const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "black",
})

const Header = ({ siteTitle, menuLinks }) => (
  <header>
    <Heading1>
      <StyledLink to="/">{siteTitle}</StyledLink>
    </Heading1>
    <Nav menuLinks={menuLinks} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
