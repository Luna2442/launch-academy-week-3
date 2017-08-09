import React from 'react';

const FetchButton = props => {

  let fetchData = () => {
    props.fetchMethod();
  }

  return(
    <button onClick={fetchData}>Get Favorite Thing</button>
  )
}

export default FetchButton;
