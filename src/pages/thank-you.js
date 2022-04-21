import React from "react"
import styled from "styled-components"

const ThankYou = ({ location }) => {
  let vars = {}

  // console.log(location)

  if (typeof window === "undefined") {
    vars = {
      url: "https://app.out.fund/enquire",
      fontColor: {
        heading: "#000",
        button: "#fff",
      },
      themeColor: "#00A3D7",
    }
  } else {
    vars = {
      url: location.state.navigateToUrl,
      fontColor: {
        heading: location.state.colors.font.heading,
        button: location.state.colors.button.text,
      },
      themeColor: location.state.colors.button.bg,
    }
  }

  return (
    <Main>
      <h1 style={{ color: vars.fontColor.heading }}>
        Thank you for your application
      </h1>
      <Button
        href={vars.url}
        style={{
          color: vars.fontColor.button,
          backgroundColor: vars.themeColor,
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
