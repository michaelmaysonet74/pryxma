'use strict';

import React, {Component} from 'react';
import {
	capitalize, 
	concatWords, 
	camelCaseIt
} from 'Utils/strings-utils.js';

class NavTab extends Component {
	
	render () {
		let {title} = this.props;

		const capTitle = concatWords(capitalize(title));
		const camelCaseTitle = camelCaseIt(title);

		return (
			<li id={'li' + capTitle}>
				<a className="navbar-text-color" href={'#' + camelCaseTitle}>
					{title}
				</a>
			</li>
		);
	}
}

export default NavTab;