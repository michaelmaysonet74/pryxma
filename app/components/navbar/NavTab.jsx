'use strict';

import React from 'react';
import {
	capitalize, 
	concatWords, 
	camelCaseIt
} from 'Utils/strings-utils.js';

function NavTab(props) {
	let {
		title, 
		handleClick
	} = props;

	const capTitle = concatWords(capitalize(title));
	const camelCaseTitle = camelCaseIt(title);

	return (
		<li id={'li' + capTitle} onClick={handleClick}>
			<a className="navbar-text-color" href={'#' + camelCaseTitle}>
				{title}
			</a>
		</li>
	);
}

export default NavTab;