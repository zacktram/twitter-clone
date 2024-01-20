import React, {useEffect, useState} from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import db from "./firebase";

function Feed() {
    const [posts, setPosts] = useState([]);

    // userEffect runs the code body once when the Feed component loads
    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, []); // <-- square brackets where variables can be placed
    // Will also run code body if a the state of a variable changes that is put inside the square brackets

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
