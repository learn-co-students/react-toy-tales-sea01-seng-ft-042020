import React from 'react';
import ToyCard from './ToyCard'

class ToyContainer extends React.Component {

renderToys = () => {
  return this.props.toys.map(currentToy => {
    return <ToyCard key={currentToy.id} toy={currentToy} onLikeToy={this.props.onLikeToy} onDonateToy={this.props.onDonateToy} />
  })
}


render(){
  return(
    <div id="toy-collection">
      {this.renderToys()}
    </div>
  )}
}

export default ToyContainer;
