import React from "react"
import styled from "@emotion/styled"
import Layout from "../components/Layout"
import Heading2 from "../components/Heading2"
import Form from "../components/Form"
import buffaloSvg from "../images/buffalo.svg"

const Wrapper = styled.header({
  padding: "0 1rem 0 1rem",
})

const StyledImage = styled.img({
  float: "left",
  maxWidth: "20%",
  minWidth: "176px",
  margin: "0 2rem 0.5rem 0",
})

const ImageLink = styled.a({
  backgroundImage: "url(/buffalo-cartoon.png)",
  backgroundSize: "cover",
  display: "inline-block",
  height: "100px",
  width: "125px",
})

const IndexPage = () => (
  <Layout>
    <Wrapper>
      <section>
        <Heading2>Buffalo Facts</Heading2>
        <p>
          <StyledImage src={buffaloSvg} />
          <strong>
            "Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo"
          </strong>{" "}
          is a grammatically correct sentence in American English, often
          presented as an example of how homonyms and homophones can be used to
          create complicated linguistic constructs through lexical ambiguity.
        </p>
        <p>The sentence employs three distinct meanings of the word buffalo:</p>
        <ul>
          <li>
            as a proper noun to refer to a specific place named Buffalo, the
            city of Buffalo, New York being the most notable;
          </li>
          <li>
            as a verb (uncommon in regular usage) to buffalo, meaning "to bully,
            harass, or intimidate" or "to baffle"; and
          </li>
          <li>
            as a noun to refer to the animal, bison (often called buffalo in
            North America). The plural is also buffalo.
          </li>
        </ul>
        <p>
          An expanded form of the sentence which preserves the original word
          order is:{" "}
          <strong>
            "Buffalo bison, that other Buffalo bison bully, also bully Buffalo
            bison."
          </strong>
        </p>
        <p>
          From{" "}
          <a href="https://en.wikipedia.org/wiki/Buffalo_buffalo_Buffalo_buffalo_buffalo_buffalo_Buffalo_buffalo">
            Wikipedia
          </a>
        </p>
        <p>
          <ImageLink href="http://www.wildnatureimages.com/Buffalo-Bison-Photos.htm" />
        </p>
      </section>
      <section>
        <Form />
      </section>
    </Wrapper>
  </Layout>
)

export default IndexPage
