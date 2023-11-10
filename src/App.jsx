import FriendList from "./components/FriendList";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div id="main" className="grid">
        <Sidebar />
        <Home />
        <FriendList />
      </div>
    </>
  );
}

export default App;
