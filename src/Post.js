import { Avatar } from "@material-ui/core";
import {
    ChatBubbleOutline,
    FavoriteBorder,
    Publish,
    Repeat,
    VerifiedUser,
} from "@material-ui/icons";
import React from "react";
import "./Post.css";

function Post({displayName, username, verified, text, image, avatar}) {
    return (
        <div className="post">
            <div className="postAvatar">
                <Avatar src={avatar} />
            </div>
            <div className="postBody">
                <div className="postHeader">
                    <div className="postHeaderText">
                        <h3>
                            {displayName}{" "}
                            <span className="postHeaderSpecial">
                               {verified && <VerifiedUser className="postBadge" />} @
                                {username}
                            </span>
                        </h3>
                    </div>
                    <div className="postHeaderDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} alt="" />
                <div className="postFooter">
                    <ChatBubbleOutline fontSize="small" />
                    <Repeat fontSize="small" />
                    <FavoriteBorder fontSize="small" />
                    <Publish fontSize="small" />
                </div>
            </div>
        </div>
    );
}

export default Post;