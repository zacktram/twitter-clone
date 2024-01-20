import { Search } from "@material-ui/icons";
import React from "react";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import "./Widgets.css";

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgetsInput">
                <Search className="widgetsSearchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgetsWidgetContainer">
                <h2>What's Happening?</h2>
                <TwitterTweetEmbed tweetId={"1307046632517664771"} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="ZackTram"
                    options={{height: 400}}
                />
                <TwitterShareButton
                    url={"https://zacktram.github.io"}
                    options={{text: "Check out my portfolio!"}}
                />
            </div>
        </div>
    );
}

export default Widgets;