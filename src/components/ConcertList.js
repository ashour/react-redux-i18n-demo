import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import Section from 'react-bulma-components/lib/components/section';
import Progress from 'react-bulma-components/lib/components/progress';
import ConcertCard from './ConcertCard';
import ConcertListHeader from './ConcertListHeader';
import { setConcerts } from '../redux/actions/concerts';

class ConcertList extends Component {
	state = {
		isLoading: true,
	}

	componentDidMount() {
		fetch('/data/concerts.json')
			.then(response => response.json())
			.then((concerts) => {
				this.props.setConcerts(concerts);

				this.setState({ isLoading: false });
			});
	}

	getActiveConcert() {
		return this.props.concertList
			.find(({ id }) => id === this.props.activeConcertId);
	}

	renderLoading() {
		return (
			<Section>
				<p className="is-size-6 has-text-centered mb-one-half">
					Loading
				</p>

				<Progress max={100} size="small" />
			</Section>
		);
	}

	renderActiveConcert() {
		const activeConcert = this.getActiveConcert();

		return activeConcert ?
			<ConcertCard concert={activeConcert} /> :
			null;
	}

	renderContent() {
		return (
			<Section>
				<ConcertListHeader />

				<Columns>
					<Columns.Column>
						{this.renderActiveConcert()}
					</Columns.Column>

					<Columns.Column>
						<p>Comments</p>
					</Columns.Column>
				</Columns>
			</Section>
		);
	}

	render() {
		return this.state.isLoading ?
			this.renderLoading() :
			this.renderContent();
	}
}

ConcertList.propTypes = {
	activeConcertId: PropTypes.number,
	setConcerts: PropTypes.func.isRequired,
	concertList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
	concertList: state.concerts.concertList,
	activeConcertId: state.concerts.activeConcertId,
});

const mapDisptachToProps = { setConcerts };

export default connect(mapStateToProps, mapDisptachToProps)(ConcertList);
