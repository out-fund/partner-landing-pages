import React from "react"
import { graphql } from "gatsby"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import parse from "html-react-parser"

import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Select,
  // Button,
} from "@chakra-ui/react"

const FormPageLayout = ({ data: { landingPagesYaml } }) => {
  const { themeColor, partnerLogo, fontColor } = landingPagesYaml

  const svgDir = require.context("!@svgr/webpack!../../images/companyLogos/")
  const PartnerLogo = svgDir(`./${partnerLogo}.svg`).default

  const theme = {
    primary: themeColor,
    heading: fontColor.heading,
    body: fontColor.body,
    buttonFontColor: fontColor.button,
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <ThemeProvider theme={theme}>
          <Wrapper>
            <div className="header">
              <div className="logo">
                <PartnerLogo />
              </div>
              <h1>Tell us about you and your company</h1>
            </div>
            <div className="form">
              <form
                action="https://app.out.fund/enquire"
                name="partner-landing-page"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <Stack spacing={6}>
                  <Split>
                    <input
                      type="hidden"
                      name="form-name"
                      value="partner-landing-page"
                    />
                    <p className="hidden">
                      <label>
                        Don’t fill this out if you’re human:{" "}
                        <input name="bot-field" />
                      </label>
                    </p>
                    <FormControl isRequired>
                      <FormLabel htmlFor="first-name">First name</FormLabel>
                      <Input id="first-name" />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel htmlFor="last-name">Last name</FormLabel>
                      <Input id="last-name" />
                    </FormControl>
                  </Split>
                  <FormControl isRequired>
                    <FormLabel htmlFor="company-email">Company Email</FormLabel>
                    <Input id="company-email" type="email" />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel htmlFor="phone-number">Phone number</FormLabel>
                    <Input type="tel" id="phone-number" />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel htmlFor="company-website">
                      Company website
                    </FormLabel>
                    <Input id="company-website" />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel htmlFor="coununtry">
                      Incorporation Country
                    </FormLabel>
                    <Select placeholder="Select" id="country">
                      <option value="Australia">Australia</option>
                      <option value="Spain">Spain</option>
                      <option value="UK">United Kingdom</option>
                      <option value="US">United States</option>
                      <option value="Other">Other</option>
                    </Select>
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel htmlFor="business-type">Business Type</FormLabel>
                    <Select placeholder="Select" id="business-type">
                      <option value="eCommerce">eCommerce</option>
                      <option value="MobileApp">Spain</option>
                      <option value="SaaS">SaaS</option>
                      <option value="Other">Other</option>
                    </Select>
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel htmlFor="business-type">
                      Average Monthly Revenue
                    </FormLabel>
                    <Select placeholder="Select" id="amr">
                      <option value="0">Less than $10K</option>
                      <option value="10000">$10k - $50k</option>
                      <option value="50000">$50k - $100k</option>
                      <option value="100000">$100k - $500k</option>
                      <option value="500000">More than $500k</option>
                    </Select>
                  </FormControl>
                  <Button type="submit">Get started</Button>
                </Stack>
              </form>
            </div>
          </Wrapper>
        </ThemeProvider>
      </Container>
    </>
  )
}

export default FormPageLayout

const Split = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`

const Container = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  letter-spacing: 0.01em;
  padding-bottom: 100px;
  background-color: #fafafa;
  min-height: 100vh;
  .hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
  h1 {
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 24px;
  }
  .header {
    .logo {
      text-align: center;
      padding: 48px 0;
      /* height: 32px; */
      /* margin: 0 auto; */
      /* width: 100%; */
    }
  }
  input,
  select {
    background-color: #fff;
  }
`
const Wrapper = styled.div.attrs(() => ({
  className: "wrapper",
}))`
  max-width: 570px;
  margin: 0 auto;
  padding: 0 16px;
`

const Button = styled.button`
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  color: ${(props) => props.theme.buttonFontColor};
  font-weight: 600;
  padding: 12px 24px;
  line-height: 24px;
  margin: 0;
  border: none;
  background-color: ${(props) => props.theme.primary};
  border-radius: 100px;
  font-size: 16px;
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
      partnerLogo
      fontColor {
        heading
        body
        button
      }
    }
  }
`
