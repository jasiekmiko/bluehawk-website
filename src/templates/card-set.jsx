import React from "react"
import { graphql } from "gatsby"

export default ({data}) => {
  console.log(data)
  return (
  <div>
    <h1>
    Check out the {data.cardSetsYaml.title} trading cards

    </h1>
    {data.cardSetsYaml.onSale && <h2>On sale now!</h2>}
  </div>)
}

export const query = graphql`
  query($id: String!) {
    cardSetsYaml( id: { eq: $id } ) {
      title
      onSale
    }
  }
`