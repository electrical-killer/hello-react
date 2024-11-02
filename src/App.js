/**
 * 引入React&Component
 * react中将两者分别暴露
 */
import React from "react"

/* 引入两个组件 */
import Hello from "./components/Hello"
import Welcome from "./components/Welcome"

export default class App extends React.Component{
    render(){
        return (
            <div>
                <Hello/>
                <Welcome/>
            </div>
        )
    }
}

