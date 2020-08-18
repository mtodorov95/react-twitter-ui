import React from "react";
import "./SidebarIcon.css";

function SidebarIcon({ active, text, Icon }) {
  return (
    <div className={`sidebarIcon ${active && "sidebarIcon--active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarIcon;
