'use strict';

import React from 'react';
import {getApps} from 'iOSAppsService';

import Nav from './navbar/Nav.jsx';
import Home from './Home.jsx';
import AppList from './ios-apps/AppList.jsx';
import Athena from './Athena.jsx';
import BackToTop from './BackToTop.jsx';
import Footer from './Footer.jsx';

class Pryxma extends React.Component {
	constructor (props) {
		super(props);
		this.loadApps = this.loadApps.bind(this);

		this.state = {
			iOSAppList: []
		};
  }  
	
	componentDidMount() {
		this.loadApps();
  }
	
	loadApps () {
		getApps().then((apps) => {
			debugger;
			this.setState({
				iOSAppList: [...apps]
			});
		});
	// 	getApps().then((response) => {
	// 		const {data} = response;

	// 		this.setState({
	// 			iOSAppList: [...data]
	// 		});
	// 	}).catch((error) => {
	// 		//TODO: Handle error
	// 	});
	}

	render () {
		const {iOSAppList} = this.state;

		return (
			<div>  
				<Nav iOSAppList={iOSAppList} />
				<Home />
				<AppList iOSAppList={iOSAppList} />
				<Athena />
				<BackToTop />
				<Footer />
			</div>
		);
	} 
}

export default Pryxma;