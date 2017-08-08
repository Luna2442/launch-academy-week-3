import React from 'react'


const Tweet = (props) => {

  let favStyle
  if (props.favorited) {
    favStyle = {
      color: "#E2264D"
    }
  } else {
    favStyle = {
      color: "#AAB8C2"
    }
  }

  let retweetStyle
  if (props.retweeted) {
    retweetStyle = {
      color: "#19CF86"
    }
  } else {
    retweetStyle = {
      color: "#AAB8C2"
    }
  }

  let otherStyle = {
    color: "#AAB8C2"
  }

  let replyAlert = (event) => {
    alert('Reply')
  }

  let retweetAlert = (event) => {
    alert('Retweet')
  }

  let likeAlert = (event) => {
    alert('Like')
  }

  let favoriteAlert = (event) => {
    alert('Favorite')
  }

  return (
    <div id="tweet">

      <img id="profile_img" src={props.profile_img} />
      <div id="tweet_info">
        <h4>{props.name}</h4>
        <h4 style={otherStyle}>@{props.handle}</h4>
        <h4 style={otherStyle}>DATE</h4>
      </div>
      <p id="text">{props.text}</p>
      <div id="actions">
        <i className="fa fa-reply" aria-hidden="true" onClick={replyAlert} style={otherStyle}></i>
        <i className="fa fa-retweet" aria-hidden="true" onClick={retweetAlert} style={retweetStyle}> {props.retweet_count}</i>
        <i className="fa fa-heart" aria-hidden="true" onClick={likeAlert} style={favStyle}> {props.favorite_count}</i>
        <i className="fa fa-ellipsis-h" aria-hidden="true" onClick={favoriteAlert} style={otherStyle}></i>
      </div>
      <div id="media">
        <a href={props.display_url}></a>
        <img src={props.media_url} />
      </div>

    </div>
  )
}






export default Tweet;
