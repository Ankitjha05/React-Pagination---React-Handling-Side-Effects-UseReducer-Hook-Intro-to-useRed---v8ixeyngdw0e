import React, { useState, useEffect } from "react";
import { PaginationButtonsList } from "./PaginationButtonsList";
import { fetchPosts } from "../api/fetchPosts";

const PostList = ({ limit }) => {
    const [loader, setLoader] = useState(true);
    const [page, setPage] = useState(1);
    const [response, setResponse] = useState([]);
    let increment = () => {
        loaderfunc(page+1)
        setPage(page + 1);
        console.log('increment');
    };
    let loaderfunc = async (page) => {
        setLoader(true);
        console.log('before fetch')
        let data =await fetchPosts(page, limit);
        setResponse(data);
        setLoader(false);
        console.log('after fetch')
    };
    useEffect( () => {
        console.log("before func call inside useeefect");
        loaderfunc(page);
        console.log('hello useeffect')
    },[]);
    return (
        <>
            {loader && <h4>loading...</h4> && console.log('inside return')}
            {/* <Post lists={response}/> */}
            {!loader && <PaginationButtonsList lists={response} page={page} increment={increment} />}
        </>
    );
};

export { PostList };
