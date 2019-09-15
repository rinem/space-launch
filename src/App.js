import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./comp/views/home";
import Navbar from "./comp/stateless/navbar";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route to={"/"} component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
