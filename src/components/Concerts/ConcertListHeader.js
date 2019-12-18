import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import Tag from 'react-bulma-components/lib/components/tag';
import Icon from 'react-bulma-components/lib/components/icon';
import Level from 'react-bulma-components/lib/components/level';
import Button from 'react-bulma-components/lib/components/button';
import Heading from 'react-bulma-components/lib/components/heading';
import { goToNextConcert, goToPrevConcert } from '../../redux/actions/concerts';

class ConcertListHeader extends Component {
	handleNextButtonClicked = (e) => {
		this.props.goToNextConcert();
	}

	handlePrevButtonClicked = (e) => {
		this.props.goToPrevConcert();
	}

	renderTitle() {
		return (
			<Heading>
				Shows
				{' '}
				<Tag color="primary" size="large">
					{this.props.concertCount}
				</Tag>
			</Heading>
		);
	}

	renderNavButtons() {
		return (
			<>
				<Button onClick={this.handlePrevButtonClicked}>
					<Icon>
						<span className="fas fa-chevron-left fa-lg" />
					</Icon>
				</Button>

				<Button onClick={this.handleNextButtonClicked}>
					<Icon>
						<span className="fas fa-chevron-right fa-lg" />
					</Icon>
				</Button>
			</>
		);
	}

	render() {
		return (
			<Level>
				<Level.Side align="left">
					<Level.Item>
						{this.renderTitle()}
					</Level.Item>
				</Level.Side>

				<Level.Side align="right">
					<Level.Item>
						{this.renderNavButtons()}
					</Level.Item>
				</Level.Side>
			</Level>
		);
	}
}

ConcertListHeader.propTypes = {
	concertCount: PropTypes.number.isRequired,
	goToNextConcert: PropTypes.func.isRequired,
	goToPrevConcert: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	concertCount: state.concerts.concertList.length,
});

const mapDispatchToProps = { goToNextConcert, goToPrevConcert };

export default connect(mapStateToProps, mapDispatchToProps)(ConcertListHeader);
