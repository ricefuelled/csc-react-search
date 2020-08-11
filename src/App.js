import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Search from './components/Search'
import Result from './components/Result'
import api from './api/api'

class App extends Component{

  state = {
      images: []
  }
  
  handleSearchTerm = async (term) =>{
    const response = await api.get("/search/photos", {
      params: { query: term, per_page: 15, page: Math.floor(Math.random() * 100) + 1 }
    });    

    this.setState({ images: response.data.results });
  }

  render(){
    //console.log("Render");
    return(
      <div className = "container">
        <div>
          <Search search={this.handleSearchTerm}/>
        </div>
        <div>
          <Result images={this.state.images}/>
        </div>
      </div>
    )
  }
}

export default App