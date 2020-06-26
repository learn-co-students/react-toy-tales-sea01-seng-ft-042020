import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {
  const {toys, onLikeClick, onDeleteClick} = props

  const renderToys = () => toys.map(toy => <ToyCard toy={toy} onLikeClick={onLikeClick} onDeleteClick={onDeleteClick}/>)

  return(
    <div id="toy-collection">
      {renderToys()}
    </div>
  );
}

export default ToyContainer;
