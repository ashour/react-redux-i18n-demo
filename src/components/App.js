import React from 'react';
import AppBar from './AppBar';
import AppFooter from './AppFooter';
import ConcertList from './ConcertList';

function App() {
	return (
		<>
			<AppBar />

			<ConcertList />

			<AppFooter />
		</>
	);
}

export default App;
