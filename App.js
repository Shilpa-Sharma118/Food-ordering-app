/**
 * Parcel has following features::
 *
 * Creates local server
 * HMR - Hot Module Replacement / hot loading of app
 * File watcher algorithm - written in C++
 * Minification of file  MINIFY
 * Remove console logs and other cleanup of code
 * BUNDLING
 * Manages dev and prod build
 * Image optimization as well
 * caching while development
 * Compresses you file like by renaming your variables etc
 * Compatible with older version on browser
 * HTTPS on dev as well
 * handles port number
 * Uses consistent hashing algorithm
 * Zero config bundler
 * Transitive Dependencies (nested dependencies)
 *
 *
 * All this is done in parcel-cache folder if you see
 *
 * dist folder - keeps minified version of files and libs
 *
 *
 */

import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  { id: "heading1", key: "heading1" },
  "Heading 1"
);

// React.createElement creates an Object and that is converted into HTML

console.log(heading1);

const heading2 = React.createElement(
  "h2",
  { id: "heading2", key: "heading2" },
  "Heading 2"
);

const heading = React.createElement(
  "div",
  {
    id: "titles",
  },
  [heading1, heading2]
);

//This is JSX code, React Element
const header2 = (
  <h1 id="r1" key="h1">
    Hello React
  </h1>
);

const title = "Hello Title";

//Functional React component
const HeaderComponent = () => {
  return (
    <div>
      <h1>Hello functional Component111</h1>
      <h2>This is h2 tag111</h2>
    </div>
  );
};

//Can also be written as
const HeaderComponent2 = () => (
  <div>
    <h1>Hello functional Component2</h1>
    <h2>This is h2 tag2</h2>
  </div>
);

//Can also be written
const HeaderComponent3 = function () {
  return (
    <div>
      {title}
      {console.log(title)}
      {header2}
      <HeaderComponent2 />
      {HeaderComponent()}
      <h1>Hello functional Component</h1>
      <h2>This is h2 tag</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
//this is React Component
//root.render(header2);

//when you have to render your functional Component
root.render(<HeaderComponent3 />);
