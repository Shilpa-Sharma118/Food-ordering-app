import { Title } from "./Title";
import { useState } from "react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <span>About</span>
        <span>Support</span>
        <span>Cart</span>
        {isLoggedIn ? (
          <button className="log-btn" onClick={() => setIsLoggedIn(false)}>
            {" "}
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
