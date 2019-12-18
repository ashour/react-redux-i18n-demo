import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Heading from "react-bulma-components/lib/components/heading";
import Loader from "../UI/Loader";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";
import { setCommentsForConcert } from "../../redux/actions/comments";

class CommentList extends React.Component {
  state = {
    isLoading: true,
  };

  fetchComments() {
    const { activeConcertId } = this.props;

    if (typeof activeConcertId !== "number") {
      return;
    }

    const commentList = this.props.commentMap[activeConcertId];

    if (commentList && commentList.length > 0) {
      return;
    }

    this.setState({ isLoading: true });

    fetch(`/data/comments/${activeConcertId}.json`)
      .then(response => response.json())
      .then(comments => {
        this.props.setCommentsForConcert(activeConcertId, comments);

        this.setState({ isLoading: false });
      });
  }

  getCommentList() {
    return this.props.commentMap[this.props.activeConcertId];
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
    const comments = this.getCommentList();

    return (
      <Heading subtitle size={4} renderAs="h3">
        {comments ? comments.length : 0} comments
      </Heading>
    );
  }

  renderContent() {
    const comments = this.getCommentList();

    return comments
      ? comments.map(comment => (
          <CommentCard key={comment.id} comment={comment} />
        ))
      : null;
  }

  renderWithLoadingIndicator() {
    return this.state.isLoading ? <Loader /> : this.renderContent();
  }

  render() {
    return (
      <>
        {this.renderHeader()}

        <CommentForm />

        {this.renderWithLoadingIndicator()}
      </>
    );
  }
}

CommentList.propTypes = {
  activeConcertId: PropTypes.number,
  commentMap: PropTypes.object.isRequired,
  setCommentsForConcert: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  commentMap: state.comments.commentMap,
  activeConcertId: state.concerts.activeConcertId,
});

const mapDispatchToProps = { setCommentsForConcert };

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
