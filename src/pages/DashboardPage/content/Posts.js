import React from 'react';
import PostsProvider from '../../../blocks/PostsProvider';

function Posts() {

    function renderContent(posts, error) {
        if (error !== null) {
            return <label>error occured</label>
        }

        if (posts === null) {
            return <label>Loading...</label>
        }

        return <div>
            {posts.map(post => <div key={post.id}>{post.title}
            </div>
            )}
        </div>
    }

    return (
        <PostsProvider mode="all-posts">
            {(posts, error) => (
                <section className="content profile">
                    <h1>Posts</h1>
                    {renderContent(posts, error)}
                </section>
            )}
        </PostsProvider>
    )
}

export default Posts;
