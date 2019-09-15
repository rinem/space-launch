import React, { Component } from "react";
import Card from "../stateless/card";
import Fetch from "../api/fetch";

var img = [
  "",
  "https://imgur.com/NosdF5E.jpg",
  "https://imgur.com/DmYm9Xq.jpg",
  "https://imgur.com/JCQRO1L.jpg",
  "https://imgur.com/ibjqBqo.jpg",
  "https://imgur.com/3x9u7aI.jpg",
  "https://imgur.com/3AKYzOn.jpg",
  "https://imgur.com/pMfLuVd.jpg",
  "https://imgur.com/QJC8dML.jpg",
  "https://imgur.com/2jeOghS.jpg",
  "https://imgur.com/lDK88Oh.jpg"
];

export default class home extends Component {
  state = {
    data: "",
    ren: ""
  };

  card_render(some) {
    var i = 0;
    console.log(some.data[0]["details"]);
    const some2 = some.data.map(key => {
      console.log("key:-", key);
      i = i + 1;
      return (
        <div key={key.mission_name}>
          <Card data={key} img={img[i]} />
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
          <div className="row">{this.state.ren}</div>
        </div>
      </div>
    );
  }
}
