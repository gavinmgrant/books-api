import React, { Component } from 'react';
import './SearchBar.css';
import BookType from '../bookType/BookType';
import PrintType from '../printType/PrintType';

class SearchBar extends Component {
    render() {
        return (
            <div>
                <form 
                    className='searchBar'
                    onSubmit={e => this.props.handleSubmit(e)}>
                    Search:
                    <input
                        type='text'
                        className='searchBarInput'
                        placeholder='Search term...'
                        onChange={term => this.props.handleUpdate(term.target.value)}
                    />
                    <input type='submit' value="Submit" />
                </form>
                <label htmlFor="printType">Print Type:</label>
                    <PrintType
                        selectOptions={this.props.selectOptions}
                        printChangeHandler={this.props.printChangeHandler}
                    />
                <label htmlFor="bookType">Book Type:</label>
                    <BookType
                        selectOptions={this.props.selectOptions}
                        bookChangeHandler={this.props.bookChangeHandler}
                    />
            </div>
        );
    }
}

export default SearchBar;