import React, { Component } from 'react';

class ToyForm extends Component {

  state = {
      name: '',
      image: '',
      likes: 0
  }

  handleChange = (event) => {
    console.log(event.target.value)
      this.setState({
          [event.target.name]: event.target.value
      })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onAddToy(this.state)
    console.log(event)
  }


  render() {
    return (
      <div className="container" >
        <form className="add-toy-form" onSubmit={(event) => this.handleSubmit(event)}>
          <h3>Create a toy!</h3>
          <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text" onChange={this.handleChange} />
          <br/>
          <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text" onChange={this.handleChange} />
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit" />
        </form>
      </div>
    );
  }

}

export default ToyForm;
