'use strict';

import React from 'react';

class iOSApp extends React.Component {
	render () {
		let {title} = this.props;

		return (
			<div>
				<h3>
					{title}
				</h3>
			</div>
		);
	}
}

export default iOSApp;