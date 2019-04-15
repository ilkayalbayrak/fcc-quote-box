import React, { Component } from 'react';
import axios from 'axios';


class QuoteBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      quotes: [],
      error: null,

      currentQuote: null,
      currentAuthor: null
    }

    this.randomQuote = this.randomQuote.bind(this);
    this.tweetQuote = this.tweetQuote.bind(this);
    this.getQuotes = this.getQuotes.bind(this);

  }

  getQuotes() {
    axios.get(
      window.encodeURI(
        `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`,
      ),
    )
      .then(response => {
        const quotes = response.data.quotes;
        console.log(quotes)
        this.setState({
          quotes,
          loading: false
        }, () => {
          this.randomQuote()
        })
      })
      .catch(error => {
        this.setState({
          error: error,
          loading: false
        })
      })
  }

  componentDidMount() {
    this.getQuotes()
  }

  tweetQuote() {
    const tweetUrl = 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent('"' + this.state.currentQuote + '" -' + this.state.currentAuthor);
    return tweetUrl;
  }

   randomQuote() {
    const quotes = this.state.quotes
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
//    console.log(randomQuote.quote)
     this.setState({
        currentQuote: randomQuote.quote,
        currentAuthor: randomQuote.author
      })
  }


  renderLoading() {
    return (
      <div>
        Loading...
      </div>
    )
  }

  renderError() {
    return (
      <div>
        <div>
          Sorry, an error occurred:
          </div>
      </div>
    )
  }

  renderList() {
    const { error, currentAuthor, currentQuote } = this.state
    if (error) {
      console.log(error)
      return this.renderError()
    }

    return (

      <div id="quote-box">
        <div className="quote-text">
          <span id="text">{currentQuote}</span>
        </div>
        <div className="quote-author">
          <span id="author">- {currentAuthor}</span>
        </div>
        <div className="buttons">
          <a className="button" onClick={this.randomQuote} id="new-quote"> New Quote </a>
          <a href={this.tweetQuote()} className="button" id="tweet-quote"> Tweet </a>

        </div>
      </div>
    )
  }


  render() {
    return this.state.loading ? this.renderLoading() : this.renderList()
  }
}

export default QuoteBox;