import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class navbar extends Component {
  render() {
    return (
      <div>
        <div className="navbar-fixed">
          <nav className="nav-wrapper black">
            <div className="container">
              <NavLink href="" className="brand-logo">
                Space-Launch
              </NavLink>
              <NavLink
                href=""
                className="sidenav-trigger"
                data-target="mobile-links"
              >
                <i className="material-icons">menu</i>
              </NavLink>
              <ul className="right hide-on-med-and-down">
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"agencies"}>Agencies</NavLink>
                </li>
                <li>
                  <NavLink to={"discuss"}>Discuss</NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
