import React from "react"
import LogoBanner from "../images/banner.png"

export class Header extends React.Component {
  render() {
    return <img src={LogoBanner} alt="Logo" /> /*  <div>Welcome {this.props.children}!</div> */
  }
}
