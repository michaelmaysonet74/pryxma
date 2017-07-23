'use strict';

import React, {Component} from 'react';
import IOSApp from './IOSApp.jsx';

class iOSAppList extends Component {
	
	render () {
		const {iOSAppList} = this.props;
		
		const renderApps = () => {
			if (typeof iOSAppList !== 'undefined' && iOSAppList.length > 0) {

				return iOSAppList.map((app) => {
					return <IOSApp key={app.id.toString()} {...app} />
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