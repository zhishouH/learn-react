import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './index.css'

export default class Item extends Component {
  //对接收的props进行：类型、必要性的限制
  static propTypes = {
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  }

  state = {mouse: false}

  // 鼠标经过的回调
  handleMouse = (flag) => {
    return () => {
      this.setState({mouse: flag})
    }
  }

  // 任务选择按钮
  handleChecked = (id) => {
    return (event)=>{
      this.props.updateTodo(id,event.target.checked)
    }
  }
  
  // 删除按钮
  handleDelete= (id) => {
    return () => {
      if(window.confirm('确定删除吗？')){
        this.props.deleteTodo(id)
      }
    }
  }

  render() {
    const { id, name, done } = this.props
    const { mouse } = this.state
    return (
      <li 
        onMouseEnter={ this.handleMouse(true) } 
        onMouseLeave={ this.handleMouse(false) }
        style={{backgroundColor: mouse ? '#ddd' : '#fff'}}
      >
        <input type = "checkbox"  checked = { done } onChange = { this.handleChecked(id)}/>
        <span>{ name }</span>
        <button className='btn-delete' style={{display: mouse ? 'block' : 'none'}} onClick={this.handleDelete(id)}>删除</button>
      </li>
    )
  }
}
