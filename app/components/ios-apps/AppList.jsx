'use strict';

import React, {Component} from 'react';
import IOSApp from './IOSApp.jsx';

class iOSAppList extends Component {
	
	render () {
		const {iOSAppList} = this.props;
		
		const renderApps = () => {
			if (typeof iOSAppList !== 'undefined' && iOSAppList.length > 0) {

				return iOSAppList.map((app) => {
					return (
						<div key={app.id}>
							<IOSApp {...app} />
							<hr />
						</div>
					);
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