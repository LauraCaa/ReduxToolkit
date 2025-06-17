import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "./postsSlice";

export default function Post() {
    const {postList, loading, error} = useSelector(state => state.posts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])
    return( 
        <div>
            <h1>Post</h1>
            {error && <h1>{error}</h1>}
            {loading && <h1>loading</h1>}
            {!loading && (
                <ul>
                    {postList.map((post, index) => (
                        <li key={index}>{post.title}</li>
                    ))}
                </ul>
            )}  
        </div>
    )
};