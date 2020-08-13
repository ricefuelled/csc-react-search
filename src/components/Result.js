import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import ResCard from './ResCard'
import {connect} from 'react-redux'

class Result extends Component{
  render(){
    let html = this.props.images.map(item => {
      return <ResCard image={item}/>
    })
    
    return(
      <div className="image-list">
        {html}
      </div>
    )
  }
}

const mapStatetoProps = (state) => {
  return {images: state.images}
}

export default connect(mapStatetoProps)(Result)