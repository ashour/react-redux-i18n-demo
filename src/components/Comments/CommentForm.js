import PropTypes from "prop-types";
import { connect } from "react-redux";
import React, { Component } from "react";
import { Translate } from "react-redux-i18n";
import {
  Field,
  Label,
  Textarea,
} from "react-bulma-components/lib/components/form";
import Box from "react-bulma-components/lib/components/box";
import Button from "react-bulma-components/lib/components/button";
import Columns from "react-bulma-components/lib/components/columns";
import { prependCommentForConcert } from "../../redux/actions/comments";

class CommentForm extends Component {
  state = {
    text: "",
  };

  getRandomId() {
    return (
      this.props.activeConcertId * 10 +
      5 +
      Math.floor(Math.random() * 9) +
      Date.now()
    );
  }

  getCurrentDate() {
    return new Date().toISOString().substring(0, 10);
  }

  getMockCommentWithText(text) {
    return {
      text,
      id: this.getRandomId(),
      userName: "Random Randofski",
      commentedOn: this.getCurrentDate(),
      concertId: this.props.activeConcertId,
      profileImageUrl: "http://via.placeholder.com/64",
    };
  }

  isEmpty() {
    return this.state.text.trim().length === 0;
  }

  handleTextChange = e => this.setState({ text: e.target.value });

  postComment = () => {
    if (this.isEmpty()) {
      return;
    }

    this.props.prependCommentForConcert(
      this.props.activeConcertId,
      this.getMockCommentWithText(this.state.text),
    );

    this.setState({ text: "" });
  };

  render() {
    return (
      <Box>
        <Field>
          <Label htmlFor="text">
            <Translate value="comment_form.label" />
          </Label>

          <Textarea
            id="text"
            rows={2}
            value={this.state.text}
            onChange={this.handleTextChange}
          />

          <div className="mt-1">
            <Columns className="justify-right mt-1">
              <Columns.Column size="half">
                <Button
                  fullwidth
                  color="primary"
                  disabled={this.isEmpty()}
                  onClick={this.postComment}
                >
                  <Translate value="comment_form.button" />
                </Button>
              </Columns.Column>
            </Columns>
          </div>
        </Field>
      </Box>
    );
  }
}

CommentForm.propTypes = {
  activeConcertId: PropTypes.number,
  prependCommentForConcert: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  activeConcertId: state.concerts.activeConcertId,
});

const mapDispatchToProps = { prependCommentForConcert };

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
