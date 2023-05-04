import { Title } from "./Title";

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <span>About</span>
        <span>Support</span>
        <span>Login</span>
        <span>Cart</span>
      </div>
    </div>
  );
};

export default Header;
