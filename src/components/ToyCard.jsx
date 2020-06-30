import React, { Component } from 'react';

class ToyCard extends Component {

  handleDeleteToy = (toyId) => {
    this.props.onHandleDeleteToy(this.props.toyData.id)
  }

  handleLikes = (toy) => {
    this.props.onHandleLikes(this.props.toyData)
  }

  render() {

    const {name, image, likes} = this.props.toyData

    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt={name} className="toy-avatar" />
        <p>{likes} Likes </p>
        <button className="like-btn" onClick={this.handleLikes}>Like {'<3'}</button>
        <button className="del-btn" onClick={this.handleDeleteToy}>Donate to GoodWill</button>
      </div>
    );
  }
}

export default ToyCard;
