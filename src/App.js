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
    toys: []
  }

  handlePost = (toy) => {
    let currentToys = this.state.toys
    let obj = {
      name: toy.name,
      image: toy.image
    }
    fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'},
      body: JSON.stringify(obj)
    })
    currentToys.push(obj)
  }

  handleDelete = (toyCard) => {
    fetch(`${API}/${toyCard.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'}
      }
    )
  }

  handleLikes = (toyCard) => {
    let obj = {
      likes: toyCard.likes + 1
    }
    fetch(`${API}/${toyCard.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'},
        body: JSON.stringify(obj)
      }
    )
  }


  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        toys: data
      })
    })
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
          <ToyForm toys={this.state.toys} handlePost={this.handlePost}
          handleSubmit={this.handleSubmit}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer handleLikes={this.handleLikes} handleDelete={this.handleDelete} toys={this.state.toys}/>
      </>
    );
  }

}

export default App;
