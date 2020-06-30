import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'


class App extends React.Component{

  state = {
    display: false,
    toys: []
  }

  addToy = (toyName, imgUrl) => {
    fetch("http://localhost:3000/toys", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "name": toyName,
        "image": imgUrl,
        "likes": 0
      })
    })
    .then(resp=>resp.json())
    .then(data=>this.fetchToys())
  }

  deleteToy = (toyId) => {
    console.log()
    fetch(`http://localhost:3000/toys/${toyId}`, {
      method: 'DELETE'
    })
    .then(resp=>resp.json())
    .then(data=>this.fetchToys())
    
  }

  increaseLikes = (toy) => {
    toy.likes++
    this.setState({...this.state.toys.map(toyItem => toyItem.id !== toy.id ? toyItem : toy)})

    fetch(`http://localhost:3000/toys/${toy.id}`, {
      method: 'PATCH',
      headers: {
        "Content-type":"application/json"
      },
      body: JSON.stringify(toy)
    })
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  componentDidMount(){
    this.fetchToys()
  }

  fetchToys = () => {
    const URL = "http://localhost:3000/toys"
    fetch(URL)
    .then(resp=>resp.json())
    .then(data=>this.setState({
      toys: data
    }))
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
        <ToyContainer onHandleLikes={this.increaseLikes} onHandleDeleteToy={this.deleteToy} toys={this.state.toys}/>
      </>
    );
  }

}

export default App;
