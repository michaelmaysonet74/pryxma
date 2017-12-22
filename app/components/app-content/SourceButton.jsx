'use strict';

import React from 'react'; 

export default function SourceButton({title, sourceLink, icon}) {
	return (
		<div className="row center">
			<div className="col-xs-12 col-md-4 col-lg-4 center"></div>
			<div className="col-xs-12 col-md-4 col-lg-4 center">
				<a 
					className="btn btn-lg link" 
					target="_blank" 
					href={sourceLink}
				>
					{title + ' '}
					<span className={icon}></span>
				</a>
			</div>
			<div className="col-xs-12 col-md-4 col-lg-4 center"></div>
		</div>
	);
}
