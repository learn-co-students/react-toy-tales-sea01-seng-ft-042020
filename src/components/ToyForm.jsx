import React, { Component } from 'react';

class ToyForm extends Component {

  state = {
    name: "",
    image: ""
  }

  handleChange = (target) => {
    this.setState({
      [target.name]: target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addToy(this.state)
  }

  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={(event) => this.handleSubmit(event)}>
          <h3>Create a toy!</h3>
          <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text" onChange={(event) => this.handleChange(event.target)}/>
          <br/>
          <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text" onChange={(event) => this.handleChange(event.target)}/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
