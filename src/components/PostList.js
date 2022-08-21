import React, { useState, useEffect } from "react";
import { PaginationButtonsList } from "./PaginationButtonsList";
import { fetchPosts } from "../api/fetchPosts";
import { Post } from "./Post";

const PostList = ({ limit }) => {
    const [loader, setLoader] = useState(true);
    const [page, setPage] = useState(1);
    const [response, setResponse] = useState([]);
    let increment = () => {
        setPage(page + 1);
    };
    let loaderfunc = async () => {
        setLoader(true);
        let data =await fetchPosts(page, limit);
        setResponse(data);
        setLoader(false);
    };
    useEffect(() => {
        loaderfunc();
    });
    return (
        <>
            {loader && <h4>loading...</h4>}
            {/* <Post lists={response}/> */}
            <PaginationButtonsList lists={response} page={page} increment={increment} />
        </>
    );
};

export { PostList };
