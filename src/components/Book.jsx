import React from 'react';

const Book = (props) => {
	const { title, author, isbn } = props.book;
	return (
		<tr>
			<td>{title}</td>
			<td>{author}</td>
			<td>{isbn}</td>
			<td>
				<a href="#" className="delete">
					X
				</a>
			</td>
		</tr>
	);
};

export default Book;
