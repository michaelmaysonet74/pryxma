import React from 'react';

export default function AppBody({ info, subInfo, children }) {
	return (
		<div className="row margin-bottom content">
			<h1 className="center title">
				{ info }
			</h1>
			<p className="lead center">
				{ subInfo }
			</p>
			{ children }
		</div>
	);
}
