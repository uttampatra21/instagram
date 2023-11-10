import { useState } from "react";
import FriendList from "./components/FriendList";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import Sidebar from "./components/Sidebar";
import PostListProvider from "./Store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div id="main" className="grid">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        {selectedTab === "Home" ? <Home /> : <CreatePost />}
        <FriendList />
      </div>
    </PostListProvider>
  );
}

export default App;
