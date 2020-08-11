import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import ResCard from './ResCard'

class Result extends Component{
  constructor(props){
    super(props);
  }
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

export default Result