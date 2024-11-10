import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min'
import Header from './Component/Header/Header'
import MyNavLink from './Component/MyNavLink/MyNavLink'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'

export default class App extends Component {
  render() {
    return (
    <div className='container'>
        <div>
            {/* 标题栏 */}
            <div className='row'>
                <div className='col-xs-offset-2 col-xs-8'>
                    <Header/>
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
                    {/* <NavLink className="list-group-item" to='/about'>About</NavLink> */}
                    <MyNavLink to='/about'>About</MyNavLink>
                    <MyNavLink to='/home'>Home</MyNavLink>
                </div>
            </div>
            {/* 展示区 */},,
            <div className="col-xs-6">
                <div className="panel">
                    <div className="panel-body">
                        {/* 注册路由 */}
                        <Switch>
                            <Route path='/about' component={About}/>
                            <Route path='/home' component={Home}/>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
