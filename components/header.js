import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../routes";

export default () => {
    return (
        <div class="ui menu" style={{ marginTop: "10px" }}>
            <Link route="/">
                <a class="item">CrowdCoin</a>
            </Link>
            <div class="right menu">
                <Link route="/">
                    <a class="item">Campaigns</a>
                </Link>
                <Link route="/campaigns/new">
                    <a class="item">+</a>
                </Link>
            </div>
        </div>
    );
}