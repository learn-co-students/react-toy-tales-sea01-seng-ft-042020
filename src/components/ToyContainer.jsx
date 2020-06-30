import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => { 

  const renderToys = () => {
    console.log(props)
  return props.toys.map(toy =><ToyCard key={toy.id} toy={toy} handleDonate={props.handleDonate} handleLike={props.handleLike}/>)
  }

  return(
    <div id="toy-collection">
      {renderToys()}
    </div>
  );
}

export default ToyContainer;
