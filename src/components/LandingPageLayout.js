import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const LandingPageLayout = ({ data: { landingPagesYaml } }) => {
  console.log(landingPagesYaml)
  const { title, description, image, buttonColor } = landingPagesYaml
  return (
    <Main>
      <header>
        <div className="text">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className="image">
          <GatsbyImage image={getImage(image)} alt="test" />
        </div>
      </header>

      <div>
        <Button
          href="https://calendly.com/alexis-211/growth-capital-consultation-with-outfund?month=2022-03"
          style={{ backgroundColor: `${buttonColor}` }}
        >
          Get funded
        </Button>
      </div>
    </Main>
  )
}

export default LandingPageLayout

const Main = styled.main`
  padding-top: 100px;
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
  }
`

const Button = styled.a`
  text-decoration: none;
  color: #000;
  display: inline-block;
  padding: 10px 20px;
  margin: 0;
  border: none;
  font-weight: bold;
  border-radius: 100px;
`

export const query = graphql`
  query LandingPageQuery($pageId: String) {
    landingPagesYaml(id: { eq: $pageId }) {
      slug
      title
      description
      buttonColor
      image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`
