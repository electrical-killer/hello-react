import React, { Component } from "react";
import Item from "../Item/Item";
import list from "./List.module.css";

export default class List extends Component {
    render() {
        const { todos } = this.props;
        console.log(todos, Array.isArray(todos))
        return (
            <ul className={list["todo-main"]}>
                {
                    /* map记得需要key */
                    todos.map( todo=>{
                        return <Item key={todo.id} {...todo} updataTodo={this.props.updataTodo}/>;
                    })
                }
            </ul>
        )
    }
}
