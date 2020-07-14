import React, { Component } from 'react';
import './App.css';
import SearchBar from './searchBar/SearchBar';
import ResultsList from './resultsList/ResultsList';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        printType: 'all',
        bookType: 'no-filter',
        searchTerm: '',
        searchResults: [],
        error: null
    }
  }

  setPrintSelected(sel) {
    this.setState({
      printType: sel
    });
  }

  setBookSelected(sel) {
    this.setState({
      bookType: sel
    });
  }

  updateSearchTerm(term) {
    this.setState({
      searchTerm: term
    });
  }

  handleSubmit(e) {
      e.preventDefault();
      console.log('Submit handled!');

      //Create a query string for search term
      const urlBase = 'https://www.googleapis.com/books/v1/volumes';
      const apiKey = 'AIzaSyCNJ_9I2iggqIy-b9i1Nwm63-vMU6eyaGQ';
      
      let printType = this.state.printType;
      let filter = 
        this.state.bookType !== 'no-filter'
          ? this.state.bookType
          : "";
      let searchTerm = this.state.searchTerm;

      const queryString = urlBase + '?q=' + searchTerm + '&' + filter + '&' + printType + '&key=' + apiKey

      console.log(queryString);

      //Execute the search using the Google Books API
      fetch(queryString)
        .then(res => {
            if (res.ok) {
              return res.json();
            }
            throw new Error('Something went wrong, try again.');
        })
        .then(data => {
          console.log(data);  
          this.setState({
            searchResults: data.items
            });
        })
        .catch(err => {
            this.setState({
            error: err.message
            });
        });
  }

  render() {
    const selectOptions = {
      printSelections: [
        'all', 
        'books', 
        'magazines'],
      bookSelections: [
        'no-filter',
        'partial',
        'full',
        'free-ebooks',
        'paid-ebooks',
        'ebooks'
      ]
    };
    
    const error = this.state.error ? (
      <div className="error">{this.state.error}</div>
    ) : ('');
    
    return (
      <main className='App'>
        <h1
          className='mainHeader'>
          Google Book Search
        </h1>
          <SearchBar 
            selectOptions={selectOptions}
            printChangeHandler={sel => this.setPrintSelected(sel)}
            bookChangeHandler={sel => this.setBookSelected(sel)}
            handleSubmit={e => this.handleSubmit(e)}
            handleUpdate={term => this.updateSearchTerm(term)}
          />
          <ResultsList 
            filterBookInfo={this.state.searchResults}
          />
          {error}
      </main>
    );
  } 
}

App.defaultProps = {
  searchResults: []
};

export default App;