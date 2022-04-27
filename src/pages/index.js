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
  text-align: center;
`
