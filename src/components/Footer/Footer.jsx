import React, { Component } from 'react'
import footer from "./Footer.module.css"
import "../../App.css"

export default class Footer extends Component {

  /* 选项统一控制, 同步App.js */
  headleCheckAll = event=>{
      // 实时状态: event.target.checked
      this.props.checkAllTodos(event.target.checked)
  }

  /* 清除已完成的所有任务 */
  headleChick = ()=>{
      this.props.clearAllDoneTodos()
  }

  render() {
    const { todos } = this.props;

    /** reduce:数组的统计方法
     * (pre, currentTodo): (上一个值, 当前遍历的对象)
     * 若第一次遍历, pre等于第二个参数 0
    */
    const done_num = todos.reduce((pre,currentTodo)=> (pre + (currentTodo.done ? 1 : 0)),0)
    const total = todos.length;

    return (
      <div className={footer["todo-footer"]}>
        <label>
            <input type="checkbox" onChange={this.headleCheckAll} checked={(done_num === total && total !== 0)? true : false}/>
        </label>
        <span>
            <span>已完成 {done_num}</span>
            <span> / </span>
            <span>全部 {total}</span>
        </span>
        <button onClick={this.headleChick} className="btn btn-danger">清除已完成的任务</button>
      </div>
    )
  }
} 
