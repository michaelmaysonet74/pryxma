'use strict';

import React from 'react';
import IOSApp from './IOSApp.jsx';

class iOSAppList extends React.Component {
	
	render () {
		const {iOSAppList} = this.props;
		//const {iOSAppList} = this.state;

		const renderApps = () => {
			if (typeof iOSAppList !== 'undefined' && iOSAppList.length > 0) {

				return iOSAppList.map((app) => {
					return <IOSApp key={app.id} {...app} />
				});
			}
    };  

		return (
			<div>
				{renderApps()}
			</div>	
		);
	}
}

export default iOSAppList;