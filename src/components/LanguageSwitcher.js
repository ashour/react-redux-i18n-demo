import React from 'react';
import Icon from 'react-bulma-components/lib/components/icon';
import Navbar from 'react-bulma-components/lib/components/navbar';

function LanguageSwitcher() {
	return (
		<Navbar.Item dropdown hoverable href="#">
			<Navbar.Link>
				<Icon>
					<span className="fas fa-globe" />
				</Icon>
				{' '}
				<span>Language</span>
			</Navbar.Link>

			<Navbar.Dropdown>
				<Navbar.Item href="#">English</Navbar.Item>
				<Navbar.Item href="#">Arabic</Navbar.Item>
			</Navbar.Dropdown>
		</Navbar.Item>
	);
}


export default LanguageSwitcher;