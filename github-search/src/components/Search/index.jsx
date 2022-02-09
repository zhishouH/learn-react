import React, { Component } from 'react'
import axios from 'axios'
import './index.css'

export default class Search extends Component {
  handleSearch = () => {
    const { keywordNode:{value} } = this
    this.props.updateAppState({isFirst:false,isLoading:true})
    axios.get(`http://localhost:3000/search/users?q=${value}`).then(
      response => {
        this.props.updateAppState({isLoading:false,users:response.data.items})
      },
      error => {
				this.props.updateAppState({isLoading:false,err:error.message})
      }
    )
  }
  render() {
    return (
      <div className='search'>
        <input type="text" ref={ current => this.keywordNode = current }/>
        <button onClick={this.handleSearch}>Search</button>
      </div>
    )
  }
}
