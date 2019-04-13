import React from "react"

export class Header extends React.Component {
  render() {
    return <div>Welcome {this.props.children}!</div>
  }
}
