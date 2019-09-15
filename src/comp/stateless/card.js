import React, { Component } from "react";

export default class card extends Component {
  render() {
    console.log("props:-", this.props);
    return (
      <div>
        <div className="col s12 l6">
          <div className="card sticky-action">
            <div className="card-image">
              <img src="this.props.data.img" alt="" />
              <a href="" className="halfway-fab btn-floating pink pulse">
                <i className="material-icons">favorite</i>
              </a>
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">
                {this.props.data.mission_name}
                <i className="material-icons right">more_vert</i>
              </span>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">
                <i className="material-icons right">close</i>
              </span>
              <p>More Info</p>
              {this.props.data.details}
              <p>Launch Year : {this.props.data.launch_year}</p>
              <p>Launch Date : {this.props.data.launch_date_utc}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
