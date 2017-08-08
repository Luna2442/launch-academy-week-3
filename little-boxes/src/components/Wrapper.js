import React from 'react';
import Picture from './Picture'
import List from './List'
import Numbers from './Numbers'
import Box from './Box'

const Wrapper = props => {
  return (
    <div className='box wrapper'>
      <h1>{props.header}</h1>
      <p>{props.paragraph}</p>
      <Numbers header="Today's Date and Random Number"/>
      <Picture header="Look at This Picture" url="https://s3.amazonaws.com/horizon-production/images/react-clever-ees.png"/>
    </div>
  )
}

export default Wrapper;
