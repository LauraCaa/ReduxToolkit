const API_URL = "https://jsonplaceholder.typicode.com";

export const fetchPostsApi = async () => {
    const res = await fetch(`${API_URL}/posts`);
    const data = await res.json();
    return data;
};