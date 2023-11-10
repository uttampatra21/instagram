import React from "react";
import Status from "./Status";

const Home = () => {
  return (
    <div className="p-2 overflow-auto">
      <Status />
      <div id="posts">
        <div id="profile-det">
          <img
            className="w-20 h-20 rounded-full object-cover"
            src="https://image.lexica.art/md2/01b03176-4821-4780-94ba-0cf1c56cb322"
            alt=""
          />
        </div>
      </div>
      <div id="posts"></div>
    </div>
  );
};

export default Home;
