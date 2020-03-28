import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc';
import { booksLoaded, booksRequested, booksError } from '../../actions';
import { compose } from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import './book-list.css';

class BookList extends Component {

	componentDidMount() {
		// destructing props
		const { bookstoreService,
			booksLoaded,
			booksRequested,
			booksError } = this.props;

		// loading action
		booksRequested();

		// loaded action
		bookstoreService.getBooks()
			.then((data) => booksLoaded(data))
			.catch((err) => booksError(err)); // error message
	};

	render() {
		const { books, loading, error } = this.props;

		// show loading message
		if (loading) {
			return <Spinner />
		};

		// show error message
		if (error) {
			return <ErrorIndicator />
		};

		// show books
		return (
			<ul className="book-list">
				{
					books.map((book) => {
						return (
							<li key={book.id}><BookListItem book={book} /></li>
						)
					})
				}
			</ul>
		);
	}
}

const mapStateToProps = ({ books, loading, error }) => {
	return { books, loading, error };
};

const mapDispatchToProps = {
	booksLoaded, booksRequested, booksError
};

export default compose(
	withBookstoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(BookList);