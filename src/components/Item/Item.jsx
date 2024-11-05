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

    headleChange = id=>{
        return (event)=>{
            this.props.updataTodo(id, event.target.checked) /* event.target.checked: 表示当前onChange事件的最新值 */
        }
    }

    headleDelete = id=>{
        // console.log(id)
        this.props.deleteTodo(this.props.id);
    }

    render() {
        const {id, title, done} = this.props;
        const {mouse} = this.state;
        return (
            <li style={{backgroundColor:mouse?'#ddd':"white"}} onMouseEnter={this.headleMouse(true)} onMouseLeave={this.headleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.headleChange(id)}/>
                    <span>{title}</span>
                </label>
                <button onClick={()=>{this.headleDelete(id)}} className="btn btn-danger" style={{display:mouse?'block':"none"}}>删除</button>
            </li>
        );
    }
}
