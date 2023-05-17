import { Title } from "./Title";
import { useState } from "react";
import Logo from "../assets/img/foodVilla.jpeg";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex space-x-1.5 justify-between border-4 border-black p-2 bg-pink-100">
      <Title image={Logo} />
      <div className="flex items-center space-x-1.5 ">
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="/about">About</Link>
        </span>
        <span>
          <Link to="/contact">Contact</Link>
        </span>
        <span>Cart</span>
        <span>
          <Link to="/instamart">Instamart</Link>
        </span>
        {isLoggedIn ? (
          <button className="log-btn" onClick={() => setIsLoggedIn(false)}>
            Logout
          </button>
        ) : (
          <button className="log-btn" onClick={() => setIsLoggedIn(true)}>
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
