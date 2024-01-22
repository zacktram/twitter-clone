import { Search } from "@material-ui/icons";
import React from "react";
import {
    TwitterTimelineEmbed,
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
                <TwitterTweetEmbed tweetId={"1749558602535199130"} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="JavaScript"
                    options={{height: 400}}
                />
            </div>
        </div>
    );
}

export default Widgets;