import React, { useEffect, useState } from "react";

const Profile = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("React Course----");
    }, 1000);

    //This function is called when you unmount your component
    return () => {
      clearInterval(timer);
      console.log("Here you can call anything which has to be cleaned up");
    };
  });
  return (
    <div>
      <h1>Profile Functional Component : {name}</h1>
      <h2>Count : {count} </h2>
      <button
        onClick={() => {
          setCount(1);
          setCount2(1);
        }}
      >
        Count
      </button>
    </div>
  );
};

export default Profile;
