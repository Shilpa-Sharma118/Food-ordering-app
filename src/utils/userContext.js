import { createContext } from "react";

const userContext = createContext({
  user: {
    name: "Dummy",
    email: "dummy@gmail.com",
  },
});

//Thsi will be used by react dev for showing the name for userContext name so the debugging becomes easy...
userContext.displayName = "UserContext";

export default userContext;
