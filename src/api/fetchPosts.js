const fetchPosts = async (page, limit) => {
    let url =`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
    let data = await fetch(url);
    let parseData = await data.json();
    return parseData
}

export { fetchPosts }