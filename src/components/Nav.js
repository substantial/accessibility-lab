import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const StyledNav = styled.nav({
  border: "1px dashed gray",
  marginBottom: "1rem",
  padding: "1rem",
})

const StyledMenu = styled.ul({
  listStyleType: "none",
  paddingInlineStart: 0,
  margin: 0,
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(4.5rem, 1fr))",
  gridRowGap: "1rem",
  gridColumnGap: "1rem",
})

const StyledMenuItem = styled.li({
  textTransform: "capitalize",
  whiteSpace: "nowrap",
})

const StyledLink = styled(Link)({
  color: "black",
})

const Nav = ({ navLinks }) => (
  <StyledNav>
    <StyledMenu>
      {navLinks.map((item, index) => (
        <StyledMenuItem key={`${index} ${item.name}`}>
          <StyledLink to={item.link}>{item.name}</StyledLink>
        </StyledMenuItem>
      ))}
    </StyledMenu>
  </StyledNav>
)

Nav.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }).isRequired
  ),
}

export default Nav
