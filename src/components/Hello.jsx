import React from "react"
import hello from "./Hello.module.css"

export default class Hello extends React.Component{
    render(){
        return (
            <h2 className={hello.demo1}>Hello world</h2>
        )
    }
}

