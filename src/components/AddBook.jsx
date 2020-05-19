import React, { Component } from 'react';

class AddBook extends Component {
	state = {
		title: '',
		author: '',
		isbn: '',
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.addBook(this.state);
		this.setState({
			title: '',
			author: '',
			isbn: '',
		});
	};

	onChange = (e) => this.setState({ [e.target.name]: e.target.value });

	render() {
		return (
			<>
				<h1>Add Book</h1>
				<form id="book-form" onSubmit={this.onSubmit}>
					<div>
						<label for="title">Title</label>
						<input
							type="text"
							name="title"
							className="u-full-width"
							value={this.state.title}
							onChange={this.onChange}
						/>
					</div>
					<div>
						<label for="author">Author</label>
						<input
							type="text"
							name="author"
							className="u-full-width"
							value={this.state.author}
							onChange={this.onChange}
						/>
					</div>
					<div>
						<label for="isbn">ISBN#</label>
						<input
							type="text"
							name="isbn"
							className="u-full-width"
							value={this.state.isbn}
							onChange={this.onChange}
						/>
					</div>
					<div>
						<input type="submit" value="Submit" className="u-full-width" />
					</div>
				</form>
			</>
		);
	}
}

export default AddBook;
