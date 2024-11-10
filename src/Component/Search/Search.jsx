import React, { Component } from "react";
import pubSub from "pubsub-js";
import axios from 'axios'

export default class Search extends Component {
    search = (event)=>{
        /* 解构赋值 & 变量重命名 */
        const {keyWordElement:{value:keyWord}} = this

        /* 请求状态前更新组件状态 */
        // this.props.updataAppState({isFirst:false, isLoading:true})
        pubSub.publish('msg_search', {isFirst:false, isLoading:true})

        /* 发送网络请求,  */
        axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
            response => {
                /* 请求成功后处理App状态 */
                // this.props.updataAppState({isLoading:false, users:response.data.items})
                pubSub.publish('msg_search', {isLoading:false, users:response.data.items})
            },
            error =>{
                /* 请求失败后处理App状态 */
                // this.props.updataAppState({isLoading:false, err:error.message})
                pubSub.publish('msg_search', {isLoading:false, err:error.message})
            }
        )
    }

    handleOnClick = (event)=>{
        this.search(event);
    }

    handleOnKeyUp = (event)=>{
        if(event.keyCode === 13)
        {
            this.search(event);
        }
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search for github user</h3>
                <div>
                    <input
                        style={{width:250}}
                        type="text"
                        placeholder="Enter keywords and click button"
                        onKeyUp={this.handleOnKeyUp}
                        ref={c => this.keyWordElement = c}
                    />
                    <button onClick={this.handleOnClick}>Search</button>
                </div>
            </section>
        );
    }
}
