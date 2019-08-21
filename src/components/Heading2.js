import React from "react"
import styled from "@emotion/styled"

const StyledHeading = styled.h2({
  margin: "0 0 1rem 0",
})

export default ({ children }) => <StyledHeading>{children}</StyledHeading>
