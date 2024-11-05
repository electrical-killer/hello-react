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

    /* 子组件给父组件传内容, 仅需要传递事件回调 */
    // 用于添加一个todo, 接收参数为todo对象
    addTodo = (todoObj)=>{
        // 打印子组件传回的内容
        console.log('APP:', todoObj);

        // 获取todo列表, 并将传参插入列表首位
        const {todos} = this.state;
        const newTodo = [todoObj, ...todos]

        // 更新列表状态
        this.setState({todos:newTodo})
    }

    updataTodo = (id, done)=>{
        const {todos} = this.state;
        
        const newTodo = todos.map(todoObj=>{
            if(todoObj.id === id){
                return {...todoObj, done} /* 展开todoObj对象属性, 并且更新done属性参数, 并返回 */
            }
            else{
                return todoObj; /* 没有找到对应对象, 将本身返回 */
            }
        })

        this.setState({todos:newTodo}) /* 更新todo列表 */
    }

    deleteTodo = (id)=>{
        const {todos} = this.state;

        /* 从数组中删除指定id元素 */
        /* 数组过滤, 当id值不一致, 返回该值 */
        const newTodos = todos.filter(todoObj=>{
            return todoObj.id !== id; /* 过滤条件, 当满足这个条件时, 可以返回 */
        })

        this.setState({todos:newTodos})
    }

    render() {
        const {todos} = this.state;
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} updataTodo={this.updataTodo} deleteTodo={this.deleteTodo}/>
                    <Footer />
                </div>
            </div>
        );
    }
}
