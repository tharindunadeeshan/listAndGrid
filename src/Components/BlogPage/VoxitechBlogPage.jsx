import React from "react";
import "./VoxitechBlogPage.css";
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

const VoxitechBlogPage = () => {
  return (
    <div className="BlogContainer">
      <div className="BlogGridContainer BlogGridContainer-1">
        <div className="SliderImage">
          <img src={sliderImage1} alt="" />
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
          <MdFilterList className="fisearchIcon" type="button" />
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
            <button className="btn">News</button>
            <button className="btn">Trends</button>
          </ul>
        </div>
      </div>

      <div className="BlogGridContainer BlogGridContainer-2">
        <div className="BlogCardImage1">
          <img src={backgroundImg1} alt="" />
        </div>
        <div className="backgroundblur"></div>
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
            cursor="pointer"
          />
          <span className="LikeCount">600</span>
          <span></span>
          <FaRegCommentDots
            className="icon"
            style={{ marginRight: "10px" }}
            size="17px"
            color="white"
            cursor="pointer"
          />{" "}
          <span className="CommentCount">50</span>
        </div>
      </div>
      <div className="BlogGridContainer BlogGridContainer-3">
        <div className="BlogCardImage1">
          <img src={backgroundImg2} alt="" />
        </div>
        <div className="backgroundblur"></div>
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
            cursor="pointer"
          />
          <span className="LikeCount">600</span>
          <span></span>
          <FaRegCommentDots
            className="icon"
            style={{ marginRight: "6px" }}
            size="17px"
            color="white"
            cursor="pointer"
          />{" "}
          <span className="CommentCount">50</span>
        </div>
      </div>
      <div className="BlogGridContainer BlogGridContainer-4">
        <div className="BlogCardImage1">
          <img src={backgroundImg4} alt="" />
        </div>
        <div className="backgroundblur"></div>
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
            cursor="pointer"
          />
          <span className="LikeCount">600</span>
          <span></span>
          <FaRegCommentDots
            className="icon"
            style={{ marginRight: "6px" }}
            size="17px"
            color="white"
            cursor="pointer"
          />{" "}
          <span className="CommentCount">50</span>
        </div>
      </div>
      <div className="BlogGridContainer BlogGridContainer-5">
        <div className="BlogCardImage1">
          <img src={backgroundImg3} alt="" />
        </div>
        <div className="backgroundblur"></div>
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
            cursor="pointer"
          />
          <span className="LikeCount">600</span>
          <span></span>
          <FaRegCommentDots
            className="icon"
            style={{ marginRight: "6px" }}
            size="17px"
            color="white"
            cursor="pointer"
          />{" "}
          <span className="CommentCount">50</span>
        </div>
      </div>
      <div className="BlogGridContainer BlogGridContainer-6">
        <div className="BlogCardImage1">
          <img src={backgroundImg5} alt="" />
        </div>
        <div className="backgroundblur"></div>
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
            cursor="pointer"
          />
          <span className="LikeCount">600</span>
          <span></span>
          <FaRegCommentDots
            className="icon"
            style={{ marginRight: "6px" }}
            size="17px"
            color="white"
            cursor="pointer"
          />{" "}
          <span className="CommentCount">50</span>
        </div>
      </div>
      <div className="BlogGridContainer BlogGridContainer-7">
        <div className="BlogCardImage1">
          <img src={backgroundImg5} alt="" />
        </div>
        <div className="backgroundblur"></div>
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
            cursor="pointer"
          />
          <span className="LikeCount">600</span>
          <span></span>
          <FaRegCommentDots
            className="icon"
            style={{ marginRight: "6px" }}
            size="17px"
            color="white"
            cursor="pointer"
          />{" "}
          <span className="CommentCount">50</span>
        </div>
      </div>
    </div>
  );
};

export default VoxitechBlogPage;
