import React, { Component } from 'react';
import data from '../constants/data';
import Place from '../components/Place';
import styles from '../stylesheets/index.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null
    }
    this.handleCrossout = this.handleCrossout.bind(this)
  }

  handleCrossout(id){
    this.setState({id: id})
  }

  render(){
    
    let places;
    places = this.props.data.places.map((place) => {
      let visited = false;

      if(place.id === this.state.id) {
        visited = true;
      }

      let selectLocation = () => {
        this.handleCrossout(place.id)
      }

      return(
      <Place
        key={place.id}
        id={place.id}
        name={place.name}
        selectFunction={selectLocation}
        crossOut={visited}
      />
      )
    })

    return (
      <div id="wishlist-div">
        <div className="row">
          <div className="small-12 small-centered columns text-center">
            <h3>Wanderlust Wishlist</h3>
            <ul>{places}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
