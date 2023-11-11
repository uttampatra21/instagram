import React, { useContext, useRef } from "react";
import { PostList } from "../Store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const fileElement = useRef();
  const userImageElement = useRef();
  const nameElement = useRef();
  const userIdElement = useRef();

  const handelSubmit = (e) => {
    e.preventDefault();

    const file = fileElement.current.value;
    const userImg = userImageElement.current.value;
    const name = nameElement.current.value;
  };
  return (
    <div>
      <br />
      <br />
      <form onSubmit={handelSubmit}>
        <div className="user-id">
          <input ref={fileElement} className="" type="file" />
          <span>Select from Computer </span>
        </div>
        <br />
        <div className="user-id">
          <input ref={userImageElement} className="" type="file" />
          <span>Select user's Image </span>
        </div>
        <div className="name">
          <input type="text" ref={nameElement} />
          <span>Enter Your Name</span>
        </div>
        <br />
        <div className="user-id">
          <input type="text" ref={userIdElement} />
          <span>Enter Your User ID</span>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};
export default CreatePost;
