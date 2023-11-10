import React, { useContext, useState } from "react";
import PostList from "./PostList";
import { PostList as postData } from "../Store/post-list-store";
const Home = () => {
  const { postList } = useContext(postData);
  console.log(postList);
  return (
    <div className="p-2 overflow-auto">
      <div
        id="media-posts"
        className="flex gap-16 flex-col w-full items-center justify-center"
      >
        {postList.map((x) => (
          <PostList key={x.id} data={x} />
        ))}
      </div>
    </div>
  );
};

export default Home;
