import React from "react";
import "./Sidebar.css";
import SidebarIcon from "./SidebarIcon";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />

      <SidebarIcon active={true} text="Home" Icon={HomeIcon} />
      <SidebarIcon text="Explore" Icon={SearchIcon} />
      <SidebarIcon text="Notifications" Icon={NotificationsNoneIcon} />
      <SidebarIcon text="Messages" Icon={MailOutlineIcon} />
      <SidebarIcon text="Bookmarks" Icon={BookmarkBorderIcon} />
      <SidebarIcon text="Lists" Icon={ListAltIcon} />
      <SidebarIcon text="Profile" Icon={PermIdentityIcon} />
      <SidebarIcon text="More" Icon={MoreHorizIcon} />
      {/* Tweet btn */}
      <Button variant="outlined" className="sidebar__tweet">
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
