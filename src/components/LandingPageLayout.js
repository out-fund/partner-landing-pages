import React from "react"
import { graphql } from "gatsby"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

const LandingPageLayout = ({ data: { landingPagesYaml } }) => {
  // const LandingPageLayout = ({ data }) => {
  const {
    first,
    second,
    third,
    fourth,
    fifth,
    sixth,
    slug,
    themeColor,
    partnerLogo,
  } = landingPagesYaml
  console.log(second)

  const theme = {
    primary: themeColor,
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <ThemeProvider theme={theme}>
          <Navbar>
            <Wrapper>
              <div className="logo">
                <GatsbyImage
                  image={getImage(partnerLogo)}
                  alt={`${slug} logo`}
                />
              </div>
            </Wrapper>
          </Navbar>
          <Main>
            <Header>
              <Wrapper>
                <div className="left">
                  <div className="text">
                    <h1>
                      {parse(first.title.firstLine)}
                      <br />
                      <span style={{ color: themeColor }}>
                        {parse(first.title.secondLine)}
                      </span>
                    </h1>
                    <p className="description">{first.description}</p>
                  </div>
                  <div>
                    <Button href={`${slug}/get-funded`}>{first.button}</Button>
                  </div>
                </div>
                <div className="right">
                  {/* TODO if image show image else show credit card */}
                  <div className="image">
                    <GatsbyImage
                      image={getImage(first.image)}
                      alt={`${slug} business card`}
                    />
                  </div>
                </div>
              </Wrapper>
            </Header>

            <Benefits>
              <Wrapper>
                <div className="grid">
                  {second.map((item, index) => (
                    <div className="row" key={index}>
                      <div className="icon">
                        <span
                          className="material-icons-round"
                          style={{ fontSize: "48px", color: themeColor }}
                        >
                          {item.icon}
                        </span>
                      </div>
                      <h2>{parse(item.title)}</h2>
                    </div>
                  ))}
                </div>
              </Wrapper>
            </Benefits>

            <HowItWorks>
              <Wrapper>
                <div className="sectionHeader">
                  <h2>{parse(third.title)}</h2>
                  <p>{parse(third.description)}</p>
                </div>
                <div className="grid">
                  {third.steps.map((step, index) => (
                    <div className="row" key={index}>
                      <div className="number">{index + 1}</div>
                      <h3 className="title">{parse(step.title)}</h3>
                      <p className="description">{parse(step.description)}</p>

                      {/* TODO put SVG here */}
                      <div className="image">
                        <GatsbyImage
                          image={getImage(step.image)}
                          alt={`${step}. image`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Wrapper>
            </HowItWorks>

            <Repay>
              <Wrapper>
                <div className="left">
                  <GatsbyImage image={getImage(fourth.image)} alt={`alt`} />
                </div>
                <div className="right">
                  <h2 className="title">{parse(fourth.title)}</h2>
                  <p className="description">{parse(fourth.description)}</p>
                  <Button href={`${slug}/get-funded`}>{fourth.button}</Button>
                </div>
              </Wrapper>
            </Repay>

            <WhatWeDo>
              <Wrapper>
                <h2 className="title">{parse(fifth.title)}</h2>
                <p className="description">{parse(fifth.description)}</p>
                <h3 className="statement">{parse(fifth.statement)}</h3>
              </Wrapper>
            </WhatWeDo>

            <WeFund>
              <Wrapper>
                <h2 className="title">{parse(sixth.title)}</h2>
                <div className="list">
                  <ul>
                    {sixth.list.map((step, index) => (
                      <li key={index}>{parse(step)}</li>
                    ))}
                  </ul>
                </div>
                <Button href={`${slug}/get-funded`}>{sixth.button}</Button>
              </Wrapper>
            </WeFund>
          </Main>

          <Footer>
            <div className="floaty">
              Powered By <a href="https://www.out.fund/">Outfund</a>
            </div>

            <div className="bottom">
              <Wrapper>
                <div className="left">
                  Powered By{" "}
                  <a
                    href="https://www.out.fund/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Outfund
                  </a>
                </div>
                <div className="right">
                  <a
                    href="https://uploads-ssl.webflow.com/609d396fc05d862f45459755/60c1e8fb43f0e4ecbfa7828d_607ac1f6fc3e765e223ca320_cookie-policy.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Cookie Policy
                  </a>
                  <a
                    href="https://uploads-ssl.webflow.com/609d396fc05d862f45459755/60c1e8cf3c345df3f8d9f2a7_607ac1f686f0394a919871e9_privacy-policy.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Privacy Policy
                  </a>
                </div>
              </Wrapper>
            </div>
          </Footer>
        </ThemeProvider>
      </Container>
    </>
  )
}

export default LandingPageLayout

const Container = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  letter-spacing: 0.01em;

  h1 {
    font-size: 3rem;
    font-weight: 800;
  }
  h2 {
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 8px;
  }
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

const Navbar = styled.nav`
  margin-top: 32px;
  .logo {
    width: 160px;
    height: 64px;
  }
`

const Header = styled.header`
  padding: 80px 0 120px;
  .wrapper {
    display: grid;
    grid-template-columns: 571px 1fr;
    align-items: center;
    gap: 80px;
    h1 {
      margin-bottom: 16px;
    }
    .description {
      margin-bottom: 40px;
    }
  }
`

const Benefits = styled.section`
  background-color: #fafafa;
  padding: 64px 0;
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;

    .row {
      text-align: center;
      h2 {
        font-size: 1.5rem;
        font-weight: 600;
      }
    }
  }
`

const HowItWorks = styled.section`
  padding: 80px 0;
  .sectionHeader {
    text-align: center;
    margin-bottom: 40px;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 80px;
    .row {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;

      .number {
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${(props) => props.theme.primary};
        border-radius: 50%;
        font-weight: 800;
        color: #fff;
        font-size: 18px;
        margin-bottom: 8px;
      }
      h3 {
        font-size: 1.75rem;
        font-weight: 600;
        margin-bottom: 16px;
      }
      .image {
        margin-top: 40px;
      }
    }
  }
`
const Repay = styled.section`
  background-color: #000;
  color: #fff;
  padding: 64px 0;
  .wrapper {
    display: grid;
    grid-template-columns: 270px 1fr;
    gap: 80px;
    .description {
      margin-bottom: 24px;
      opacity: 0.8;
    }
  }
`

const WhatWeDo = styled.section`
  text-align: center;
  padding: 80px 0;
  .wrapper {
    max-width: 570px;
    .statement {
      font-size: 1.75rem;
      font-weight: 600;
      color: ${(props) => props.theme.primary};
      margin-top: 40px;
    }
  }
`

const WeFund = styled.section`
  padding: 80px 0;
  background-color: #000;
  text-align: center;
  color: #fff;
  .list {
    margin-top: 8px;
    margin-bottom: 24px;
    font-size: 1.125rem;
    opacity: 0.8;
    line-height: 1.5;
  }
`

const Footer = styled.footer`
  .floaty {
    display: flex;
    bottom: 24px;
    left: 24px;
    display: none;
  }
  .bottom {
    padding: 24px 0;
    a {
      color: inherit;
    }
    .wrapper {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
    }
    .right {
      display: flex;
      gap: 48px;
    }
  }
`

const Main = styled.main`
  /* padding-top: 100px;
  font-family: sans-serif;
  max-width: 800px;
  margin: 0 auto;
  .text {
    display: flex;
    flex-direction: column;
  }
  header {
    display: flex;
    gap: 80px;
  }
  .image {
    min-width: 200px;
  } */
`

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
  query LandingPageQuery($pageId: String) {
    landingPagesYaml(id: { eq: $pageId }) {
      id
      partnerLogo {
        childImageSharp {
          gatsbyImageData
        }
      }
      fifth {
        description
        statement
        title
      }
      first {
        button
        description
        title {
          firstLine
          secondLine
        }
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      fourth {
        button
        description
        title
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      third {
        title
        description
        steps {
          description
          title
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      slug
      themeColor
      sixth {
        title
        list
        button
      }
      second {
        icon
        title
      }
      published
    }
  }
`
