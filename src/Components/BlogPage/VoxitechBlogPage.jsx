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

      <div
        className={`${stylecss.BlogGridContainer} ${stylecss.BlogGridContainer_2}`}
      >
        <div className={stylecss.BlogCardImage1}>
          <img src={backgroundImg1} alt="" />
        </div>
        <div className={stylecss.backgroundblur}></div>

        <div className={stylecss.CardDetailsRight}>
          <div className={stylecss.CardDetailsRightVl}></div>
          <p className={stylecss.CardDetailsRightDate1}>06 JUL 22</p>
        </div>
        <div className={stylecss.CardDetailsMiddle}>
          <p className={stylecss.TrendsTitle}>Technology | Trends</p>
          <p className={stylecss.CardDetailsMiddleName}>Jane Smith</p>
          <h3 className={stylecss.CardDetailsMiddleTitle}>
            Big Data In future
          </h3>
          <p className={stylecss.CardDetailsMiddleDetails}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={stylecss.CommentAndLike}>
          <FaRegHeart
            className={stylecss.icon}
            style={{ marginRight: "10px" }}
            size="17px"
            color="white"
            cursor="pointer"
          />
          <span className={stylecss.LikeCount}>600</span>
          <span></span>
          <FaRegCommentDots
            className={stylecss.icon}
            style={{ marginRight: "10px" }}
            size="17px"
            color="white"
            cursor="pointer"
          />{" "}
          <span className={stylecss.CommentCount}>50</span>
        </div>
      </div>
      <div
        className={`${stylecss.BlogGridContainer} ${stylecss.BlogGridContainer_3}`}
      >
        <div className={stylecss.BlogCardImage1}>
          <img src={backgroundImg2} alt="" />
        </div>
        <div className={stylecss.backgroundblur}></div>
        <div className={stylecss.CardDetailsRight}>
          <div className={stylecss.CardDetailsRightVl}></div>
          <p className={stylecss.CardDetailsRightDate}>06 JUL 22</p>
        </div>
        <div className={stylecss.CardDetailsMiddle}>
          <p className={stylecss.TrendsTitle}>Technology | Trends</p>
          <h3 className={stylecss.CardDetailsMiddleTitle}>System Changes</h3>
          <p className={stylecss.CardDetailsMiddleName}>Jane Smith</p>
          <p className={stylecss.CardDetailsMiddleDetails}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
          <span className={stylecss.LikeCount}>600</span>
          <span></span>
          <FaRegCommentDots
            className={stylecss.icon}
            style={{ marginRight: "6px" }}
            size="17px"
            color="white"
            cursor="pointer"
          />{" "}
          <span className={stylecss.CommentCount}>50</span>
        </div>
      </div>
      <div
        className={`${stylecss.BlogGridContainer} ${stylecss.BlogGridContainer_4}`}
      >
        <div className={stylecss.BlogCardImage1}>
          <img src={backgroundImg4} alt="" />
        </div>
        <div className={stylecss.backgroundblur}></div>
        <div className={stylecss.CardDetailsRight}>
          <div className={stylecss.CardDetailsRightVl}></div>
          <p className={stylecss.CardDetailsRightDate}>06 JUL 22</p>
        </div>
        <div className={stylecss.CardDetailsMiddle}>
          <p className={stylecss.TrendsTitle}>Technology | Trends</p>
          <h3 className={stylecss.CardDetailsMiddleTitle}>System Changes</h3>
          <p className={stylecss.CardDetailsMiddleName}>Jane Smith</p>
          <p className={stylecss.CardDetailsMiddleDetails}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
          <span className={stylecss.LikeCount}>600</span>
          <span></span>
          <FaRegCommentDots
            className={stylecss.icon}
            style={{ marginRight: "6px" }}
            size="17px"
            color="white"
            cursor="pointer"
          />{" "}
          <span className={stylecss.CommentCount}>50</span>
        </div>
      </div>
      <div
        className={`${stylecss.BlogGridContainer} ${stylecss.BlogGridContainer_5}`}
      >
        <div className={stylecss.BlogCardImage1}>
          <img src={backgroundImg3} alt="" />
        </div>
        <div className={stylecss.backgroundblur}></div>
        <div className={stylecss.CardDetailsRight}>
          <div className={stylecss.CardDetailsRightVl}></div>
          <p className={stylecss.CardDetailsRightDate1}>06 JUL 22</p>
        </div>
        <div className={stylecss.CardDetailsMiddle}>
          <p className={stylecss.TrendsTitle}>Technology | Trends</p>
          <h3 className={stylecss.CardDetailsMiddleTitle}>System Changes</h3>
          <p className={stylecss.CardDetailsMiddleName}>Jane Smith</p>
          <p className={stylecss.CardDetailsMiddleDetails}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
          <span className={stylecss.LikeCount}>600</span>
          <span></span>
          <FaRegCommentDots
            className={stylecss.icon}
            style={{ marginRight: "6px" }}
            size="17px"
            color="white"
            cursor="pointer"
          />{" "}
          <span className={stylecss.CommentCount}>50</span>
        </div>
      </div>
      <div
        className={`${stylecss.BlogGridContainer} ${stylecss.BlogGridContainer_6}`}
      >
        <div className={stylecss.BlogCardImage1}>
          <img src={backgroundImg5} alt="" />
        </div>
        <div className={stylecss.backgroundblur}></div>
        <div className={stylecss.CardDetailsRight}>
          <div className={stylecss.CardDetailsRightVl}></div>
          <p className={stylecss.CardDetailsRightDate1}>06 JUL 22</p>
        </div>
        <div className={stylecss.CardDetailsMiddle}>
          <p className={stylecss.TrendsTitle}>Technology | Trends</p>
          <h3 className={stylecss.CardDetailsMiddleTitle}>System Changes</h3>
          <p className={stylecss.CardDetailsMiddleName}>Jane Smith</p>
          <p className={stylecss.CardDetailsMiddleDetails}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
          <span className={stylecss.LikeCount}>600</span>
          <span></span>
          <FaRegCommentDots
            className={stylecss.icon}
            style={{ marginRight: "6px" }}
            size="17px"
            color="white"
            cursor="pointer"
          />{" "}
          <span className={stylecss.CommentCount}>50</span>
        </div>
      </div>
      <div
        className={`${stylecss.BlogGridContainer} ${stylecss.BlogGridContainer_7}`}
      >
        <div className={stylecss.BlogCardImage1}>
          <img src={backgroundImg5} alt="" />
        </div>
        <div className={stylecss.backgroundblur}></div>
        <div className={stylecss.CardDetailsRight}>
          <div className={stylecss.CardDetailsRightVl}></div>
          <p className={stylecss.CardDetailsRightDate}>06 JUL 22</p>
        </div>
        <div className={stylecss.CardDetailsMiddle}>
          <p className={stylecss.TrendsTitle}>Technology | Trends</p>
          <h3 className={stylecss.CardDetailsMiddleTitle}>System Changes</h3>
          <p className={stylecss.CardDetailsMiddleName}>Jane Smith</p>
          <p className={stylecss.CardDetailsMiddleDetails}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
          <span className={stylecss.LikeCount}>600</span>
          <span></span>
          <FaRegCommentDots
            className={stylecss.icon}
            style={{ marginRight: "6px" }}
            size="17px"
            color="white"
            cursor="pointer"
          />{" "}
          <span className={stylecss.CommentCount}>50</span>
        </div>
      </div>
    </div>
  );
};

export default VoxitechBlogPage;
