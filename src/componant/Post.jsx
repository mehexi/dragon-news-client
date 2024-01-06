import React from "react";
import { FaBookmark, FaShare, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Post = (props) => {
  const { author, title, image_url, details, rating,_id } = props.post;

  const postDetails = details.slice(0, 350);

  const ratingArray = [];
  const filledStars = rating.number;

  for (let i = 1; i <= 5; i++) {
    ratingArray.push(i <= filledStars ? 1 : 0);
  }

  return (
    <>
      <div className="border rounded">
        {/* aurthor title  */}
        <div className="flex justify-between bg-slate-100 px-6 py-3 items-center">
          <div className="flex gap-3">
            <img className="rounded-full w-12" src={author.img} alt="" />
            <div>
              <h1 className="font-semibold">{author.name}</h1>
              <h1 className="text-sm text-gray-400">{author.published_date}</h1>
            </div>
          </div>
          <div className="flex gap-3">
            <FaBookmark></FaBookmark>
            <FaShare></FaShare>
          </div>
        </div>
        {/* aurtor title ends */}
        <div className="p-6 flex flex-col gap-3">
          <h1 className="text-2xl font-semibold max-w-[80%]">{title}</h1>
          <div className="flex flex-col gap-3">
            <img className="w-full" src={image_url} alt="" />
            <p>
              {postDetails}...{" "}
              <Link to={_id}>
                <span className="underline text-blue-400">read more</span>
                </Link>
            </p>
          </div>
        </div>
        <div className="border px-6 py-3">
          {/* Render the star rating */}
          <div className="flex gap-1 items-center">
            {ratingArray.map((isFilled, index) => (
              <FaStar
                className={isFilled ? "text-orange-300" : "text-orange-300/20"}
                key={index}
              />
            ))}
            <h1 className="text-sm ml-2">{rating.number}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
