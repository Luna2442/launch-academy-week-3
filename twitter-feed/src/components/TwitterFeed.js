import React from 'react';
import Tweet from './Tweet';

const TwitterFeed = (props) => {

  let tweets = props.data.map((tweet)=> {

    let mediaURL
    let displayURL

    if (tweet.entities.media != undefined) {
      mediaURL = tweet.entities.media[0].media_url;
      displayURL = tweet.entities.media[0].display_url;
    }

    return (
    <Tweet
      key={tweet.id_str}
      text={tweet.text}
      name={tweet.user.name}
      handle={tweet.user.screen_name}
      profile_img={tweet.user.profile_image_url}
      display_url={displayURL}
      media_url={mediaURL}
      retweet_count={tweet.retweet_count}
      favorite_count={tweet.favorite_count}
      favorited={tweet.favorited}
      retweeted={tweet.retweeted}
    />
  )});

  return (
    <div id="twitter_feed">
      {tweets}
    </div>
  )

}

export default TwitterFeed;
