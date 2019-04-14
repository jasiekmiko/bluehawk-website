import React from "react"
import LogoBanner from "../images/banner.png"
import { Link } from "gatsby"
const ListLink = props => (
  <li style={{ display: `inline`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 800, padding: `0 1rem` }}>
    <img src={LogoBanner} alt="Logo" width="325px" />
    <div id="nav" >
            <ul style={{ listStyle: `none`, float: `right` }}>
                <ListLink to="/">Home</ListLink>
                <ListLink to="/latestset/">Latest Set</ListLink>
                <ListLink to="/alltradingcards/">Trading Cards</ListLink>
                <ListLink to="/history/">History</ListLink>
                <ListLink to="/contact/">Contact</ListLink>
                <ListLink to="/checkout/">Checkout</ListLink>
            </ul>
    </div>
    {children}
  </div>
)