import React from "react"
import styled from "@emotion/styled"

const SEARCH_FORM_SIZE = "40px"
const SEARCH_FIELD_WIDTH = "200px"

const SearchForm = styled.form({
  display: "flex",
  alignItems: "center",
  height: SEARCH_FORM_SIZE,
})

const SearchField = styled.input({
  width: SEARCH_FIELD_WIDTH,
})

const SearchButton = styled.button({
  background: "transparent",
  width: SEARCH_FORM_SIZE,
  height: SEARCH_FORM_SIZE,
  padding: "5px",
  border: "none",
})

const SearchResultsWrapper = styled.div({
  position: "fixed",
  right: `calc(4.6rem + ${SEARCH_FORM_SIZE})`,
  top: `calc(3.6rem + ${SEARCH_FORM_SIZE})`,
  background: "white",
})

const SearchResults = styled.ul({
  margin: 0,
  padding: "0.5rem",
  width: `calc(${SEARCH_FIELD_WIDTH} - 1rem)`,
  listStyleType: "none",
  "li:last-child": {
    borderBottom: "none",
  }
})

const SearchResult = styled.li({
  padding: "0.5rem 0",
  borderBottom: "1px solid black"
})

const CloseWrapper = styled.div({
  position: "relative",
})

const CloseButton = styled.button({
  background: "transparent",
  width: '32px',
  height: '32px',
  padding: 0,
  border: "none",
  position: "absolute",
  right: "0.25rem",
  top: "0.25rem",
})

const Search = () => {
  const [showResults, setShowResults] = React.useState(false)

  const performSearch = (e) => {
    e.preventDefault()
    setShowResults(true)
  }

  const closeResults = () => setShowResults(false)

  return (
    <>
      <SearchForm onSubmit={performSearch} role="search">
        <SearchField type="text" name="search" />
        <SearchButton type="submit" onClick={performSearch}>
          <img src="/search.png" />
        </SearchButton>
      </SearchForm>
      <SearchResultsWrapper>
        {showResults && (
          <CloseWrapper>
            <SearchResults>
              <SearchResult>Bison</SearchResult>
              <SearchResult>Water Buffalo</SearchResult>
              <SearchResult>Tamaraw</SearchResult>
            </SearchResults>
            <CloseButton onClick={closeResults}>
              <img src="/close.png" />
            </CloseButton>
          </CloseWrapper>
        )}
      </SearchResultsWrapper>
    </>
  )
}

export default Search