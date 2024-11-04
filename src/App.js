import React, { Component } from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Footer from "./components/Footer/Footer";
import "./App.css";

export default class App extends Component {

    /**
     * 初始化状态
     * 状态在哪里, 操作方法就在哪里
     */
    state = {
        todos:[
            {id:1, title:'吃饭', done:true},
            {id:2, title:'睡觉', done:true},
            {id:3, title:'敲代码', done:false},
            {id:4, title:'打豆豆', done:false}
        ]
    }

    render() {
        const {todos} = this.state;
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header/>
                    <List todos={todos}/>
                    <Footer />
                </div>
            </div>
        );
    }
}
