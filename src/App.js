import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Search from './components/Search'
import Result from './components/Result'
import api from './api/api'
import {connect} from 'react-redux'
import {changeTitle} from './actions'

class App extends Component{
  handleClick = () => {
    this.props.changeTitle("Changed!")
  }

  render(){
    return(
      <div className = "container">
        <Search/>
        <h1>{this.props.title}</h1>
        <button onClick = {this.handleClick}>Change title</button>
        <Result/>
      </div>
    )
  }
}

const mapStatetoProps = (state) => {
  return {title: state.title}
}

export default connect(mapStatetoProps,{changeTitle})(App)