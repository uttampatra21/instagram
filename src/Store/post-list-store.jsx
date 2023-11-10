import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePostList: () => {},
});

const postListReducer = (currentPost, action) => {
  return currentPost;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatachPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};

  const deletePost = () => {};

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    video: "https://cdn.cuberto.com/cb/projects/qvino/cover.mp4",
    userImage: "https://avatars.githubusercontent.com/u/108145016?v=4",
    name: "Diya",
    userId: "user_09",
    reaction: "123",
  },
  {
    id: "2",
    video: "https://cdn.cuberto.com/cb/showreel/1.mp4",
    userImage:
      "https://anuraggharat.vercel.app/_next/image?url=%2Fimages%2Fanurag.jpg&w=256&q=75",
    name: "uttam",
    userId: "user_19",
    reaction: "99",
  },
];

export default PostListProvider;
