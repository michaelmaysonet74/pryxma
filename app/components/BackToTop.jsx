'use strict';

import React, {Component} from 'react';

class BackToTop extends Component {
	
	render () {
		
		return (
			<div>
				<a id="btnBackToTop" 
				 className="back-to-top" 
				 href="" 
				 title="Back to Top">
					<strong>
						<span className="back-to-top-icon glyphicon glyphicon-menu-up">
						</span>
					</strong>
				</a>
			</div>
		);
	}
}

export default BackToTop;