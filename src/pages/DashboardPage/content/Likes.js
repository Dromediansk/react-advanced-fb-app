import React from "react";
import { connect } from "react-redux";

const Likes = ({ likes }) => {
    return (
        <section className="content likes">
            <h1>Likes</h1>
            <div className="pages">
                {likes.map(({ name, id }) => (
                    <a
                        href={`https://www.facebook.com/${id}/`}
                        rel="noopener noreferrer"
                        target="_blank"
                        key={id}
                    >
                        <article className="hobby-box">{name}</article>
                    </a>
                ))}
            </div>
        </section>
    );
}

const mapState = state => ({
    likes: state.session.user.likes.data
})

export default connect(mapState)(Likes);