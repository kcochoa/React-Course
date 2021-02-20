import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

class App extends Component {
  state = { lat: null, errrorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errrorMessage: err.message })
    );
  }

  render() {
    if (this.state.errrorMessage && !this.state.lat) {
      return <div> Error: {this.state.errrorMessage}</div>;
    }

    if (!this.state.errrorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}/>;
    }

    return <Spinner message="Please accept location request"/>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
