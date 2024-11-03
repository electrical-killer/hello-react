import React, { Component } from 'react'
import footer from "./Footer.module.css"
import "../../App.css"

export default class Footer extends Component {
  render() {
    return (
      <div className={footer["todo-footer"]}>
        <label>
            <input type="checkbox" />
        </label>
        <span>
            已完成 / 全部 
        </span>
        <button className="btn btn-danger">清除已完成的任务</button>
      </div>
    )
  }
} 
