import React from "react"

import {Header} from "../components/header"
import Layout from "../components/layout"


import SaleImage from "../images/saleimage.png"

export default class extends React.Component {
  render() {
    return  <Layout>
      <h3>Welcome to Bluehawk!</h3>

      This is our main page, you can buy the latest set of cards and see a cool picture.

      <img src={SaleImage} alt="Sale Image" width="650px"/> 

    </Layout>
  }
}
