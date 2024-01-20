import React, {useEffect, useState} from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import db from "./firebase";

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, []);

    return (
        <div className="feed">
            <div className="feedHeader">
                <h2>Home</h2>
            </div>
        <TweetBox /> 
        
        {posts.map(post => (
            <Post 
                username={post.username}
                displayName={post.displayName}
                avatar={post.avatar}
                verified={post.verified}
                text={post.text}
                image={post.image}
            />
        ))}
        </div>
    );
}

export default Feed;
