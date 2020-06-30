import React, { Component } from 'react';

class ToyCard extends Component {

  render() {
    const {image, likes, name} = this.props.toy
    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt={name} className="toy-avatar" />
        <p>{likes} Likes </p>
        <button onClick={(e)=> this.props.handleLike(e, this.props.toy)} className="like-btn">Like {'<3'}</button>
        <button onClick={(e)=> this.props.handleDonate(e, this.props.toy)} className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
