import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "../firebase";

function TweetBox() {
  const [tweetMsg, setTweetMsg] = useState("");
  const [tweetImg, setTweetImg] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "currentUser",
      userName: "currentUsername",
      verified: true,
      text: tweetMsg,
      image: tweetImg,
      avatar: "",
    });
    setTweetMsg("");
    setTweetImg("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="http://mariotodorov.com/static/logo.png" />
          <input
            value={tweetMsg}
            onChange={(e) => setTweetMsg(e.target.value)}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImg}
          onChange={(e) => setTweetImg(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Image url?"
          type="text"
        />
        <Button type="submit" onClick={sendTweet} className="tweetBox__button">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
