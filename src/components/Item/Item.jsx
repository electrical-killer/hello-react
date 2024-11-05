import React, { Component } from "react";
// import item from"./Item.module.css";
import "./Item.module.css";
import "../../App.css"

export default class Item extends Component {

    state = {mouse:false}

    headleMouse = flag=>{
        return ()=>{
            this.setState({mouse:flag})
        }
    }

    render() {
        const {title, done} = this.props;
        const {mouse} = this.state;
        return (
            <li style={{backgroundColor:mouse?'#ddd':"white"}} onMouseEnter={this.headleMouse(true)} onMouseLeave={this.headleMouse(false)}>
                <label>
                    <input type="checkbox" defaultChecked={done}/>
                    <span>{title}</span>
                </label>
                <button className="btn btn-danger" style={{display:mouse?'block':"none"}}>删除</button>
            </li>
        );
    }
}
