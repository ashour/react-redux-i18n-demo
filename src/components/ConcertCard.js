import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Card from 'react-bulma-components/lib/components/card';
import Media from 'react-bulma-components/lib/components/media';
import Content from 'react-bulma-components/lib/components/content';
import Heading from 'react-bulma-components/lib/components/heading';

class ConcertCard extends Component {
	render() {
		const { title, occursOn, description, imageUrl } = this.props.concert;

		return (
			<Card>
				<Card.Content>
					<Media>
						<Media.Item>
							<Heading size={4}>{title}</Heading>

							<Heading subtitle size={6}>
								<span>Happening</span>
								{' '}
								{occursOn}
							</Heading>
						</Media.Item>
					</Media>

					<Content>
						<p>{description}</p>
					</Content>
				</Card.Content>

				<Card.Image src={imageUrl} />
			</Card>
		);
	}
}

ConcertCard.propTypes = {
	concert: PropTypes.shape({
		id: PropTypes.number,
		title: PropTypes.string,
		description: PropTypes.string,
		imageUrl: PropTypes.string,
		occursOn: PropTypes.string,
	}).isRequired,
};

export default ConcertCard;
