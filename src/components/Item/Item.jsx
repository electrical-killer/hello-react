import React, { Component } from "react";
// import item from"./Item.module.css";
import "./Item.module.css";

export default class Item extends Component {
    render() {
        return (
          <li>
            <label>
				<input type="checkbox" />
				<span>xxxxxx</span>
            </label>
            <button>删除</button>
          </li>
        )
    }
}
