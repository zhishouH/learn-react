import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './index.css'

export default class Footer extends Component {
  //对接收的props进行：类型、必要性的限制
  static propTypes = {
    checkAllTodo: PropTypes.func.isRequired,
    clearAllDone: PropTypes.func.isRequired
  }

  // 全选按钮
  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked)
  }

  // 清除已完成任务
  handleClearAllDone = () => {
    this.props.clearAllDone()
  }

  render() {
    const { todos } = this.props
    // 已完成的个数
    const doneCount = todos.reduce((pre,current)=> pre + (current.done ? 1 : 0),0)
    // 总数
    const total = todos.length
    
    return (
      <div className='todo-footer'>
        <div className='todo-footer-finsh'>
          <input type="checkbox" checked={doneCount === total && total !== 0} onChange={this.handleCheckAll}/>       
          <span>
            <span>已完成 { doneCount } </span>  / 全部 {total}
          </span>   
        </div>
        <div className='todo-footer-clear'>
          <button onClick={this.handleClearAllDone}>清除已完成任务</button>
        </div>
      </div>
    )
  }
}
