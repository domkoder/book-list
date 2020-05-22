import React from 'react';

const Book = (props) => {
	const { title, author, isbn, id } = props.book;

	return (
		<tr>
			<td>{title}</td>
			<td>{author}</td>
			<td>{isbn}</td>
			<td>
				<button
					href="/#"
					className="delete"
					onClick={props.deleteBook.bind(this, id)}
				>
					X
				</button>
			</td>
		</tr>
	);
};

export default Book;
