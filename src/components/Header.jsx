import { Title } from "./Title";
import { useState, useContext } from "react";
import Logo from "../assets/img/foodVilla.jpeg";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
import useOnline from "../utils/useOnline";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { user } = useContext(userContext);

  const cartItems = useSelector((store) => store.cart.items);

  const isOnline = useOnline();

  console.log("cart-Item", cartItems);

  return (
    <div className="flex space-x-1.5 justify-between border-2 border-gray-500 p-2 bg-pink-100">
      <Title image={Logo} />
      <h1 data-testid="online-status">{isOnline ? "Online" : "Offline"}</h1>
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
        <span>
          <Link to="/instamart">Instamart</Link>
        </span>
        <span style={{ backgroundColor: "pink" }}>
          <Link to="/cart">
            <span data-testid="cart">Cart-{cartItems.length}</span>
          </Link>
        </span>

        {isLoggedIn ? (
          <button
            className="border border-slate-600 bg-slate-200"
            onClick={() => setIsLoggedIn(false)}
          >
            Logout {user.name}
          </button>
        ) : (
          <button
            className="border  border-slate-600 bg-slate-200"
            onClick={() => setIsLoggedIn(true)}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
