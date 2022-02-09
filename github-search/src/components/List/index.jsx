import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {
    const { users, isFirst, isLoading, err} = this.props
    return (
      <div className='list'>
        {
          isFirst ? <h2>欢迎使用，输入关键字，随后点击搜索</h2> :
					isLoading ? <h2>Loading......</h2> :
					err ? <h2 style={{color:'red'}}>{err}</h2> :
          users.map((userObj) => {
            return (
              <div key={userObj.id} className="list-item">
                <a rel="noreferrer" href={userObj.html_url} target="_blank">
                  <img src={userObj.avatar_url} alt="head_portrait" />  
                </a>
                <span>{userObj.login}</span>
              </div>
            )
          })
        }
      </div>
    )
  }
}
