import React from "react"
import { graphql } from "gatsby"

export default ({data}) => {
  console.log(data)
  return <div>{data.cardsSetsYaml.title} trading cards on sale!</div> 
}

export const query = graphql`
  query($title: String!) {
    cardsSetsYaml( title: { eq: $title } ) {
      title
    }
  }
`