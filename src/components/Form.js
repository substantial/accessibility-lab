import React from "react"
import styled from "@emotion/styled"
import Heading2 from "../components/Heading2"

const FIELD_LABELS = ["Name", "Favorite cuisine", "Favorite band"]

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
      <div>Separate words with a comma</div>
      <StyledField>
        <textarea></textarea>
      </StyledField>
      <StyledField>
        <StyledLabel>Coat Color</StyledLabel>
        <input type="radio" name="color" value="black" />
        <label>Black</label>
        <input type="radio" name="color" value="brown" />
        <label>Brown</label>
        <input type="radio" name="color" value="blue" />
        <label>Blue</label>
      </StyledField>
    </form>
  </>
)

Form.propTypes = {}

export default Form
