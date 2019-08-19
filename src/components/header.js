import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Heading1 from "./Heading1"
import Nav from "./Nav"

const Header = ({ siteTitle, menuLinks }) => (
  <header>
    <Heading1 style={{ margin: 0 }}>
      <Link to="/">{siteTitle}</Link>
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
