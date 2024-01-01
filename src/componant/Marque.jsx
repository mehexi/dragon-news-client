import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Marque = () => {
    const [post, setPost] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/posts")
            .then(res => res.json())
        .then(data=>setPost(data))
    }, [])

    const tradingPost = post.filter(post=>post.others_info && post.others_info.is_trending === true)
    // console.log(tradingPost)

  return (
    <div className="flex mx-[120px] justify-center align-middle bg-slate-100 p-3 rounded gap-3">
      <button className="px-6 py-3 bg-red-500 rounded text-white">
        latest
      </button>

      <Marquee gradient gradientColor="[222,222,222], [255,255,255], [222,222,222]" pauseOnHover>
              {
                  tradingPost.map(i => (
                      <div key={Math.random()} className="flex gap-3 ml-3">
                          <h1>{i.title}</h1>
                          <span>|</span>
                      </div>
                  ))
        }
      </Marquee>
    </div>
  );
};

export default Marque;
