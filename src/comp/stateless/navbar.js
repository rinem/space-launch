import React, { Component } from "react";

export default class navbar extends Component {
  render() {
    return (
      <div>
        <div className="navbar-fixed">
          <nav className="nav-wrapper black">
            <div className="container">
              <a href="#" className="brand-logo">
                Space-Launch
              </a>
              <a
                href="#"
                className="sidenav-trigger"
                data-target="mobile-links"
              >
                <i className="material-icons">menu</i>
              </a>
              <ul className="right hide-on-med-and-down">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Agencies</a>
                </li>
                <li>
                  <a href="">Discuss</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
