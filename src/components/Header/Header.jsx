import React, { Component } from "react";
import header from "./Header.module.css";

export default class Header extends Component {
    render() {
        return (
            <div className={header["todo-header"]}>
                <input
                    type="text"
                    placeholder="请输入你的任务名称, 按回车键确认"
                />
            </div>
        );
    }
}
