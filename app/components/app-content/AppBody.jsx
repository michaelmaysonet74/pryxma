import React from 'react';

export default function AppBody({ children }) {
	return (
		<div className="row margin-bottom content content-bottom-radius">
			{ children }
		</div>
	);
}
