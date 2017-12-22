'use strict';

import React, {Component} from 'react';

class Section extends Component {

	render() {
		let {id, children} = this.props;

		return (
			<div 
				id={id} 
				className="container container-fluid content-container margin-top margin-bottom">
				{children}
			</div>
		);
	}
}

export default Section;