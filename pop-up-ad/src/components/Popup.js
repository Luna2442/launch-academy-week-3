import React from 'react';

const Popup = props => {
  let handleExit = () => {
    confirm(`Are you sure you don't want to see ${props.artist}?`)
    console.log("Ad Closed")
  }

  let submitForm = (event) => {
    console.log('Form Submitted')
    event.preventDefault()
  }

  return(
    <div id="popup">

      <form>
        <div id="exit" onClick={handleExit}>X</div>
        <h1>You have won tickets to see {props.artist}!!</h1>
        <label htmlFor="ticket-purchase">Please enter your email so we can send you tickets!</label>
        <input type="text" name="ticket-purchase" id="ticket-purchase" placeholder="Enter your email here" value=""/>
        <input id="claim-prize" type="submit" value="Claim Your Prize!" onClick={submitForm}/>
      </form>

    </div>
  );
};

export default Popup;
