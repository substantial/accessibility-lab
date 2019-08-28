import React from "react"
import styled from "@emotion/styled"
import Heading2 from "../components/Heading2"

const FIELD_LABELS = ["Name", "Coat color", "Favorite cuisine", "Favorite band"]

const StyledField = styled.div({
  marginBottom: "1rem",
})

const StyledLabel = styled.label({
  display: "block",
})

const createFields = labels => {
  return labels.map((label, index) => (
    <StyledField key={`${label} ${index}`}>
      <StyledLabel>{label}</StyledLabel>
      <input />
    </StyledField>
  ))
}

const Form = () => (
  <>
    <Heading2>Tell us about your buffalo</Heading2>
    <form>
      {createFields(FIELD_LABELS)}
      <StyledLabel>Personality in 3 words</StyledLabel>
      <textarea></textarea>
    </form>
  </>
)

Form.propTypes = {}

export default Form
