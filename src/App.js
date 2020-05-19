import React, { Component } from 'react';
import AddBook from './components/AddBook';
import BooksTable from './components/BooksTable';
import { v4 as uuid } from 'uuid';

import './App.css';

class App extends Component {
	state = {
		books: [
			{
				title: 'Book 1',
				author: 'Author 1',
				isbn: '94920482',
				id: uuid(),
			},
			{
				title: 'Book 2',
				author: 'Author 2',
				isbn: '94920482',
				id: uuid(),
			},
			{
				title: 'Book 3',
				author: 'Author 3',
				isbn: '94920482',
				id: uuid(),
			},
		],
	};

	addBook = (book) => {
		console.log(book);
		this.setState({
			books: book,
		});
	};

	render() {
		return (
			<div className="container">
				<AddBook addBook={this.addBook} />
				<BooksTable books={this.state.books} />
			</div>
		);
	}
}

export default App;
