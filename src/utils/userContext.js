import { createContext } from "react";

const userContext = createContext({
  user: {
    name: "Dummy",
    email: "dummy@gmail.com",
  },
});

userContext.displayName = "UserContext";

export default userContext;
