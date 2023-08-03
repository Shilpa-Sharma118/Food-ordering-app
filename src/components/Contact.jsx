import React, { useEffect, useState } from "react";
import WineCard from "./WineCard";

const Contact = () => {
  const [wines, setWines] = useState([]);
  const [displayWines, setDisplayWines] = useState([]);
  const [offset, setOffset] = useState(30);

  const fetchWines = async () => {
    const data = await fetch("https://api.sampleapis.com/wines/reds");
    const json = await data.json();
    setWines(json);
    setDisplayWines(json.slice(0, offset));
    console.log("fecthing complete====");
  };
  const onScroll = () => {
    console.log("Onscolll event");
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      if (offset < wines.length) {
        setOffset((prev) => prev + 10);
      }
    }
  };

  useEffect(() => {
    fetchWines();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [wines]);

  useEffect(() => {
    if (offset < wines.length) {
      setDisplayWines(wines.slice(0, offset));
    }
  }, [offset]);

  return (
    <div>
      {displayWines && displayWines.length > 0 ? (
        <div className="wines">
          {displayWines.map((wine) => {
            return <WineCard wine={wine} key={wine.id} />;
          })}
        </div>
      ) : (
        <div> Loading..... </div>
      )}
    </div>
  );
};

export default Contact;
