'use strict';

import React from 'react';
import {
	upperFirst, 
	concatWords, 
	camelCaseIt
} from 'Utils/strings-utils.js';

class NavTab extends React.Component {
	render () {
		let {title} = this.props;

		const upperTitle = concatWords(upperFirst(title));
		const camelCaseTitle = camelCaseIt(title);

		return (
			<li id={'li' + upperTitle}>
				<a className="navbar-text-color" href={'#' + camelCaseTitle}>
					{title}
				</a>
			</li>
		);
	}
}

export default NavTab;