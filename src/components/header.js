import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { Link } from "gatsby"

import Heading1 from "./Heading1"
import Nav from "./Nav"
import Search from "./Search"

const Wrapper = styled.header({
  display: "flex",
  padding: "0 1rem 0 1rem",
})

const StyledLink = styled(Link)({
  textDecoration: "none",
})

const Header = ({ siteTitle, navLinks }) => (
  <>
    <Wrapper>
      <StyledLink to="/">
        <Heading1>{siteTitle}</Heading1>
      </StyledLink>
      <Search />
    </Wrapper>
    <Nav navLinks={navLinks} />
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
