'use strict';

import React from 'react';
import IOSApp from './IOSApp.jsx';

function iOSAppList({iOSAppList}) {
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

export default iOSAppList;