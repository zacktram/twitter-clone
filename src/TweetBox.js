import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import db from "./firebase";
import "./TweetBox.css";

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            username: "zacktram",
            displayName: "Zack Tram",
            avatar: "https://scontent-bos5-1.xx.fbcdn.net/v/t39.30808-6/241251431_4230888380367945_1348050220600686703_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=3635dc&_nc_ohc=iFxdLNJq6rIAX-AEjsA&_nc_ht=scontent-bos5-1.xx&oh=00_AfCKl7BRpFJLlQIlErqrfHn4ASqJkmvVCaONyZQKYiKHYw&oe=65AD13B1",
            verfied: true,
            text: tweetMessage,
            image: tweetImage,
        });

        setTweetMessage("");
        setTweetImage("");  
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBoxInput">
                    <Avatar src="https://scontent-bos5-1.xx.fbcdn.net/v/t39.30808-6/241251431_4230888380367945_1348050220600686703_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=3635dc&_nc_ohc=EqJ0yDUr12IAX8_2jkn&_nc_ht=scontent-bos5-1.xx&oh=00_AfBzzNRTTTV1XAJsoZNTYBzhIpVPrD4tA9kDc72oIGtfHg&oe=65B10831" />
                    <input 
                        value={tweetMessage} 
                        onChange={(e) => setTweetMessage(e.target.value)}
                        placeholder="What's Happening?"
                        type="text"
                    />
                </div>
                <input
                    placeholder="Optional: Enter image URL"
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    type="text"
                    className="tweetBoxImageInput"
                />
                <Button onClick={sendTweet} type="submit" className="tweetBoxButton">
                    Tweet
                </Button>
            </form>
        </div>
    );
}

export default TweetBox;