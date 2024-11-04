import React, { Component } from "react";
// import item from"./Item.module.css";
import "./Item.module.css";

export default class Item extends Component {
    render() {
        const {title, done} = this.props;
        return (
            <li>
                <label>
                    <input type="checkbox" defaultChecked={done}/>
                    <span>{title}</span>
                </label>
                <button>删除</button>
            </li>
        );
    }
}
