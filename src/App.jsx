import React from "react";
import ReactDOM from "react-dom/client";
import "./App.scss";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";

const FoodApp = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FoodApp />);
