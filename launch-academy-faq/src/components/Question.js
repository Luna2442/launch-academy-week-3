import React from 'react';

const Question = (props) => {

  let style = {
    color: "#777777"
  }

  return(
    <div className="faq" className="large-12 columns">
      <div className="large-1 columns">
        <i className="fa fa-plus-square fa-4x" aria-hidden="true" style ={props.style} onClick={props.handleClick}></i>
      </div>
      <div className="large-11 columns">
        <p className="question">{props.question}</p>
        <p style={style}>{props.answer}</p>
        <div className="border-line"></div>
      </div>
    </div>
  )
}

export default Question;
