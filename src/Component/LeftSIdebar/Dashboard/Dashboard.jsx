import React from "react";
import Style from "./Dashboard.module.css";
import Items from "./Items";
const Dashboard = ({ title, arr }) => {
  return (
    <div className={Style.Dashboard_menu}>
      <div className={Style.Head}>
        <div className={Style.T_Dashboard}>{title}</div>
        <div className={Style.Icon_menu_open}></div>
      </div>
      <div className={Style.Item}>
        {arr.map((el) => (
          <Items image={el.image} text={el.text} number={el.number} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
