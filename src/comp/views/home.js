import React, { Component } from "react";
import Card from "../stateless/card";
import Fetch from "../api/fetch";

export default class home extends Component {
  state = {
    data: "",
    ren: ""
  };

  card_render(some) {
    console.log(some.data[0]["details"]);
    const some2 = some.data.map(key => {
      console.log("key:-", key);
      return (
        <div key={key.mission_name}>
          <Card data={key} />
        </div>
      );
    });

    return some2;
  }

  async componentDidMount() {
    const data = await Fetch();
    console.log(data);
    await this.setState({ data });
    const ss = await this.card_render(data);
    await this.setState({ ren: ss });
  }

  render() {
    return (
      <div>
        <div className="container">
          <h2>Upcoming Rocket Launches</h2>
        </div>
        <div className="row">{this.state.ren}</div>
      </div>
    );
  }
}
