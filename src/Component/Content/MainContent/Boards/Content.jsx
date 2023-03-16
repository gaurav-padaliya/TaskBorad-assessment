import React from "react";
import Style from "./Boards.module.css";
const Content = ({ Head, Tag, Footer }) => {
  return (
    <div className={Style.column_content}>
      <div className={Style.column_content_head}>
        <div className={Style.column_content_head_title}>{Head.title}</div>
        <div className={Style.column_content_head_cnt}>
          <div className={Style.column_content_head_cnt_icon}></div>
          <div
            className={Style.column_content_head_cnt_no}
            style={{ color: Head.c_cnt }}
          >
            {Head.cnt}
          </div>
        </div>
      </div>
      {/* tag */}
      <div className={Style.column_content_tag}>
        {Tag.map((obj, ind) =>
          !Tag.is ? (
            <div
              key={ind}
              className={Style.column_content_tag_badges}
              style={{ background: obj.background, color: obj.color }}
            >
              {obj.text}
            </div>
          ) : (
            ""
          )
        )}
      </div>
      {/* footer */}
      {Footer.is && (
        <div className={Style.column_content_footer}>
          {/* ________images */}
          <div className={Style.column_content_footer_avatar}>
            <div className={Style.ccfa_avatar}>
              {Array(Footer.im_cnt)
                .fill(2)
                .map((el, ind) => (
                  <div
                    className={Style.ccfa_avatar_s}
                    style={{
                      background: `url("https://i.pravatar.cc/300?img=${Math.floor(
                        Math.random() * 20
                      )}")`,
                      order: ind + 1,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                    }}
                  ></div>
                ))}
              {Footer.isPlus5 && (
                <div className={Style.ccfa_avatar_s} style={{ order: 5 }}>
                  {Footer.plus}
                </div>
              )}
            </div>
            {Footer.isUpload && (
              <div className={Style.ccfa_avatar_icon}>
                <div className={Style.ccfa_iconbg}></div>
              </div>
            )}
          </div>
          {/* _________icon  */}
          <div className={Style.column_content_footer_icons}>
            <div className={`${Style.ccfi_gp} ${Style.ccfi_file}`}>
              <div
                className={`${Style.ccfi_icon} ${Style.ccfi_file_icon}`}
              ></div>
              <div
                className={`${Style.ccfi_no} ${Style.ccfi_file_no}`}
                style={{ color: Footer.text_col }}
              >
                {Footer.text1}
              </div>
            </div>
            <div className={`${Style.ccfi_gp} ${Style.ccfi_msg}`}>
              <div
                className={`${Style.ccfi_icon} ${Style.ccfi_msg_icon}`}
              ></div>
              <div
                className={`${Style.ccfi_no} ${Style.ccfi_msg_icon}`}
                style={{ color: Footer.text_col }}
              >
                {Footer.text2}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Content;
