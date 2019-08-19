import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const StyledNav = styled.nav({
  border: "1px solid lightGray",
  marginBottom: "1rem",
  padding: "1rem",
})

const StyledMenu = styled.ul({
  listStyleType: "none",
  paddingInlineStart: 0,
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
})

const StyledMenuItem = styled.li({
  textTransform: "capitalize",
  whiteSpace: "nowrap",
})

const StyledLink = styled(Link)({
  color: "black",
})

const Nav = ({ menuLinks }) => (
  <StyledNav>
    <StyledMenu>
      {menuLinks.map((item, index) => (
        <StyledMenuItem key={`${index} ${item.name}`}>
          <StyledLink to={item.link}>{item.name}</StyledLink>
        </StyledMenuItem>
      ))}
    </StyledMenu>
  </StyledNav>
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
