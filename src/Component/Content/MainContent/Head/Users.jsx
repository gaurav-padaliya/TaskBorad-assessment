import React from "react";
import Style from "./Head.module.css";
import Style1 from "../../Top/Top.module.css";

const Users = () => {
  return (
    <div className={Style.users}>
      <div className={Style.users_left}>
        <div className={Style.u_l_groupbtn}>
          <div className={Style.u_l_groupbtn_btn}>
            <div className={Style.u_l_groupbtn_btn_icon}></div>
            <div className={Style.u_l_groupbtn_btn_text}>Board View</div>
          </div>
          <div
            className={Style.u_l_groupbtn_btn}
            style={{ background: "#FFFFFF", borderRadius: "0px 8px 8px 0px" }}
          >
            <div className={Style.u_l_groupbtn_btn_icon1}></div>
            <div className={Style.u_l_groupbtn_btn_text}>Board View</div>
          </div>
        </div>
        <div className={Style.u_l_line} style={{ order: 1 }}></div>
        <div className={Style.u_l_lock}>
          <div className={Style.u_l_lock_icon}></div>
          <div className={Style.u_l_lock_text}>Limited Access</div>
          <div className={Style.u_l_lock_icon1}></div>
        </div>
        <div className={Style.u_l_line} style={{ order: 3 }}></div>
        <div className={Style.u_l_owner}>
          <div className={Style.u_l_owner_text}>Owners</div>
          <div className={Style.u_l_owner_icon}></div>
          <div className={Style.u_l_owner_text}>Twitter Team</div>
        </div>
      </div>
      <div className={Style.users_default}>
        <div
          className={Style1.left_Input}
          style={{ padding: "0px 10px", width: "100%" }}
        >
          <div
            className={Style1.left_Input_content}
            style={{ padding: "0px 5px", width: "90%" }}
          >
            <div className={Style1.search_icon}></div>
            <div className={Style1.inputtext}>
              <input
                type="text"
                placeholder="Search Tasks"
                style={{ width: "110%" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={Style.users_right}>
        <div className={Style.users_right_url}></div>
      </div>
    </div>
  );
};

export default Users;
