import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {
  return(
    <div id="toy-collection">
      {props.toys.map(toy => <ToyCard id={toy.id} name={toy.name} image={toy.image} likes={toy.likes} deleted={toy.deleted} handleDelete={props.handleDelete} handleLikes={props.handleLikes} />)}
    </div>
  );
}

export default ToyContainer;
