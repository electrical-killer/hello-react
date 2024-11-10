import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom/cjs/react-router-dom.min'
import Home from './Components/Home/Home'
import About from './Components/About/About'

export default class App extends Component {
  render() {
    return (
    <div className='container'>
        <div>
            {/* 标题栏 */}
            <div className='row'>
                <div className='col-xs-offset-2 col-xs-8'>
                    <div className="page-header"><h2>React Router Demo</h2></div>
                </div>
            </div>
        </div>
        <div className="row">
            {/* 导航栏 */}
            <div className="col-xs-2 col-xs-offset-2">
                <div className="list-group">
                    {/* 原生的html中, <a>是要跳转不同的页面 */}
                    {/* <a className="list-group-item" href="./about.html">About</a>
                    <a className="list-group-item active" href="./home.html">Home</a> */}

                    {/* React中靠路由链接实现切换组件: 编写路由链接 */}
                    <Link className="list-group-item" to='/about'>About</Link>
                    <Link className="list-group-item" to='/home'>Home</Link>
                </div>
            </div>
            {/* 展示区 */}
            <div className="col-xs-6">
                <div className="panel">
                    <div className="panel-body">
                        {/* 注册路由 */}
                        <Route path='/about' component={About}/>
                        <Route path='/home' component={Home}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
