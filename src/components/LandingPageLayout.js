import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const LandingPageLayout = ({ data: { landingPagesYaml } }) => {
  console.log(landingPagesYaml)
  const { title, description, image } = landingPagesYaml
  return (
    <main>
      <h1>{title}</h1>
      <p>{description}</p>
      <div>
        <GatsbyImage image={getImage(image)} alt="test" />
      </div>
      <div>
        <button>Get funded</button>
      </div>
    </main>
  )
}

export default LandingPageLayout

export const query = graphql`
  query LandingPageQuery($pageId: String) {
    landingPagesYaml(id: { eq: $pageId }) {
      slug
      title
      description
      image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`
