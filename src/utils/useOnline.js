import React, { useState, useEffect } from "react";

//This is a hook craeted for checking user's online status
const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  //REMEMBER:::::CLEAR YOUR EVENT-LISTENERS ALWAYS:::::::;

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };
    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline; //returns true or false
};

export default useOnline;
