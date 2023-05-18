import { useContext } from "react";
import userContext from "../utils/userContext";

const Footer = () => {
  const { user } = useContext(userContext);
  return (
    <div className="p-10 m-10">
      This site is developed by {user.name} having email-id as {user.email}
    </div>
  );
};

export default Footer;
