import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Nav = ({ menuLinks }) => (
  <nav>
    <ul>
      {menuLinks.map(link => (
        <li key={link.name}>
          <Link to={link.link}>{link.name}</Link>
        </li>
      ))}
    </ul>
  </nav>
)

Nav.propTypes = {
  menuLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }).isRequired
  ),
}

export default Nav
