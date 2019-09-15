import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./comp/views/home";
import Navbar from "./comp/stateless/navbar";
import Agencies from "./comp/views/agencies";
import Discuss from "./comp/views/discuss";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path={"/discuss"} component={Discuss} />
            <Route path={"/agencies"} component={Agencies} />
            <Route path={"/"} component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
