import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Content from "../components/Content"
const IndexPage = ({ data }) => {
  return (
    <>
      <main>
        {/* <Hero /> */}
        <Content/>
      </main>
    </>
  )
}
export default IndexPage
