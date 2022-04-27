import React from "react"
import styled from "styled-components"

// markup
const IndexPage = () => {
  return (
    <main>
      <Title>
        Powered by <a href="https://out.fund/">Outfund.</a>
      </Title>
    </main>
  )
}

export default IndexPage

const Title = styled.h1`
  padding: 10px;
  text-align: center;
  a {
    text-decoration: none;
    color: #1a65ba;
  }
`
