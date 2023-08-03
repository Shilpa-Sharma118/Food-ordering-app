import React, { useEffect, useState } from "react";
import axios from "axios";

const useBookSearch = (query, pageNumber) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [books, setBooks] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setBooks([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: "http://openlibrary.org/search.json",
      params: { q: query, page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setBooks((prev) => {
          return [
            ...new Set([...prev, ...res.data.docs.map((book) => book.title)]),
          ];
        });
        setHasMore(res.data.docs.length > 0);
        setLoading(false);
        console.log("resp", res.data);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        setError(err);
        console.log("Error looks like", err);
      });
    return () => cancel();
  }, [query, pageNumber]);

  return { loading, error, books, hasMore };
};

export default useBookSearch;
