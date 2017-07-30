'use strict';

import React from 'react';

export default function AppSubHeader ({info, subInfo, contentClass}) {
	return (
		<div className={`row center ${contentClass}`}>
			<h1 className="center title">
				{info}
			</h1>
			<p className="lead center">
				{subInfo}
			</p>
		</div>
	);
}