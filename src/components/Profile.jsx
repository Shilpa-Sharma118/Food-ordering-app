import React, { useState } from "react";

const Profile = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);
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
