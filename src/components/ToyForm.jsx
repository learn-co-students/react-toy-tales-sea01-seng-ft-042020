import React, { Component } from 'react';

class ToyForm extends Component {
  constructor(){
    super()
    this.state = {
      name : "",
      image : ""
    }
  }
  handleChange =(event) =>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    event.persist()
    this.props.addToy(this.state)
    event.target.reset()
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}className="add-toy-form">
          <h3>Create a toy!</h3>
          <input onChange={(event) => this.handleChange(event)} type="text" name="name" placeholder="Enter a toy's name..." className="input-text" value={this.state.name}/>
          <br/>
          <input onChange={(event) => this.handleChange(event)} type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text" value={this.state.image}/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
