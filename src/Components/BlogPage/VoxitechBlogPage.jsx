import React from "react";
import "./VoxitechBlogPage.css";
import sliderImage1 from "../../images/background2.png";
import backgroundImage1 from "../../images/background3.jpg";
import backgroundImage2 from "../../images/background1.jpg";
import backgroundImage3 from "../../images/background4.jpg";
import backgroundImage4 from "../../images/background5.jpg";
import backgroundImage6 from "../../images/background7.jpg";
import { FaRegCommentDots, FaRegHeart } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdArrowForwardIos } from "react-icons/md";

const VoxitechBlogPage = () => {
  return (
    <div className="BlogContainer">
      <div className="BlogGridContainer BlogGridContainer-1">
        <div className="SliderImage">
          <img src={sliderImage1} alt="" />
        </div>
        <div className="SliderImageDeatils">
          <h2>BlogContainer-1</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            alias!
          </p>
        </div>
        <div className="BlogTitleAndSearch">
          <h1>Blogs</h1>
        </div>
        <div className="BlogTags">
          <h3>Sugges</h3>
          <ul className="TagsList">
            <ul-tagItems-1>
              <button>All</button>
              <button>All</button>
              <button>All</button>
              <button>All</button>
              <button>All</button>
            </ul-tagItems-1>
          </ul>
        </div>
      </div>
      <div className="BlogGridContainer BlogGridContainer-2">
        <div className="BlogCardImage1">
          <img src={backgroundImage1} alt="" />
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

          <div className="CommentAndLike">
            <FaRegHeart
              className="icon"
              style={{ marginRight: "6px" }}
              size="17px"
              color="white"
            />
            <span>600</span>
            <span></span>
            <FaRegCommentDots
              className="icon"
              style={{ marginRight: "6px" }}
              size="17px"
              color="white"
            />{" "}
            <span>50</span>
          </div>
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
          <h3 className="CardDetailsMiddleTitle">Big Data In future</h3>
          <p className="CardDetailsMiddleName">Jane Smith</p>
          <p className="CardDetailsMiddleDetails">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="CommentAndLike">
            <FaRegHeart
              className="icon"
              style={{ marginRight: "6px" }}
              size="17px"
              color="white"
            />
            <span>600</span>
            <span></span>
            <FaRegCommentDots
              className="icon"
              style={{ marginRight: "6px" }}
              size="17px"
              color="white"
            />{" "}
            <span>50</span>
          </div>
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
          <h3 className="CardDetailsMiddleTitle">Big Data In future</h3>
          <p className="CardDetailsMiddleName">Jane Smith</p>
          <p className="CardDetailsMiddleDetails">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="CommentAndLike">
            <FaRegHeart
              className="icon"
              style={{ marginRight: "6px" }}
              size="17px"
              color="white"
            />
            <span>600</span>
            <span></span>
            <FaRegCommentDots
              className="icon"
              style={{ marginRight: "6px" }}
              size="17px"
              color="white"
            />{" "}
            <span>50</span>
          </div>
        </div>
      </div>
      <div className="BlogGridContainer BlogGridContainer-5">
        <div className="BlogCardImage1">
          <img src={backgroundImage4} alt="" />
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

          <div className="CommentAndLike">
            <FaRegHeart
              className="icon"
              style={{ marginRight: "6px" }}
              size="17px"
              color="white"
            />
            <span>600</span>
            <span></span>
            <FaRegCommentDots
              className="icon"
              style={{ marginRight: "6px" }}
              size="17px"
              color="white"
            />{" "}
            <span>50</span>
          </div>
        </div>
      </div>
      <div className="BlogGridContainer BlogGridContainer-6">
        <div className="BlogCardImage1">
          <img src={backgroundImage4} alt="" />
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

          <div className="CommentAndLike">
            <FaRegHeart
              className="icon"
              style={{ marginRight: "6px" }}
              size="17px"
              color="white"
            />
            <span>600</span>
            <span></span>
            <FaRegCommentDots
              className="icon"
              style={{ marginRight: "6px" }}
              size="17px"
              color="white"
            />{" "}
            <span>50</span>
          </div>
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

          <div className="CommentAndLike">
            <FaRegHeart
              className="icon"
              style={{ marginRight: "6px" }}
              size="17px"
              color="white"
            />
            <span>600</span>
            <span></span>
            <FaRegCommentDots
              className="icon"
              style={{ marginRight: "6px" }}
              size="17px"
              color="white"
            />{" "}
            <span>50</span>
          </div>
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
