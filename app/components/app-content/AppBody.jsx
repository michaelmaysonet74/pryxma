'use strict';

import React from 'react';

function AppBody({contentClass, children}) {
	return (
		<div className={`row margin-bottom ${contentClass}`}>
			{children}
		</div>
	);
}

export default AppBody;