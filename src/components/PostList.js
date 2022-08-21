import React, { useState, useEffect } from "react";
import { PaginationButtonsList } from "./PaginationButtonsList";
import { fetchPosts } from "../api/fetchPosts";

const PostList = ({ limit }) => {
  const [loader, setLoader] = useState(true);
  const [page, setPage] = useState(1);
  const [response, setResponse] = useState([]);
  let increment = () => {
    loaderfunc(page + 1);
    setPage(page + 1);
  };
  let loaderfunc = async (page) => {
    setLoader(true);
    let data = await fetchPosts(page, limit);
    setResponse(data);
    setLoader(false);
  };
  useEffect(() => {
    loaderfunc(page);
  }, []);
  return (
    <>
      {loader && <h4>loading...</h4>}
      {!loader && (
        <PaginationButtonsList
          lists={response}
          page={page}
          increment={increment}
        />
      )}
    </>
  );
};

export { PostList };
