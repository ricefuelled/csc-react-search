import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import {getTerm} from '../actions'
import {getImages} from '../actions'
import api from '../api/api'

class Search extends Component {
  handleChange = (event) => {
    this.props.getTerm(event.target.value)
  }

  handleSubmit = async (event) =>{
    event.preventDefault()
    const response = await api.get("/search/photos", {
      params: {query: this.props.term, per_page: 15, page: Math.floor(Math.random() * 100) + 1}
    });
    this.props.getImages(response.data.results)
  }

  render(){
    return(
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label>Seach Image:</label>
            <input type="text" onChange={this.handleChange}/>
          </div>
        </form>
      </div>
    )
  }
}

const mapStatetoProps = (state) => {
  return {term: state.term}
}

export default connect(mapStatetoProps, {getTerm, getImages})(Search)