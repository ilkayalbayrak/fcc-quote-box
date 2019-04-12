import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import QuoteBox from "./components/QuoteBox"
import quoteData from './components/quoteData'
import './components/App.css'


class App extends Component {
  constructor() {
    super();
    this.state = {
      quotes: quoteData
    }
   
  }

  

  render() {
    
    return (
      <div id="wrapper">
        <Header />
        <QuoteBox quote={this.state.quotes} />
          
        <Footer />
      </div>
    );
  }
}

export default App;
