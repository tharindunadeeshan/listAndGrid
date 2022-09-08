import React from "react";
import "./BlogPage.css";
import avatar1 from "../../images/background1.jpg";

const BlogPage = () => {
  return (
    <div className="Blog-Grid-Container">
      <div className="items item-1">
        <div className="item-1-1">
          <img src={avatar1} alt="" />
        </div>
        <div className="details2">
          <h2>item 1</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
            obcaecati.
          </p>
        </div>
      </div>

      <div className="items item-2">
        <h2>item 2</h2>
        <p>A non officia sed. Fugiat enim sapiente numquam sint voluptatum!</p>
      </div>
      <div className="items item-3">
        <h2>item 3</h2>
        <p>
          Maxime nemo rerum aliquid cupiditate repudiandae? Ducimus quam
          reprehenderit enim?
        </p>
      </div>
      <div className="items item-4">
        <h2>item 4</h2>
        <p>
          Accusantium quaerat animi velit iste debitis culpa asperiores labore
          voluptates.
        </p>
      </div>
      <div className="items item-5">
        <h2>item 5</h2>
        <p>Recusandae laudantium ea cum sed itaque at non dolorum corporis.</p>
      </div>
      <div className="items item-6">
        <h2>item 6</h2>
        <p>
          Commodi ut nobis accusantium magni! Accusamus minus nemo beatae optio!
        </p>
      </div>
      <div className="items item-7">
        <h2>item 7</h2>
        <p>In aut ex, dolorem ipsum vel officiis ducimus doloremque? Soluta!</p>
      </div>
      <div className="items item-8">
        <h2>item 8</h2>
        <p>Qui tempora amet autem ex minus. Possimus rem nesciunt quaerat.</p>
      </div>
      <div className="items item-9">
        <h2>item 9</h2>
        <p>
          Eveniet quia mollitia vitae reprehenderit eligendi, illo accusamus ad
          labore.
        </p>
      </div>
    </div>
  );
};

export default BlogPage;
