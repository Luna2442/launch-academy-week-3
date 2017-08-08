import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import style from './styles/app.scss'

import Wrapper from './components/Wrapper';
import Picture from './components/Picture';
import List from './components/List';
import Numbers from './components/Numbers';
import Box from './components/Box'

let wrapperParagraph = 'Lorem ipsum dolor sit amet...'

let spaceList =["Asteroids", "Comets", "Moon", "Planets", "Stars", "Sun"]

let list = spaceList.map((item) =>
  <li>{item}</li>
)

let date = (new Date).toString()
let random = parseInt(Math.random() * 100)
let numberParagraph =
  [`Todays date is`,
  <strong>&nbsp;{date}&nbsp;</strong>,
  `and`,
  <em>&nbsp;{random}&nbsp;</em>,
  `is a random number.`]

ReactDOM.render(
  <div>
    <Box
      boxClass="wrapper"
      header="I am the Wrapper"
      paragraph={wrapperParagraph}
    />
    <Box
      boxClass="numbers"
      header="Today's Date and Random Number"
      paragraph={numberParagraph}
    />
    <Box
      boxClass="picture"
      header="Look at This Picture"
      url="https://s3.amazonaws.com/horizon-production/images/react-clever-ees.png"
      alt="Clever EEs"
    />
    <Box
      boxClass="list"
      header="Here is a List"
      list={list}
    />
  </div>,
  document.getElementById('app')
);
