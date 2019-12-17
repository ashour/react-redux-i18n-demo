import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Heading from 'react-bulma-components/lib/components/heading';
import Loader from './Loader';
import CommentCard from './CommentCard';
import { setComments } from '../redux/actions/comments';

class CommentList extends React.Component {
	state = {
		isLoading: true,
	}

	fetchComments() {
		if (typeof this.props.activeConcertId !== 'number') { return; }

		this.setState({ isLoading: true });

		fetch(`/data/comments/${this.props.activeConcertId}.json`)
			.then(response => response.json())
			.then((comments) => {
				this.props.setComments(comments);

				this.setState({ isLoading: false });
			});
	}

	componentDidMount() {
		this.fetchComments();
	}

	componentDidUpdate(prevProps) {
		if (this.props.activeConcertId !== prevProps.activeConcertId) {
			this.fetchComments();
		}
	}

	renderHeader() {
		return (
			<Heading subtitle size={4} renderAs="h3">
				Comments
			</Heading>
		);
	}

	renderContent() {
		return this.props.commentList.map(comment => (
			<CommentCard key={comment.id} comment={comment} />
		));
	}

	renderWithLoadingIndicator() {
		return this.state.isLoading ? <Loader /> : this.renderContent();
	}

	render() {
		return (
			<>
				{this.renderHeader()}

				{this.renderWithLoadingIndicator()}
			</>
		);
	}
}

CommentList.propTypes = {
	activeConcertId: PropTypes.number,
	setComments: PropTypes.func.isRequired,
	commentList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
	commentList: state.comments.commentList,
	activeConcertId: state.concerts.activeConcertId,
});

const mapDispatchToProps = { setComments };

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
