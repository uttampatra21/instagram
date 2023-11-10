import React from "react";

const Status = () => {
  let status = [
    {
      id: 1,
      img: "https://images.thewest.com.au/publication/B881277462Z/1566190988593_GO82BBQ7C.2-0.jpg?imwidth=810&impolicy=wan_v3",
    },
    {
      img: "https://images.thewest.com.au/publication/B881277462Z/1566190988593_GO82BBQ7C.2-0.jpg?imwidth=810&impolicy=wan_v3",
    },
    {
      id: 2,
      img: "https://images.thewest.com.au/publication/B881277462Z/1566190988593_GO82BBQ7C.2-0.jpg?imwidth=810&impolicy=wan_v3",
    },
    {
      id: 3,
      img: "https://images.thewest.com.au/publication/B881277462Z/1566190988593_GO82BBQ7C.2-0.jpg?imwidth=810&impolicy=wan_v3",
    }
  ];

  console.log(status.length);
  return (
    <div className="flex gap-2">
      {status.map((x) => {
        return (
          <div>
            <img className="rounded-full h-20 w-20 object-cover" src={x.img} />
          </div>
        );
      })}
    </div>
  );
};

export default Status;
