import React from 'react';

const Box = props => {
  let boxClass = `box ${props.boxClass}`

  let paragraph
  if (props.paragraph) {
    paragraph = <p>{props.paragraph}</p>
  }

  let list
  if (props.list) {
    list = <ul>{props.list}</ul>
  }

  let img
  if (props.url) {
    img = <img alt={props.alt} src={props.url}/>
  }

  return (
    <div className={boxClass}>
      <h1>{props.header}</h1>
      {paragraph}
      {list}
      {img}
    </div>
  )
}

export default Box;
