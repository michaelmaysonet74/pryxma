import React from 'react';

export default function AppSubHeader({ info, subInfo }) {
	return (
		<div className="row center content content-top-radius">
			<h1 className="center title">
				{ info }
			</h1>
			<p className="lead center">
				{ subInfo }
			</p>
		</div>
	);
}
