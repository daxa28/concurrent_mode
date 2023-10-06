import React from "react";
import useGetData from "./useGetData";

function Posts() {
  const data = useGetData("https://jsonplaceholder.typicode.com/posts?_limit=3");

  return (
    <div className="block">
      {data &&
        data.map((post) => (
          <div key={post.id}>
            <h2>{post.id}. {post.title}</h2>
          </div>
        ))}
    </div>
  );
}

export default Posts;
