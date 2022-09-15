import React from "react";
import stylecss from "./VoxitechBlogPage.module.css";
import sliderImage1 from "../../images/1.jpg";
import backgroundImg1 from "../../images/2.jpg";
import backgroundImg2 from "../../images/3.jpg";
import backgroundImg3 from "../../images/4.jpg";
import backgroundImg4 from "../../images/5.jpg";
import backgroundImg5 from "../../images/6.jpg";
import backgroundImage1 from "../../images/background3.jpg";
import backgroundImage2 from "../../images/background1.jpg";
import backgroundImage3 from "../../images/background4.jpg";
import backgroundImage4 from "../../images/background5.jpg";
import backgroundImage6 from "../../images/background7.jpg";
import mousescrollGif from "../../images/mousescroll.gif";
import roboot1 from "../../images/roboot1.gif";
import { FaRegCommentDots, FaRegHeart } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdArrowForwardIos } from "react-icons/md";
import { MdFilterList } from "react-icons/md";
import VoxitechBlogPageBody from "./VoxitechBlogPageBody";

const VoxitechBlogPage = () => {
  return (
    <div className={stylecss.BlogContainer}>
      <div
        className={`${stylecss.BlogGridContainer} ${stylecss.BlogGridContainer_1}`}
      >
        <div className={stylecss.SliderImage}>
          <img src={sliderImage1} alt="" />
        </div>
        <div className={stylecss.SliderImageDeatils}>
          <p className={stylecss.welcomeTitle}>Welcome to Our</p>
          <h2 className={stylecss.UpperBlog}>
            Blog <span></span>
          </h2>
          <img className={stylecss.robootgif} src={roboot1} alt="" />
        </div>
        <div className={stylecss.SliderImageDeatils2}>
          <p className={stylecss.sliderDate}>07 JUL 2022</p>
          <img className={stylecss.MouseScroll} src={mousescrollGif} alt="" />
        </div>
        <div className={stylecss.BlogTitleAndSearch}>
          <div className={stylecss.DivBlogTitle}>
            <h1 className={stylecss.BlogTitle}>Blog Articles</h1>
          </div>

          <div className={stylecss.SearchAndMenu}>
            <form action="">
              <input
                className={stylecss.searchbox}
                type="text"
                placeholder="Search.."
                name="search"
              />
            </form>
          </div>
          <MdFilterList className={stylecss.fisearchIcon} type="button" />
        </div>
        <div className={stylecss.BlogTags}>
          <div className={stylecss.divBlogTagsTitle}>
            <h3 className={stylecss.BlogTagsTitle}>Sugessions</h3>
          </div>

          <ul className={stylecss.TagsList}>
            <button className={stylecss.btn}>All</button>
            <button className={stylecss.btn}> Technologies</button>
            <button className={stylecss.btn}>News</button>
            <button className={stylecss.btn}>Trends</button>
            <button className={stylecss.btn}> Technologies</button>
            <button className={stylecss.btn}>News</button>
            <button className={stylecss.btn}>Trends</button>
          </ul>
        </div>
      </div>

      <VoxitechBlogPageBody
        BlogGridContainerProps="BlogGridContainer_2"
        BlogCardImage1Props={backgroundImg1}
        TrendsTitleProps="Technology | Trends"
        CardDetailsRightDate1Props="CardDetailsRightDate1"
        CardDetailsRightDateProps="06 JUL 22"
        CardDetailsMiddleTitleProps="System Changes"
        CardDetailsMiddleNameProps="Jane Smith"
        CardDetailsMiddleDetailsPrps=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua."
        LikeCountPrps="600"
        CommentCountPrps="50"
      />
      <VoxitechBlogPageBody
        BlogGridContainerProps="BlogGridContainer_3"
        BlogCardImage1Props={backgroundImg2}
        TrendsTitleProps="Technology | Trends"
        CardDetailsRightDate1Props="CardDetailsRightDate"
        CardDetailsRightDateProps="06 JUL 22"
        CardDetailsMiddleTitleProps="System Changes"
        CardDetailsMiddleNameProps="Jane Smith"
        CardDetailsMiddleDetailsPrps=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua."
        LikeCountPrps="600"
        CommentCountPrps="50"
      />
      <VoxitechBlogPageBody
        BlogGridContainerProps="BlogGridContainer_4"
        BlogCardImage1Props={backgroundImg3}
        TrendsTitleProps="Technology | Trends"
        CardDetailsRightDate1Props="CardDetailsRightDate"
        CardDetailsRightDateProps="06 JUL 22"
        CardDetailsMiddleTitleProps="System Changes"
        CardDetailsMiddleNameProps="Jane Smith"
        CardDetailsMiddleDetailsPrps=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua."
        LikeCountPrps="600"
        CommentCountPrps="50"
      />
      <VoxitechBlogPageBody
        BlogGridContainerProps="BlogGridContainer_5"
        BlogCardImage1Props={backgroundImg4}
        TrendsTitleProps="Technology | Trends"
        CardDetailsRightDate1Props="CardDetailsRightDate1"
        CardDetailsRightDateProps="06 JUL 22"
        CardDetailsMiddleTitleProps="System Changes"
        CardDetailsMiddleNameProps="Jane Smith"
        CardDetailsMiddleDetailsPrps=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua."
        LikeCountPrps="600"
        CommentCountPrps="50"
      />
      <VoxitechBlogPageBody
        BlogGridContainerProps="BlogGridContainer_2"
        BlogCardImage1Props={backgroundImg5}
        TrendsTitleProps="Technology | Trends"
        CardDetailsRightDate1Props="CardDetailsRightDate1"
        CardDetailsRightDateProps="06 JUL 22"
        CardDetailsMiddleTitleProps="System Changes"
        CardDetailsMiddleNameProps="Jane Smith"
        CardDetailsMiddleDetailsPrps=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua."
        LikeCountPrps="600"
        CommentCountPrps="50"
      />
      <VoxitechBlogPageBody
        BlogGridContainerProps="BlogGridContainer_3"
        BlogCardImage1Props={sliderImage1}
        TrendsTitleProps="Technology | Trends"
        CardDetailsRightDate1Props="CardDetailsRightDate"
        CardDetailsRightDateProps="06 JUL 22"
        CardDetailsMiddleTitleProps="System Changes"
        CardDetailsMiddleNameProps="Jane Smith"
        CardDetailsMiddleDetailsPrps=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua."
        LikeCountPrps="600"
        CommentCountPrps="50"
      />
    </div>
  );
};

export default VoxitechBlogPage;
