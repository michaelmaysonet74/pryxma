'use strict';

import React from 'react'; 

export default function SourceButton ({title, sourceLink}) {

	return (
		<div className="col-xs-12 col-md-4 col-lg-4 center">
			<a 
				className="btn btn-lg link" 
				target="_blank" 
				href={sourceLink}>
				{title}
				{/* TODO: Make glyphicon a prop */}
				<span 
					className="download-icon glyphicon glyphicon-download">
				</span>
			</a>
		</div>
	);
}
