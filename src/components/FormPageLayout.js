import React from "react"
import { graphql } from "gatsby"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import parse from "html-react-parser"

const FormPageLayout = ({ data: { landingPagesYaml } }) => {
  const { themeColor } = landingPagesYaml

  const theme = {
    primary: themeColor,
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <ThemeProvider theme={theme}>
          <Wrapper>
            <h1>Form</h1>
            <Button href="#">Test</Button>
          </Wrapper>
        </ThemeProvider>
      </Container>
    </>
  )
}

export default FormPageLayout

const Container = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  letter-spacing: 0.01em;
`
const Wrapper = styled.div.attrs(() => ({
  className: "wrapper",
}))`
  max-width: 970px;
  margin: 0 auto;
`

const Button = styled.a`
  display: inline-block;
  text-decoration: none;
  color: white;
  font-weight: 600;
  padding: 8px 24px;
  line-height: 24px;
  margin: 0;
  border: none;
  background-color: ${(props) => props.theme.primary};
  border-radius: 100px;
`

// const Navbar = styled.nav`
//   margin-top: 32px;
//   .logo {
//     width: 160px;
//     height: 64px;
//   }
// `

// const Main = styled.main`

// `

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  blockquote,
  article,
  aside,
  figure,
  figcaption,
  footer,
  header,
  menu,
  body,
  nav {
    margin: 0;
    padding: 0;
    font: inherit;
    font-size: 100%;
  }
  article,
  aside,
  figcaption,
  figure,
  footer,
  header,
  menu,
  nav,
  section {
    display: block;
  }

  ol,
  ul {
    list-style: none;
  }
`

export const query = graphql`
  query FormPageQuery($pageId: String) {
    landingPagesYaml(id: { eq: $pageId }) {
      id
      slug
      published
      themeColor
    }
  }
`
