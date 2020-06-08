import React from "react";
import "./styles.css";
import axios from "axios";

class App extends React.Component {
  state = {
    doggos: [],
    doggoText: ""
  };

  componentDidMount() {
    axios.get("https://dog.ceo/api/breed/husky/images").then(res => {
      //res.data.message
      this.setState({
        doggos: res.data.message
      });
    });
  }

  handleChanges = e => {
    this.setState({
      doggoText: e.target.value
    });
  };

  fetchDoggos = e => {
    axios
      .get(`https://dog.ceo/api/breed/${this.state.doggoText}/images`)
      .then(res => {
        //res.data.message
        this.setState({
          doggos: res.data.message
        });
      });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello Doggos</h1>
        <input
          type="text"
          value={this.state.doggoText}
          onChange={this.handleChanges}
        />

        <button onClick={this.fetchDoggos}> Fetch doggos</button>
        <div className="doggos">
          {this.state.doggos.map(doggo => {
            return <img width="200" src={doggo} key={doggo} alt={doggo} />;
          })}
        </div>
      </div>
    );
  }
}
export default App;
