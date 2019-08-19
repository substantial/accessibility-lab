import React from "react"
import styled from "@emotion/styled"

const StyledHeading = styled.h1({
  margin: "0 0 1rem 0",
  fontSize: "200%",
})

export default ({ children }) => <StyledHeading>{children}</StyledHeading>
