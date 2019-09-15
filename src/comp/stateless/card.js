import React, { Component } from "react";

export default class card extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h2>Upcoming Rocket Launches</h2>
          <div className="row">
            <div className="col s12 l6">
              <div className="card sticky-action">
                <div className="card-image">
                  <img src="<%= obj[i] %>" alt="" />
                  <a href="" className="halfway-fab btn-floating pink pulse">
                    <i className="material-icons">favorite</i>
                  </a>
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">
                    SS1<i className="material-icons right">more_vert</i>
                  </span>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">
                    More Information
                    <i className="material-icons right">close</i>
                  </span>
                  <p>Soon to be launched</p>
                  <p>Launch Year : 2019</p>
                  <p>Launch Date : 21-10-2019</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
