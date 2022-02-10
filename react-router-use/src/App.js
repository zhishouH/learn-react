import React, { Component } from 'react'
import {Link,Route, NavLink, Routes} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='top'>
          <h2>React-Router-Use</h2>
        </div>
        <div className='main'>
          <div className='nav'>
            {/* <Link to="/about" className='nav-item'>About</Link>
            <Link to="/home" className='nav-item'>Home</Link>       */}
            <NavLink to="/about" className='nav-item'>About</NavLink>
            <NavLink to="/home" className='nav-item'>Home</NavLink>      
          </div>

          <div className='nav-content'>
            {/* 注册路由 */}  
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>
        </div> 
      </div>
    )
  }
}
