import React from "react"
import styled from "styled-components"

// markup
const ThankYou = ({ location }) => {
  console.log(location.state)
  return (
    <Main>
      <h1 style={{ color: location.state.fontColor.heading }}>
        Thank you for your application
      </h1>
      <Button
        href={location.state.navigateToUrl}
        style={{
          color: location.state.fontColor.button,
          backgroundColor: location.state.themeColor,
        }}
      >
        Proceed
      </Button>
    </Main>
  )
}

export default ThankYou

const Main = styled.main`
  text-align: center;
  padding-top: 100px;
  h1 {
    font-size: 24px;
  }
`
const Button = styled.a`
  padding: 12px 24px;
  display: inline-block;
  text-decoration: none;
  border-radius: 100px;
  background-color: #afa;
  font-weight: 600;
`
