import React, {Component} from 'react';
import FAQContainer from './FAQContainer'

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div>
        <h1 style={{color: "#37BECC"}}>We're Here To Help</h1>
        <FAQContainer data={this.props.data}/>
      </div>
    )
  }
}

export default App;
