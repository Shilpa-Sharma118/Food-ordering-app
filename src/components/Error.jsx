import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const { status, statusText } = error;

  console.log("error looks like", error);
  return (
    <div>
      <h1>Oops!!</h1>
      <h2>Page not found...</h2>
      <h2>{status + " : " + statusText}</h2>
    </div>
  );
};

export default Error;
