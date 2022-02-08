import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import './index.css'

export default class Header extends Component {
  //对接收的props进行：类型、必要性的限制
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  // 键盘事件的回调
  handleKeyUp = (event) => {
    const { target, keyCode } = event
    // 判断是否为回车键
    if (keyCode !== 13) return
    // 添加的任务不能为空文本
    if (target.value.trim() === '') {
      alert('输入不能为空')
      return
    }
    const todoObj = {id: nanoid(), name: target.value, done: false}
    // 将todoObj传给App
    this.props.addTodo(todoObj)
    // 清空输入框
    target.value = ''
  }

  render() {
    return (
      <div className='todo-header'>
        <input 
          type="text"
          className='input' 
          placeholder='请输入任务名称,按回车确认添加！'
          onKeyUp={this.handleKeyUp}
        />
      </div>
    )
  }
}
