import React from "react";
import Style from "./RightSidebar.module.css";

const RightSidebar = () => {
  const imgurl = "https://i.pravatar.cc/300?img=3";
  return (
    <div className={Style.RightSidebar}>
      <div className={Style.top}>
        <div className={Style.top_close}></div>
      </div>
      <div className={Style.user}>
        {Array(10)
          .fill(1)
          .map((el) => (
            <div className={Style.user_avatar}>
              <div
                className={Style.user_avatar_icon}
                style={{
                  background: `url("https://i.pravatar.cc/300?img=${Math.floor(
                    Math.random() * 10
                  )}")`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                }}
              ></div>
            </div>
          ))}
      </div>
      <div className={Style.bottom}>
        <div className={Style.bottom_arrow}></div>
      </div>
    </div>
  );
};

export default RightSidebar;
