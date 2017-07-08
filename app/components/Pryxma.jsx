'use strict';

import React from 'react';

import Nav from './Nav.jsx';
import AppList from './ios-apps/AppList.jsx';
import Athena from './Athena.jsx';
import Footer from './Footer.jsx';

class Pryxma extends React.Component {

	render () {
		return (
			<div>  
				<div id="pryxma" className="container">
					<Nav />
					<div>
						<h2>Home</h2>
					</div>
					<AppList />
					<Athena />
					<Footer />
				</div>
			</div>
		);
	} 
}

export default Pryxma;