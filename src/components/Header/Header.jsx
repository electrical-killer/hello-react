import React, { Component } from "react";
import PropTypes from "prop-types";
import {nanoid} from "nanoid"
import header from "./Header.module.css";

export default class Header extends Component {

    static propTypes = {
        addTodo:PropTypes.func.isRequired
    }

    /* 触发事件与操作内容为 同一组件, 直接使用事件属性*/
    handleKeyUp = event=>{
        // console.log('value:<', event.target.value,'>', 'keyCode:', event.keyCode);
        const {keyCode, target} = event;
        if(keyCode !== 13) return;
        if(target.value.trim() === ''){
            alert("输入标题内容不能为空")
            return;
        }

        // 按下了回车, 数据整理为todo对象, 并调用回调函数
        const todoObj = {
            id:nanoid(),
            title:target.value,
            done:false
        }
        this.props.addTodo(todoObj)
        
        // 清空输入窗口
        target.value = '';
    }

    render() {
        return (
            <div className={header["todo-header"]}>
                <input
                    type="text"
                    placeholder="请输入你的任务名称, 按回车键确认"
                    onKeyUp={this.handleKeyUp}
                />
            </div>
        );
    }
}
