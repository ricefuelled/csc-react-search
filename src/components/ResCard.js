import React, {Component} from 'react'
import ReactDOM from 'react-dom'


class ResCard extends Component{
  render(){
    return(
      <div>
        <img src={this.props.image.urls.small} url={this.props.image.description}/>
      </div>
    )
  }
}

export default ResCard