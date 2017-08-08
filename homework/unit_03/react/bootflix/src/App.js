import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';
// import example from './omdbExample.json'

class App extends Component {
  constructor(){
    super();
    this.state = {
        title: "",
        year: "",
        director: "",
        genre: "",
        plot: ""
    }
  }

  //Update these methods to make axios calls to OMDB and update this.state.movie with the response from the server
  _searchByTitle = () => {
    axios.get('http://omdbapi.com/?t=&apikey=d31f1a94')
      .then((res)=>{
        console.log("Search by Title");
        this.setState({
          title: res.data.title, 
          year: res.data.year, 
          director: res.data.director, 
          genre: res.data.genre, 
          plot: res.data.plot})
      })
      .catch(err => console.error(err));
  }

  _searchById = () => {
    console.log("Search by ID");
  }

  //Pass _searchByTitle, _searchById, and this.state.movie to it's appropriate child components.
  render() {
    return (
      <div className="App">
        <Header />
        <Search searchByTitle={this._searchByTitle}/>
        <Movie
        title={this.state.title}
        year={this.state.year}
        director={this.state.director}
        genre={this.state.genre}
        plot={this.state.plot}/>
      </div>
    );
  }
}

export default App;
