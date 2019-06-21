import { useState, useEffect } from 'react';
import { fetchPosts } from '../api/getPosts';

const PostsProvider = ({ children, mode }) => {
    const [error, setError] = useState(null)
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        const onSuccess = response => setPosts(response.data);
        const onError = err => setError(err);

        if (mode === "my-posts") {
            fetchPosts(onSuccess, onError)
        }
        else {
            fetchPosts(onError, onSuccess)
        }
    })

    // Render props pattern
    return children(posts, error);
}

export default PostsProvider;
