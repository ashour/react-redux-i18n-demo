import React from 'react';
import Section from 'react-bulma-components/lib/components/section';
import Progress from 'react-bulma-components/lib/components/progress';

class Loader extends React.Component {
	render() {
		return (
			<Section>
				<p className="is-size-6 has-text-centered mb-one-half">
					Loading
				</p>

				<Progress max={100} size="small" />
			</Section>
		);
	}
}

export default Loader;
