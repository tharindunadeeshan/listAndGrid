import React from "react";
import "./VoxitechBlogPage.css";
import sliderImage1 from "../../images/background2.png";
import backgroundImage1 from "../../images/background3.jpg";
import backgroundImage2 from "../../images/background1.jpg";
import backgroundImage3 from "../../images/background4.jpg";
import backgroundImage4 from "../../images/background5.jpg";
import backgroundImage6 from "../../images/background7.jpg";
import mousescrollGif from "../../images/mousescroll.gif";
import roboot1 from "../../images/roboot1.gif";
import { FaRegCommentDots, FaRegHeart } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdArrowForwardIos } from "react-icons/md";
import { FiAlignJustify } from "react-icons/fi";

const VoxitechBlogPage = () => {
  return (
    <div className="BlogContainer">
      <div className="BlogGridContainer BlogGridContainer-1">
        <div className="SliderImage">
          <img src={backgroundImage4} alt="" />
        </div>
        <div className="SliderImageDeatils">
          <p className="welcomeTitle">Welcome to Our</p>
          <h2 className="UpperBlog">
            Blog <span></span>
          </h2>
          <img className="robootgif" src={roboot1} alt="" />
        </div>
        <div className="SliderImageDeatils2">
          <p className="sliderDate">07 JUL 2022</p>
          <img className="MouseScroll" src={mousescrollGif} alt="" />
        </div>
        <div className="BlogTitleAndSearch">
          <div className="DivBlogTitle">
            <h1 className="BlogTitle">Blog Articles</h1>
          </div>

          <div className="SearchAndMenu">
            <form action="">
              <input
                className="searchbox"
                type="text"
                placeholder="Search.."
                name="search"
              />
            </form>
          </div>
          <FiAlignJustify className="fisearchIcon" type="button" />
        </div>
        <div className="BlogTags">
          <div className="divBlogTagsTitle">
            <h3 className="BlogTagsTitle">Sugessions</h3>
          </div>

          <ul className="TagsList">
            <button className="btn">All</button>
            <button className="btn active"> Technologies</button>
            <button className="btn">News</button>
            <button className="btn">Trends</button>
            <button className="btn active"> Technologies</button>
            <button className="btn">All</button>
            <button className="btn">News</button>
            <button className="btn">Trends</button>
          </ul>
        </div>
      </div>

      <div className="BlogGridContainer BlogGridContainer-2">
        <div className="BlogCardImage1">
          <img src={backgroundImage1} alt="" />
        </div>
        <div className="CardDetailsRight">
          <div className="CardDetailsRightVl"></div>
          <p className="CardDetailsRightDate1">06 JUL 22</p>
        </div>
        <div className="CardDetailsMiddle">
          <p className="TrendsTitle">Technology | Trends</p>
          <h3 className="CardDetailsMiddleTitle">Big Data In future</h3>
          <p className="CardDetailsMiddleName">Jane Smith</p>
          <p className="CardDetailsMiddleDetails">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="CommentAndLike">
          <FaRegHeart
            className="icon"
            style={{ marginRight: "10px" }}
            size="17px"
            color="white"
          />
          <span className="LikeCount">600</span>
          <span></span>
          <FaRegCommentDots
            className="icon"
            style={{ marginRight: "10px" }}
            size="17px"
            color="white"
          />{" "}
          <span className="CommentCount">50</span>
        </div>
      </div>
      <div className="BlogGridContainer BlogGridContainer-3">
        <div className="BlogCardImage1">
          <img src={backgroundImage2} alt="" />
        </div>
        <div className="CardDetailsRight">
          <div className="CardDetailsRightVl"></div>
          <p className="CardDetailsRightDate">06 JUL 22</p>
        </div>
        <div className="CardDetailsMiddle">
          <p className="TrendsTitle">Technology | Trends</p>
          <h3 className="CardDetailsMiddleTitle">System Changes</h3>
          <p className="CardDetailsMiddleName">Jane Smith</p>
          <p className="CardDetailsMiddleDetails">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="CommentAndLike">
          <FaRegHeart
            className="icon"
            style={{ marginRight: "6px" }}
            size="17px"
            color="white"
          />
          <span className="LikeCount">600</span>
          <span></span>
          <FaRegCommentDots
            className="icon"
            style={{ marginRight: "6px" }}
            size="17px"
            color="white"
          />{" "}
          <span className="CommentCount">50</span>
        </div>
      </div>
      <div className="BlogGridContainer BlogGridContainer-4">
        <div className="BlogCardImage1">
          <img src={backgroundImage3} alt="" />
        </div>
        <div className="CardDetailsRight">
          <div className="CardDetailsRightVl"></div>
          <p className="CardDetailsRightDate">06 JUL 22</p>
        </div>
        <div className="CardDetailsMiddle">
          <p className="TrendsTitle">Technology | Trends</p>
          <h3 className="CardDetailsMiddleTitle">Artificial Inteligence</h3>
          <p className="CardDetailsMiddleName">Jane Smith</p>
          <p className="CardDetailsMiddleDetails">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="CommentAndLike">
          <FaRegHeart
            className="icon"
            style={{ marginRight: "6px" }}
            size="17px"
            color="white"
          />
          <span className="LikeCount">600</span>
          <span></span>
          <FaRegCommentDots
            className="icon"
            style={{ marginRight: "6px" }}
            size="17px"
            color="white"
          />{" "}
          <span className="CommentCount">50</span>
        </div>
      </div>
      <div className="BlogGridContainer BlogGridContainer-5">
        <div className="BlogCardImage1">
          <img src={backgroundImage4} alt="" />
        </div>
        <div className="CardDetailsRight">
          <div className="CardDetailsRightVl"></div>
          <p className="CardDetailsRightDate1">06 JUL 22</p>
        </div>
        <div className="CardDetailsMiddle">
          <p className="TrendsTitle">System Changes</p>
          <h3 className="CardDetailsMiddleTitle">Big Data In future</h3>
          <p className="CardDetailsMiddleName">Jane Smith</p>
          <p className="CardDetailsMiddleDetails">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="CommentAndLike">
          <FaRegHeart
            className="icon"
            style={{ marginRight: "6px" }}
            size="17px"
            color="white"
          />
          <span className="LikeCount">600</span>
          <span></span>
          <FaRegCommentDots
            className="icon"
            style={{ marginRight: "6px" }}
            size="17px"
            color="white"
          />{" "}
          <span className="CommentCount">50</span>
        </div>
      </div>
      <div className="BlogGridContainer BlogGridContainer-6">
        <div className="BlogCardImage1">
          <img src={backgroundImage4} alt="" />
        </div>
        <div className="CardDetailsRight">
          <div className="CardDetailsRightVl"></div>
          <p className="CardDetailsRightDate1">06 JUL 22</p>
        </div>
        <div className="CardDetailsMiddle">
          <p className="TrendsTitle">Technology | Trends</p>
          <h3 className="CardDetailsMiddleTitle">Big Data In future</h3>
          <p className="CardDetailsMiddleName">Jane Smith</p>
          <p className="CardDetailsMiddleDetails">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="CommentAndLike">
          <FaRegHeart
            className="icon"
            style={{ marginRight: "6px" }}
            size="17px"
            color="white"
          />
          <span className="LikeCount">600</span>
          <span></span>
          <FaRegCommentDots
            className="icon"
            style={{ marginRight: "6px" }}
            size="17px"
            color="white"
          />{" "}
          <span className="CommentCount">50</span>
        </div>
      </div>
      <div className="BlogGridContainer BlogGridContainer-7">
        <div className="BlogCardImage1">
          <img src={backgroundImage6} alt="" />
        </div>
        <div className="CardDetailsRight">
          <div className="CardDetailsRightVl"></div>
          <p className="CardDetailsRightDate">06 JUL 22</p>
        </div>
        <div className="CardDetailsMiddle">
          <p className="TrendsTitle">Technology | Trends</p>
          <h3 className="CardDetailsMiddleTitle">Big Data In future</h3>
          <p className="CardDetailsMiddleName">Jane Smith</p>
          <p className="CardDetailsMiddleDetails">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="CommentAndLike">
          <FaRegHeart
            className="icon"
            style={{ marginRight: "6px" }}
            size="17px"
            color="white"
          />
          <span className="LikeCount">600</span>
          <span></span>
          <FaRegCommentDots
            className="icon"
            style={{ marginRight: "6px" }}
            size="17px"
            color="white"
          />{" "}
          <span className="CommentCount">50</span>
        </div>
      </div>
      <div className="BlogGridContainer BlogGridContainer-8">
        <div className="logGridContainerArrow">
          <MdKeyboardArrowLeft
            className="LeftArrow"
            style={{ marginRight: "6px" }}
            size="30px"
          />
          <span className="ArroNum1">01</span>
          <MdArrowForwardIos
            className="RightArrow"
            style={{ marginRight: "6px" }}
            size="32px"
            color="white"
          />
          <span className="ArroNum2">02</span>
        </div>
      </div>
    </div>
  );
};

export default VoxitechBlogPage;
