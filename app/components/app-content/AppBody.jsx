'use strict';

import React, {Component} from 'react';

class AppBody extends Component {
	render () {
		let {info, subInfo, contentClass} = this.props;
		return (
			<div className={`row center ${contentClass}`}>
				<h1 class="center title">
					{info}
				</h1>
				<p className="lead center">
					{subInfo}
				</p>
				{this.props.children}
			</div>
		);
	}
}

export default AppBody;