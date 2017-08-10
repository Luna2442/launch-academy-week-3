import React, {Component} from 'react'
import Question from './Question';

class FAQContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      id: null
    }
    this.handleOpenQuestion = this.handleOpenQuestion.bind(this)
  }

  handleOpenQuestion(id){
    this.setState({id: id})
  }

  render(){

    let questions;
    questions = this.props.data.map((faq) => {

      let handleClick = () => {
        if (this.state.id !== faq.id) {
          this.handleOpenQuestion(faq.id)
        } else {
          this.setState({id: null})
        }
      }

      let answer;
      let style;
      if (this.state.id === faq.id) {
        answer = faq.answer;
        style = {
          color: "#84CE15"
        }
      } else {
        answer = null;
        style = {
          color: "#1c2224"
        }
      }

      return(
        <Question
          key={faq.id}
          id={faq.id}
          question={faq.question}
          answer={answer}
          handleClick={handleClick}
          style={style}
        />
      )
    })

    return (
      <div>{questions}</div>
    )
  }


}

export default FAQContainer;
