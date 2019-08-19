import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const StyledFooter = styled.footer({
  border: "1px dashed gray",
  marginTop: "1rem",
  padding: "1rem",
})

const StyledFooterLinks = styled.ul({
  listStyleType: "none",
  paddingInlineStart: 0,
  margin: 0,
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(4.5rem, 1fr))",
  gridRowGap: "1rem",
  gridColumnGap: "1rem",
})

const StyledFooterLinkItem = styled.li({
  textTransform: "capitalize",
  whiteSpace: "nowrap",
})

const StyledLink = styled(Link)({
  color: "black",
})

const Footer = ({ footerLinks }) => (
  <StyledFooter>
    <StyledFooterLinks>
      {footerLinks.map((item, index) => (
        <StyledFooterLinkItem key={`${index} ${item.name}`}>
          <StyledLink to={item.link}>{item.name}</StyledLink>
        </StyledFooterLinkItem>
      ))}
    </StyledFooterLinks>
  </StyledFooter>
)

Footer.propTypes = {
  footerLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }).isRequired
  ),
}

export default Footer
