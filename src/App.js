import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import QuoteBox from "./components/QuoteBox"
//import quoteData from './components/quoteData'
import './App.scss'


class App extends Component {
  constructor() {
    super();
    this.state = {
     
    }
  }
  render() {
    
    return (
      <div id="wrapper" className="container-fluid">
        <Header />
        <QuoteBox  />
          
        <Footer />
      </div>
    );
  }
}

export default App;
