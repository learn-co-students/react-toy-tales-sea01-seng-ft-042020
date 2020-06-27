import React, { Component } from 'react';
import ToyContainer from './ToyContainer'

class ToyForm extends Component {

  state = {
    name: '',
    image: '',
    likes: 0
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleImageChange = (e) => {
    this.setState({
      image: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      name: e.target.name.value,
      image: e.target.image.value
    })
    this.props.handlePost(this.state)
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}  className="add-toy-form">
          <h3>Create a toy!</h3>
          <input onChange={this.handleNameChange}type="text" name="name" placeholder="Enter a toy's name..." className="input-text" value={this.state.name}/>
          <br/>
          <input onChange={this.handleImageChange}  type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text" value={this.state.image}/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
