import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'


class App extends React.Component{

  state = {
    toys: data,
    display: false
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  addLike = (id) => {
    this.setState(prevState => ({
      toys: prevState.toys.map(toy => {
        if (toy.id === id) {
          toy.likes += 1
          return toy
        } else {
          return toy
        }
      })
    }))
  }

  donateToy = (id) => {
    this.setState(prevState => ({
      toys: prevState.toys.filter(toy => toy.id !== id)
    }))
  }

  addToy = (toy) => {
    toy.likes = 0
    toy.id = this.state.toys[this.state.toys.length - 1].id +1
    console.log(toy)
    this.setState({
      toys: [...this.state.toys, toy]
    })
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm addToy={this.addToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} addLike={this.addLike} donateToy={this.donateToy} />
      </>
    );
  }

}

export default App;
