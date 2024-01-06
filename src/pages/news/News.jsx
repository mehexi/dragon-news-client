import React from "react";
import { useLoaderData } from "react-router-dom";
import NavChildren from "../../componant/NavChildren";
import Social from "../sheard/sidenavs/Social";
import Nav from "../sheard/nav";

const News = () => {
    const post = useLoaderData();
    console.log(post)
  const { author, details, image_url, thumbnail_url,title } = post;

  return (
    <>
     <Nav></Nav>
      <section className="mt-[20px] mx-[120px]">
        <div className="mt-[50px] grid grid-cols-5 gap-6">
          <div className="col-span-4 flex flex-col gap-6 p-6 rounded border">
                      <img src={image_url} alt="" />
                      <div className="flex flex-col gap-3">
                          <h3 className="text-2xl font-semibold">{title}</h3>
                          <h1>{details}</h1>
                      </div>
          </div>
          <div>
            <Social></Social>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
