import React, { Component } from 'react'
import pubSub from "pubsub-js";
import list from './List.module.css'

export default class List extends Component {

    state = {
        users: [], // 初始化用户对象数组
        isFirst: true, // 起始展示
        isLoading: false, // 加载中
        err: "", // 错误信息存储
    };

    componentDidMount = ()=>{
        this.token = pubSub.subscribe('msg_search', (_,data)=>{
            this.setState(data);
        })
    }

    componentWillUnmount = ()=>{
        pubSub.unsubscribe(this.token)
    }


  render() {
    const {users, isFirst, isLoading, err} = this.state

    return (
        <div className="row">
            {
                isFirst ? <h3>Welcome to use, enter a keyWord, then click Search</h3> :
                isLoading ? <h3>Loading......</h3> :
                err ? <h3 style={{color:"red"}}>{err}</h3> : 
                (
                    users.map(userObj=>{
                        return (
                            <div key={userObj.id} className={list["card"]}>
                                <a href={userObj.html_url} target="_blank">
                                    <img
                                        src={userObj.avatar_url}
                                        style={{width:100}}
                                    />
                                </a>
                                <p className={list["card-text"]}>{userObj.login}</p>
                            </div>
                        )
                    })
                )
            }
        </div>
    );
  }
}
