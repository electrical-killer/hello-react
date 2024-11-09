import React, { Component } from 'react'
import list from './List.module.css'

export default class List extends Component {
  render() {
    const {users, isFirst, isLoading, err} = this.props

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
