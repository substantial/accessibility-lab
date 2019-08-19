import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import Heading1 from "./Heading1"
import Nav from "./Nav"

const StyledWrapper = styled.div({
  border: "1px dashed gray",
  padding: "1rem",
})

const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "black",
})

const Header = ({ siteTitle, navLinks }) => (
  <header>
    <Heading1>
      <StyledWrapper>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </StyledWrapper>
    </Heading1>
    <Nav navLinks={navLinks} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
