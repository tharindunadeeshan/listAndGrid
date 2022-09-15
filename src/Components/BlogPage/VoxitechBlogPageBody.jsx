import React from "react";
import stylecss from "./VoxitechBlogPage.module.css";
import sliderImage1 from "../../images/1.jpg";
import { FaRegCommentDots, FaRegHeart } from "react-icons/fa";
const VoxitechBlogPageBody = (props) => {
  return (
    <div
      className={`${stylecss.BlogGridContainer} ${
        stylecss[props.BlogGridContainerProps]
      }`}
    >
      <div className={stylecss.BlogCardImage1}>
        <img src={props.BlogCardImage1Props} alt="" />
      </div>
      <div className={stylecss.backgroundblur}></div>
      <div className={stylecss.CardDetailsRight}>
        <div className={stylecss.CardDetailsRightVl}></div>
        <p className={stylecss[props.CardDetailsRightDate1Props]}>
          {props.CardDetailsRightDateProps}
        </p>
      </div>
      <div className={stylecss.CardDetailsMiddle}>
        <p className={stylecss.TrendsTitle}>{props.TrendsTitleProps}</p>
        <h3 className={stylecss.CardDetailsMiddleTitle}>
          {props.CardDetailsMiddleTitleProps}
        </h3>
        <p className={stylecss.CardDetailsMiddleName}>
          {props.CardDetailsMiddleNameProps}
        </p>
        <p className={stylecss.CardDetailsMiddleDetails}>
          {props.CardDetailsMiddleDetailsPrps}
        </p>
      </div>
      <div className={stylecss.CommentAndLike}>
        <FaRegHeart
          className={stylecss.icon}
          style={{ marginRight: "6px" }}
          size="17px"
          color="white"
          cursor="pointer"
        />
        <span className={stylecss.LikeCount}>{props.LikeCountPrps}</span>
        <span></span>
        <FaRegCommentDots
          className={stylecss.icon}
          style={{ marginRight: "6px" }}
          size="17px"
          color="white"
          cursor="pointer"
        />{" "}
        <span className={stylecss.CommentCount}>{props.CommentCountPrps}</span>
      </div>
    </div>
  );
};

export default VoxitechBlogPageBody;
