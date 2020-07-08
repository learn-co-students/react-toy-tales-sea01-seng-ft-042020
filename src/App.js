import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'

const API = 'http://localhost:3000/toys'

class App extends React.Component{

  state = {
    display: false,
    toys: [],
  }

  componentDidMount() {
    this.fetchToys()
  }
 
  fetchToys = () => {
    fetch(API)
    .then(response => response.json())
    .then(data => {
      this.setState({
        toys: data
      })
    })
  }
  
  addToy = newToy => {
    console.log(newToy)
      fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newToy)
      })
      .then(response => response.json())
      .then(data => this.fetchToys())
  }

  donateToy = selectedToy => {
    let toyId = selectedToy.id 
    fetch(`${API}/${toyId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then( data => this.fetchToys())
  }

  likeToy = selectedToy => {
    selectedToy.likes++
    this.setState({
    toys: [...this.state.toys.map(toyItem => toyItem.id === selectedToy.id ? selectedToy : toyItem )]
  })

    console.log(selectedToy)
    let toyId = selectedToy.id
    fetch(`${API}/${toyId}`, {
      method: 'PATCH',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(selectedToy)
    })
    .then(response => response.json())
    .then(data => this.fetchToys())
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm onAddToy={this.addToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} onDonateToy={this.donateToy} onLikeToy={this.likeToy}/>
      </>
    );
  }

}

export default App;
