import React, { Component, Fragment } from 'react';
import ToyContainer from './ToyContainer'

class ToyCard extends Component {

  state = {
    id: this.props.id,
    likes: this.props.likes,
    deleted: false,
  }

  handleRemove = () => {
    this.setState({
      deleted: true
    })
    this.props.handleDelete(this.state)
  }

  handleLike = () => {
    let currentLikes = this.state.likes
    this.setState({
      likes: currentLikes + 1
    })
    this.props.handleLikes(this.state)
  }

  render() {
    return (
      <Fragment>
         {
         this.state.deleted === true ? null :
         <div className="card"><h2>{this.props.name}</h2>
         <img src={this.props.image} alt={this.props.name} className="toy-avatar" />
         <p>{this.state.likes} Likes </p>
         <button onClick={this.handleLike} className="like-btn">Like {'<3'}</button>
         <button onClick={this.handleRemove}className="del-btn" id={this.props.id}>Donate to GoodWill</button> 
         </div>
         }
         </Fragment>
    );
  }

}

export default ToyCard;
