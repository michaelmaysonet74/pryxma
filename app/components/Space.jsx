'use strict';

import React from 'react';

export default function Space ({size}) {
	return (
			<div>
				{() => {
					for (let i = 0; i < size; i++){
						return <br />
					}
				}}
			</div>
		);
}