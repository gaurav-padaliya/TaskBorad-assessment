import React from "react";
import Dashboard from "./Dashboard/Dashboard";
import Style from "./LeftSidebar.module.css";
const LeftSidebar = () => {
  const arr = [
    {
      image: "Inbox",
      text: "Input",
      number: 4,
    },
    {
      image: "drive_folder_upload",
      text: "Drive Files",
      number: 435,
    },
    {
      image: "dashboard_customize",
      text: "Updates",
      number: 5,
    },
    {
      image: "access_time",
      text: "Analytics",
      number: 2,
    },
    {
      image: "data_usage",
      text: "CRM Dashboard",
      number: 0,
    },
    {
      image: "space_dashboard",
      text: "Cryptocurrency",
      number: 0,
    },
    {
      image: "sell",
      text: "Projects",
      number: 0,
    },
    {
      image: "payment",
      text: "NFT Marketplace",
      number: 0,
    },
    {
      image: "lock_clock",
      text: "Settings",
      number: 2,
    },
  ];
  const arr1 = [
    {
      image: "tag",
      text: "Additional Calendar",
      number: 6,
    },
    {
      image: "tag",
      text: "Brand Logo Design",
      number: 11,
    },
    {
      image: "tag",
      text: "User Research",
      number: 0,
    },
    {
      image: "tag",
      text: "Analytics",
      number: 2,
    },
    {
      image: "tag",
      text: "Marketing Sales",
      number: 23,
    },
    {
      image: "tag",
      text: "New Project Template",
      number: 2,
    },
    {
      image: "add_circle",
      text: "Add New Project",
      number: 0,
    },
  ];
  return (
    <div className={Style.LeftSidebar}>
      <div className={Style.Head}>
        <div className={Style.T_Dashboard}>Dashboard</div>
        <div className={Style.Icon_menu_open}></div>
      </div>
      <div className={Style.Content}>
        <div className={Style.User}>
          <div className={Style.User_left}>
            <div className={Style.User_left_image}></div>
            <div className={Style.User_left_Frame}>
              <div className={Style.User_left_Frame_up}>Nancy Martino</div>
              <div className={Style.User_left_Frame_down}>Designer</div>
            </div>
          </div>
          <div className={Style.User_right}></div>
        </div>
        <Dashboard title={"DASHBOARD"} arr={arr} />
        <Dashboard title={"PROJECTS"} arr={arr1} />
      </div>
    </div>
  );
};

export default LeftSidebar;
