import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../redux/actions.js";

function Post() {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.data);

    useEffect(() => {
        dispatch(fetchPost());
    }, []);

    const renderPosts = () => {
        if (posts.loading) {
            return <h1>Loading</h1>
        };
        return
    };

    return(
        <div>
            {renderPosts()}
            {posts.items.map(el => {
                return <h3>{el.title}</h3>
            })}
        </div>
    );
};

export default Post;