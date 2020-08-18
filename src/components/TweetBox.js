import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="http://mariotodorov.com/static/logo.png" />
          <input placeholder="What's happening?" type="text" />
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="Optional: Image url?"
          type="text"
        />
        <Button className="tweetBox__button">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
