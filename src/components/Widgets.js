import React from "react";
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import {
  TwitterTweetEmbed,
  TwitterShareButton,
  TwitterTimelineEmbed,
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1295766233653096464"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Twitch"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"#"}
          options={{ text: "tweet text", via: "username" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
