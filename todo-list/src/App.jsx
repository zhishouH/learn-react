import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
  state = {
    todos:[
      {id: nanoid(), name: 'React', done: true},
      {id: nanoid(), name: 'VUE', done: true},
      {id: nanoid(), name: 'HTML', done: false},
      {id: nanoid(), name: 'CSS', done: false}
    ]
  }

  // 添加任务
  addTodo = (todoObj) => {
    const { todos } = this.state
    const newTodos = [todoObj, ...todos]
    this.setState({todos: newTodos})
  }

  // 更新任务
  updateTodo = (id, done) => {
    const { todos } = this.state
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) {
        return {...todoObj,done}
      } else {
        return todoObj
      }
    })
    this.setState({todos: newTodos})
  }

  // 删除任务
  deleteTodo = (id) => {
    const { todos } = this.state
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id
    })
    this.setState({todos: newTodos})
  }

  // 全选任务按钮
  checkAllTodo = (done) => {
    const { todos } = this.state
    const newTodos = todos.map((todoObj) => {
      return {...todoObj,done}
    })
    this.setState({todos: newTodos})
  }

  // 清除完成任务
  clearAllDone = () => {
    const { todos } = this.state
    const newTodos = todos.filter((todoObj) => {
      return !todoObj.done
    })
    this.setState({todos: newTodos})
  }

  render() {
    const { todos } = this.state
    return (
      <div className='todo-container'>
        <div className="todo-wrap">
          <Header addTodo = { this.addTodo }/>
          <List todos = { todos } updateTodo = { this.updateTodo } deleteTodo = { this.deleteTodo } />
          <Footer todos = { todos } checkAllTodo = {this.checkAllTodo} clearAllDone = {this.clearAllDone} />
        </div>
      </div>
    )
  }
}
