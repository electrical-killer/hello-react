import React, { Component } from "react";
import Item from "../Item/Item"
import list from "./List.module.css";

export default class List extends Component {
    render() {
        return <ul className={list["todo-main"]}>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
        </ul>;
    }
}
