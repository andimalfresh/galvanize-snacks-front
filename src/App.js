import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import SearchField from './components/searchField'
// import Post from './components/Post'
import Snacks from './components/Snacks'
import UsersForm from './components/UsersForm'

class App extends Component {
  constructor(props) {
    super();
    this.state ={
      snacksList: [],
      userList:[],
      searched:[],
    }
  }

  onChangeSearch = event => {
    event.preventDefault();
    const value = event.target.value;
    const snackList = this.state.snackList;
    const filteredSnacks = this.findMatches(value, snackList);
    this.setState({
      searched: filteredSnacks
    });
  };
  findMatches(words, snacks) {
    return snacks.filter(item => {
      const regex = new RegExp(words, "gi");
      return item.title.match(regex) || item.name.match(regex);
    });
  }
  render() {
    return (
      <div className="App">
          <Header />
          <div className="topnav">
            <SearchField searched={this.state.searched} onChangeSearch={this.onChangeSearch} />
          </div>
          <div className="formCont">
            <UsersForm/>
          </div>
          <div className="snackCont"> 
            <Snacks/>
          </div>

      </div>
    );
  }
}

export default App;
