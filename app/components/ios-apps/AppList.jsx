'use strict';

import React from 'react';
import IOSApp from './IOSApp.jsx';

import {getApps} from 'iOSAppsService';

class iOSAppList extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			iOSAppList: []
		};
  }  
  
	loadApps () {
		const that = this;

		getApps().then((response) => {
			const {data} = response;

			that.setState({
				iOSAppList: [...data]
			});
		});
	}

  componentDidMount() {
		this.loadApps();
  }

	render () {
		const {iOSAppList} = this.state;

		const renderApps = () => {
			if (typeof iOSAppList !== 'undefined' && iOSAppList.length > 0) {

				return iOSAppList.map((app) => {
					return <IOSApp key={app.id} {...app} />
				});
			}
    };

		return (
			<div>
				<h2> iOS App List Component</h2>
				<div className="container">
					{renderApps()}
				</div>
			</div>	
		);
	}
}

export default iOSAppList;