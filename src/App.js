import React, { Component } from 'react';
import AddBook from './components/AddBook';
import BooksTable from './components/BooksTable';
import { v4 as uuid } from 'uuid';

import './App.css';

class App extends Component {
	state = {
		books: [],
	};

	componentDidMount() {
		const books = this.getBooks();
		this.setState({
			books,
		});
	}

	getBooks = () => {
		let books;
		if (localStorage.getItem('books') === null) {
			books = [];
		} else {
			books = JSON.parse(localStorage.getItem('books'));
		}
		return books;
	};

	addBook = (book) => {
		book.id = uuid();
		let books = [book, ...this.getBooks()];
		localStorage.setItem('books', JSON.stringify(books));
		this.setState({
			books,
		});
	};

	deleteBook = (id) => {
		let books = [...this.getBooks().filter((book) => book.id !== id)];
		localStorage.setItem('books', JSON.stringify(books));
		this.setState({
			books,
		});
	};

	render() {
		return (
			<div className="container">
				<AddBook addBook={this.addBook} />
				<BooksTable books={this.state.books} deleteBook={this.deleteBook} />
			</div>
		);
	}
}

export default App;
