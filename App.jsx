import React from "react";
import ReactDOM from "react-dom/client";
import "./App.scss";

const Title = () => <h1>Food App</h1>;

/* 
Header
  -logo (title)
  - Nav Items (About Users, Support, ...)
  - Cart
Body
  - Restaurant cards
    - Logo
    - name
    - Type of food
    - Ratings
    - Distance
Footer 
    - Links
    -Copyright
    */

const Header = () => {
  return (
    <div className="header">
      <a href="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/QFC_logo.svg/1200px-QFC_logo.svg.png"
          alt=""
        />
      </a>
      <div className="nav-items">
        <span>About us</span>
        <span>Support</span>
        <span>Login</span>
        <span>Cart</span>
      </div>
    </div>
  );
};

const restrauntData = [
  {
    name: "Burger King",
    image:
      "https://i.pinimg.com/originals/87/75/38/87753891cac680afe6af0a7747ede503.png",
    type: ["American", "Burger"],
    ratings: 4,
  },
  {
    name: "Burger King",
    image:
      "https://i.pinimg.com/originals/87/75/38/87753891cac680afe6af0a7747ede503.png",
    type: ["American", "Burger"],
    ratings: 4,
  },
  {
    name: "Burger King",
    image:
      "https://i.pinimg.com/originals/87/75/38/87753891cac680afe6af0a7747ede503.png",
    type: ["American", "Burger"],
    ratings: 4,
  },
  {
    name: "Burger King",
    image:
      "https://i.pinimg.com/originals/87/75/38/87753891cac680afe6af0a7747ede503.png",
    type: ["American", "Burger"],
    ratings: 4,
  },
];

const Card = ({ restraunt }) => {
  return (
    <div className="card">
      <img src={restraunt.image} alt="" />
      <h2>{restraunt.name}</h2>
      <h3>{restraunt.type.join(", ")}</h3>
      <h4>{restraunt.ratings} stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restraunt-list">
      {restrauntData.map((singleRestraunt) => {
        return <Card restraunt={singleRestraunt} />;
      })}
    </div>
  );
};

const Footer = () => {
  return <div>Footer</div>;
};

const FoodApp = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FoodApp />);
