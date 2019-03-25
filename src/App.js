import React, { Component } from 'react';
import './App.css';
import  Header from './header';
import  Main from './main';
import  Footer from './footer';
import Aside from './aside';

class App extends Component {
  state={
    counter:0
  }
  click=()=>{
    this.setState({
      counter:this.state.counter+1});
  }
  render() {
    
    return (
      <div className="App">
        <Header count={this.state.counter}></Header>
        <div className="content">
          <Aside></Aside>
          <Main fun={this.click}></Main>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
