import React from "react";
import "./App.css";
import Header from "./components/Header";
import ToyForm from "./components/ToyForm";
import ToyContainer from "./components/ToyContainer";
const API = "  http://localhost:3000/toys";

// import data from './data'

class App extends React.Component {
  state = {
    display: false, //display the form or not
    toys: [],
  };

  fetchToys = () => {
    fetch(API)
      .then((res) => res.json())
      .then((json) =>
        this.setState({
          toys: json,
        })
      );
  };

  componentDidMount() {
    this.fetchToys();
  }

  handleClick = () => {
    let newBoolean = !this.state.display;
    this.setState({
      display: newBoolean,
    });
  };
  addToy = (toy) => {
    toy.likes = 0;
    let configObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toy),
    };
    fetch(API, configObject)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({
          toys: [...this.state.toys, json],
        });
      });
  };

  handleDonate = (e, toy) => {
    console.log(toy)
    let configObject = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toy),
    };
    fetch(`${API}/${toy.id}`, configObject)
      .then((res) => res.json())
      .then(
        this.setState({
          toys: [...this.state.toys.filter((aToy) => aToy.id !== toy.id)],
        })
      );
  };

  handleLike = (e, toy) => {
    toy.likes++;
    console.log(toy);
    let configObject = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toy),
    };
    fetch(`${API}/${toy.id}`, configObject)
      .then((res) => res.json())
      .then(this.fetchToys());
  };

  render() {
    console.log(this.state);
    return (
      <>
        <Header />
        {this.state.display ? <ToyForm addToy={this.addToy} /> : null}
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer
          toys={this.state.toys}
          handleDonate={this.handleDonate}
          handleLike={this.handleLike}
        />
      </>
    );
  }
}

export default App;
