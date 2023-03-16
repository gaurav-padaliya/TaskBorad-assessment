import React from "react";
import Style from "./Head.module.css";
const Heading = () => {
  return (
    <div className={Style.heading}>
      <div className={Style.heading_left}>
        <div className={Style.heading_left_text}>Task Boards</div>
        <div className={Style.heading_left_icon}></div>
      </div>
      <div className={Style.heading_tab}>
        <div
          className={Style.heading_tab_s}
          style={{ borderBottom: "2px solid #3B82F6", color: "#3B82F6" }}
        >
          Timeline
        </div>
        <div className={Style.heading_tab_s}>Calendar</div>
        <div className={Style.heading_tab_s}>Dashboard</div>
        <div className={Style.heading_tab_s}>Progress</div>
        <div className={Style.heading_tab_s}>Forms</div>
        <div className={Style.heading_tab_s}>More</div>
      </div>
      <div className={Style.heading_avatar}></div>
    </div>
  );
};

export default Heading;
