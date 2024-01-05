import React, { useContext, useEffect, useState } from "react";
import Post from "../../componant/Post";
import NavSm from "./NavSm";



const PostContainer = ({selectedCatagory}) => { 
  const [posts, setPosts] = useState([]);
  const [catagory, setCatagory] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/catagories")
      .then((res) => res.json())
      .then((data) => setCatagory(data))
      .catch((error) => console.log(error));
  },[])

  const filteredPosts = selectedCatagory !=="0"
  ? posts.filter((post) => post.category_id === selectedCatagory)
    : posts;
  
    const categoryName = selectedCatagory !== '0'
    ? catagory.find((category) => category.id === selectedCatagory)?.name
    : 'All News';
  

  console.log(filteredPosts);
  console.log(categoryName)

  return (
    <>
      
      <h1 className="text-xl font-semibold mb-3"> {categoryName}: {filteredPosts.length}</h1>
      <div className="flex flex-col gap-3">
        {
          filteredPosts.map((post) => <Post key={post._id} post={post}></Post>)
        }
      </div>
    </>
  );
};

export default PostContainer;
