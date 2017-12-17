'use strict';

import React, {Component} from 'react';
import {getApps} from 'iOSAppsService';

import Nav from './navbar/Nav.jsx';
import Home from './Home.jsx';
import AppList from './ios-apps/AppList.jsx';
import Athena from './chatbots/Athena.jsx';
import BackToTop from './BackToTop.jsx';
import Footer from './Footer.jsx';

export default class Pryxma extends Component {
	constructor (props) {
		super(props);
		
		this.state = {
			iOSAppList: []
		};

		this.loadApps = this.loadApps.bind(this);
	}  

	loadApps () {
		getApps().then((apps) => {
			this.setState({
				iOSAppList: [...apps]
			});
		});
		
		// getApps().then(({data}) => {
		// 	this.setState({
		// 		iOSAppList: [...data]
		// 	});
		// }).catch((error) => {
		// 	// TODO: Handle error
		// });
	}

	componentDidMount() {
		this.loadApps();
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