'use strict';

import React, {Component} from 'react';

class AppBody extends Component {

	render () {
		let {contentClass, children} = this.props;

		return (
			<div className={`row margin-bottom ${contentClass}`}>
				{children}
			</div>
		);
	}
}

export default AppBody;