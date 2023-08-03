import React, { useEffect, useRef, useState, useCallback } from "react";
import useBookSearch from "../utils/useBookSearch";

const InfiniteScroll = () => {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const { books, hasMore, loading, error } = useBookSearch(query, pageNumber);
  const observer = useRef();
  const lastBookref = useCallback(
    (node) => {
      console.log(node);
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        //when the element becomes visible
        if (entries[0].isIntersecting && hasMore) {
          console.log("visoble");
          setPageNumber((prev) => prev + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setPageNumber(1);
  };

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(e) => handleSearch(e)}
        className="border-black w-96 h-10 bg-slate-100 border-2 p-2 m-2"
      ></input>
      {books.map((book, index) => {
        return books.length === index + 1 ? (
          <div ref={lastBookref} key={book}>
            {book}
          </div>
        ) : (
          <div key={book}> {book}</div>
        );
      })}
      {loading && <div>Loading..</div>}
      {error && <div>Error..</div>}
    </>
  );
};

export default InfiniteScroll;
