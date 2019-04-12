import React, { Component } from 'react';

class QuoteBox extends Component {
    constructor(props){
        super(props);
        this.state ={
            quotes: props.quote,
            currrentId : null,
            currentText: null,
            currentAuthor: null
        }
        this.randomQuote = this.randomQuote.bind(this);
        this.tweetQuote = this.tweetQuote.bind(this);
    }

    

    tweetQuote(){
      const tweetUrl ='https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent('"' + this.state.currentText + '" -' + this.state.currentAuthor);
        return tweetUrl;
    }

    randomQuote(){
        const quotes = [...this.state.quotes];
        const quote = quotes[Math.floor(Math.random()* quotes.length)]
        console.log(quote)
        this.setState({
            currentText: quote.text,
            currentAuthor: quote.author
        })
      }
      componentDidMount(){
          this.randomQuote()
      }


    render() { 
        return ( 
            <div id="quote-box">
            <div className="quote-text">
              <span id="text">{this.state.currentText}</span>
            </div>
            <div className="quote-author">
              <span id="author">{this.state.currentAuthor}</span>
            </div>
            <div className="buttons">
              <a  className="button" onClick={this.randomQuote} id="new-quote"> New quote </a>
              <a href={this.tweetQuote()}  className="button" id="tweet-quote"> tweet this quote </a>
             
            </div>
        </div>
         );
    }
}
 
export default QuoteBox;