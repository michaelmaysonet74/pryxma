'use strict';

import React, {Component} from 'react';

class Section extends Component {

	render () {

		let {id} = this.props;

		return (
			<div 
				id={id} 
				className="container container-fluid content-container margin-top margin-bottom">

				{this.props.children}

			</div>
		);
	}
}

export default Section;