import React, { Component } from 'react';

class ToyCard extends Component {

  handleDelete = () => {
    this.props.onDonateToy(this.props.toy)
  }

  handleLike = () => {
    this.props.onLikeToy(this.props.toy)
  }

  render() {
    const {name, image, likes} = this.props.toy
    return (
      <div className="card">
        <h2>{this.props.toy.name}</h2>
        <img src={image} alt={name} className="toy-avatar" />
        <p>{likes} Likes </p>
        <button className="like-btn" onClick={() => this.handleLike()}>Like {'<3'}</button>
        <button className="del-btn" onClick={() => this.handleDelete()}>Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
