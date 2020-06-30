import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {
  
  const renderToy = () => {
    return props.toys.map(toy=>{
      return <ToyCard key={toy.id} toyData={toy} onHandleDeleteToy={props.onHandleDeleteToy} onHandleLikes={props.onHandleLikes}/>
    })
  }

  return(
    <div id="toy-collection">
      {renderToy()}
    </div>
  );
}

export default ToyContainer;
