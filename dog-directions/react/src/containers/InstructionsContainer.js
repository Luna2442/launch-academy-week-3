import React, { Component } from 'react';
import StepTile from '../components/StepTile';
import ItemTile from '../components/ItemTile';
import FetchButton from '../components/FetchButton';

class InstructionsContainer
 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      data: {}
    }
    this.changeState = this.changeState.bind(this);
    this.getInstructions = this.getInstructions.bind(this);
  }

  changeState(id){
    this.setState({id: id});
  };

  getInstructions(){
    fetch('/api/v1/favorite_things.json')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} ${response.statusText}`;
        let error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({data: body})
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  };

  render(){
    console.log(this.state.id)
    let supplies = this.state.data.supplies
    let directions = this.state.data.directions
    let items;
    let steps;

    if (supplies != null){
      items = supplies.map(supply => {
        return(
          <ItemTile
            item={supply.item}
            key={supply.id}
            id={supply.id}
          />
        )
      })
    }

    if (directions != null){
      steps = directions.map(direction => {
        let className;
        if (this.state.id === direction.id) {
          className = 'selected'
        }
        return(
          <StepTile
            step={direction.step}
            key={direction.id}
            id={direction.id}
            setSelectedStep={this.changeState}
            className = {className}
          />
        )
      })
    }

    return(
      <div>
        <h1>How To {this.state.data.activity}</h1>
        <h3>Supplies:</h3>
        <ul>
          {items}
        </ul>
        <h3>Instructions:</h3>
        <ol>
          {steps}
        </ol>
        <FetchButton
          fetchMethod={this.getInstructions}
        />
      </div>
    )
  }
}

export default InstructionsContainer
;
