import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'


class App extends React.Component{

  state = {
    display: false,
    toys: data
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  findToy = (toy) => this.state.toys.find(toyItem => toyItem === toy)

  onLikeClick = (toy) => {
    // let likedToy = this.findToy(toy)
    toy.likes += 1
    this.setState(prev => {
      return {toys: prev.toys.map(toyItem => toyItem.id === toy.id ? toyItem = toy : toyItem)}
    })
  }

  onDeleteClick = (toy) => {
    this.setState(prev => {
      return {toys: prev.toys.filter(toyItem => toyItem !== toy)}
    })
  }

  onSubmitClick = (e) => {
    this.setState(prev => {
      console.log(prev.toys.length)
      return {toys: [...prev.toys, {
        id: prev.toys.length + 1,
        name: e.target.name.value,
        image: e.target.image.value,
        likes: 0
      }]}
    })
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm onSubmitClick={this.onSubmitClick}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} onLikeClick={this.onLikeClick} onDeleteClick={this.onDeleteClick}/>
      </>
    );
  }

}

export default App;
