import React, { Component } from 'react';
import Book from './Book';

class BooksTable extends Component {
	render() {
		return (
			<table className="u-full-width">
				<thead>
					<tr>
						<th>Title</th>
						<th>Author</th>
						<th>ISBN</th>
						<th></th>
					</tr>
				</thead>
				<tbody id="book-list">
					{this.props.books.map((book) => (
						<Book book={book} key={book.id} />
					))}
				</tbody>
			</table>
		);
	}
}

export default BooksTable;
