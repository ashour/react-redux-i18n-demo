import React from 'react';
import Footer from 'react-bulma-components/lib/components/footer';
import Content from 'react-bulma-components/lib/components/content';
import Container from 'react-bulma-components/lib/components/container';

function AppFooter(props) {
	return (
		<Footer>
			<Container>
				<Content style={{ textAlign: 'center' }}>
					<p>
						This is a demo app created for the{' '}
						<a href="https://phrase.com/blog">Phrase blog</a>.{' '}
						Made with <a href="https://reactjs.org/">React</a>,{' '}
						<a href="https://redux.js.org/">Redux</a>,{' '}
						<a href="https://github.com/artisavotins/react-redux-i18n">react-redux-i18n</a>,{' '}
						and <a href="https://bulma.io/">Bulma</a>{' '}
						via <a href="https://github.com/couds/react-bulma-components">React-bulma-components</a>.
					</p>
				</Content>
			</Container>
		</Footer>
	);
}

export default AppFooter;
