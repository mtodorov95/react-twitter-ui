import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

const Post = forwardRef(
  ({ displayName, userName, verified, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
                <span className="post__headerSpecial">
                  {verified && <VerifiedUserIcon className="post__badge" />} @{" "}
                  {userName}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} />
          <div className="post__footer">
            <IconButton className="post__chatButton">
              <ChatBubbleOutlineIcon fontSize="small" />
            </IconButton>

            <IconButton className="post__retweetButton">
              <RepeatIcon fontSize="small" />
            </IconButton>

            <IconButton className="post__likeButton">
              <FavoriteBorderIcon fontSize="small" />
            </IconButton>

            <IconButton className="post__publishButton">
              <PublishIcon fontSize="small" />
            </IconButton>
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
