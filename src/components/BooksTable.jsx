import React, { Component } from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

class BooksTable extends Component {
	render() {
		const { books } = this.props;
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
					{books ? (
						books.map((book) => (
							<Book
								deleteBook={this.props.deleteBook}
								book={book}
								key={book.id}
							/>
						))
					) : (
						<tr></tr>
					)}
				</tbody>
			</table>
		);
	}
}
BooksTable.propTypes = {
	books: PropTypes.array.isRequired,
};

export default BooksTable;
