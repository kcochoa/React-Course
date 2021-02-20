import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errrorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => this.setState({ errrorMessage: err.message })
    );
  }

  render() {
    if (this.state.errrorMessage && !this.state.lat) {
      return <div> Error: {this.state.errrorMessage}</div>;
    }

    if (!this.state.errrorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }

    return <div>Loading...</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
