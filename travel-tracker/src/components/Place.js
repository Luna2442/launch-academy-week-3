import React from 'react';

const Place = props => {

  let crossOut = "";

  if(props.crossOut){
    crossOut = "crossed-out";
  }


  return(
    <div>
      <h1 className={crossOut} onClick={props.selectFunction}>
        {props.name}
      </h1>
    </div>
  )
}

export default Place;
