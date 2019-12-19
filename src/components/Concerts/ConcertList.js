import PropTypes from "prop-types";
import { connect } from "react-redux";
import React, { Component } from "react";
import Columns from "react-bulma-components/lib/components/columns";
import Section from "react-bulma-components/lib/components/section";
import Loader from "../UI/Loader";
import ConcertCard from "./ConcertCard";
import CommentList from "../Comments/CommentList";
import ConcertListHeader from "./ConcertListHeader";
import { setConcerts } from "../../redux/actions/concerts";

class ConcertList extends Component {
  state = {
    isLoading: true,
  };

  fetchConcerts() {
    fetch(`/data/concerts/${this.props.locale}.json`)
      .then(response => response.json())
      .then(concerts => {
        this.props.setConcerts(concerts);
        this.setState({ isLoading: false });
      });
  }

  componentDidMount() {
    this.fetchConcerts();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.locale === this.props.locale) {
      return;
    }

    this.fetchConcerts();
  }

  getActiveConcert() {
    return this.props.concertList.find(
      ({ id }) => id === this.props.activeConcertId,
    );
  }

  renderActiveConcert() {
    const activeConcert = this.getActiveConcert();

    return activeConcert ? <ConcertCard concert={activeConcert} /> : null;
  }

  renderContent() {
    return (
      <Section>
        <ConcertListHeader />

        <Columns>
          <Columns.Column>{this.renderActiveConcert()}</Columns.Column>

          <Columns.Column>
            <CommentList />
          </Columns.Column>
        </Columns>
      </Section>
    );
  }

  renderWithLoadingIndicator() {
    return this.state.isLoading ? <Loader /> : this.renderContent();
  }

  render() {
    return this.renderWithLoadingIndicator();
  }
}

ConcertList.propTypes = {
  activeConcertId: PropTypes.number,
  locale: PropTypes.string.isRequired,
  setConcerts: PropTypes.func.isRequired,
  concertList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  locale: state.i18n.locale,
  concertList: state.concerts.concertList,
  activeConcertId: state.concerts.activeConcertId,
});

const mapDisptachToProps = { setConcerts };

export default connect(mapStateToProps, mapDisptachToProps)(ConcertList);
