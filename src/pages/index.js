import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Heading1 from "../components/Heading1"

const IndexPage = () => (
  <Layout>
    <Heading1>Home</Heading1>
    <p>Welcome home</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
