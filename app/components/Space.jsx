'use strict';

import React from 'react';

const renderBr = (size) => {
	let breaks = [];
	for (let i = 0; i < size; i++){
		 breaks.push(<br key={i.toString()} />);
	}

	return breaks;
} 

export default function Space({size, children}) {
	return (
		<div>
			{renderBr(size)}
			{children}
		</div>
	);
}