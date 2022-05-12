import React from "react"
import { graphql } from "gatsby"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import { navigate } from "gatsby-link"

import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Select,
  // Button,
} from "@chakra-ui/react"

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const FormPageLayout = ({ data: { landingPagesYaml } }) => {
  const { colors, partnerLogo, slug } = landingPagesYaml
  const [state, setState] = React.useState({ "partner-name": slug })

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  let navigateToUrl = ""

  const handleSubmit = (e) => {
    e.preventDefault()

    const form = e.target

    switch (state.country) {
      case "UK":
        navigateToUrl = "https://app.out.fund/enquire"
        break
      case "Spain":
        navigateToUrl = "https://app.out.fund/esp/enquire"
        break
      case "US":
        navigateToUrl = "https://app.out.fund/usa/enquire"
        break
      case "Australia":
        navigateToUrl = "https://app.out.fund/aus/enquire"
        break
      case "Other":
        navigateToUrl = "https://app.out.fund/enquire"
        break
      default:
        navigateToUrl = "https://app.out.fund/enquire"
    }

    console.log(state)

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() =>
        navigate("/thank-you/", {
          state: { navigateToUrl, colors },
        })
      )
      .catch((error) => alert(error))
  }

  const svgDir = require.context("!@svgr/webpack!../../images/companyLogos/")
  const PartnerLogo = svgDir(`./${partnerLogo}.svg`).default

  // const theme = {
  //   primary: themeColor,
  //   heading: fontColor.heading,
  //   body: fontColor.body,
  //   colors.button.bg: fontColor.button,
  // }

  return (
    <>
      <ThemeProvider theme={colors}>
        <Container>
          <GlobalStyle />
          <div className="header">
            <div className="logo">
              <PartnerLogo />
            </div>
            <h1>Tell us about you and your company</h1>
          </div>
          <Wrapper>
            <div className="form">
              <form
                name="partner"
                method="post"
                action="/thank-you/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="partner" />
                <Stack spacing={6}>
                  <div className="split">
                    <FormControl isRequired>
                      <FormLabel htmlFor="first-name">First name</FormLabel>
                      <Input
                        id="first-name"
                        name="first-name"
                        onChange={handleChange}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel htmlFor="last-name">Last name</FormLabel>
                      <Input
                        id="last-name"
                        name="last-name"
                        onChange={handleChange}
                      />
                    </FormControl>
                  </div>
                  <FormControl isRequired>
                    <FormLabel htmlFor="company-email">Company Email</FormLabel>
                    <Input
                      id="company-email"
                      type="email"
                      name="company-email"
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel htmlFor="phone-number">Phone number</FormLabel>
                    <Input
                      type="tel"
                      id="phone-number"
                      name="phone-number"
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel htmlFor="company-website">
                      Company website
                    </FormLabel>
                    <Input
                      id="company-website"
                      name="company-website"
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel htmlFor="country">
                      Incorporation Country
                    </FormLabel>
                    <Select
                      placeholder="Select"
                      id="country"
                      name="country"
                      onChange={handleChange}
                    >
                      <option value="Australia">Australia</option>
                      <option value="Spain">Spain</option>
                      <option value="UK">United Kingdom</option>
                      <option value="US">United States</option>
                      <option value="Other">Other</option>
                    </Select>
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel htmlFor="business-type">Business Type</FormLabel>
                    <Select
                      placeholder="Select"
                      id="business-type"
                      name="business-type"
                      onChange={handleChange}
                    >
                      <option value="eCommerce">eCommerce</option>
                      <option value="MobileApp">Mobile App</option>
                      <option value="SaaS">SaaS</option>
                      <option value="Other">Other</option>
                    </Select>
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel htmlFor="amr">Average Monthly Revenue</FormLabel>
                    <Select
                      placeholder="Select"
                      id="amr"
                      name="amr"
                      onChange={handleChange}
                    >
                      <option value="0">Less than $10K</option>
                      <option value="10000">$10k - $50k</option>
                      <option value="50000">$50k - $100k</option>
                      <option value="100000">$100k - $500k</option>
                      <option value="500000">More than $500k</option>
                    </Select>
                  </FormControl>
                  <div className="instructions">
                    Click below to continue your application with our partner
                    Outfund
                  </div>
                  <p className="hidden">
                    <label>
                      Don’t fill this out if you’re human:{" "}
                      <input
                        name="bot-field"
                        tabIndex="-1"
                        onChange={handleChange}
                      />
                    </label>
                  </p>
                  <input
                    type="hidden"
                    name="partner-name"
                    id="partner-name"
                    value={slug}
                  />

                  <Button type="submit">Get started</Button>
                </Stack>
              </form>
            </div>
          </Wrapper>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default FormPageLayout

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
      padding: 24px 0;
      background-color: ${(props) =>
        props.theme.navbarBg ? props.theme.navbarBg : props.theme.page};
      margin-bottom: 40px;
      display: flex;
      justify-content: center;
      box-shadow: 0px 17px 33px rgba(5, 24, 64, 0.07),
        0px 3.8002px 13.45px rgba(5, 24, 64, 0.0522616),
        0px 1.07885px 7.14579px rgba(5, 24, 64, 0.0377807);

      svg {
        max-height: 32px;
      }
    }
  }
  .instructions {
    font-size: 16px;
    font-weight: 600;
    padding-top: 24px;
  }
  .split {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
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
  color: ${(props) => props.theme.button.text};
  font-weight: 600;
  padding: 12px 24px;
  line-height: 24px;
  margin: 0;
  border: none;
  background-color: ${(props) => props.theme.button.bg};
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
  /* body {
    background-color: ${(props) => props.theme.page} !important;
  } */
`

export const query = graphql`
  query FormPageQuery($pageId: String) {
    landingPagesYaml(id: { eq: $pageId }) {
      id
      slug
      published
      partnerLogo
      colors {
        navbarBg
        button {
          bg
          text
        }
        card {
          bg
          font
          elements
        }
        darkSection {
          bg
          button {
            bg
            text
          }
          text
        }
        font {
          body
          heading
          inverseBody
          inverseHeading
        }
        iconSection {
          bg
          icon
        }
        page
        theme
      }
    }
  }
`
