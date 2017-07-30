'use strict';

import React, {Component} from 'react';
import {removeExtension} from 'Utils/strings-utils.js';

class ScreenShot extends Component {

	render () {
		let {
			title, 	
			glyphicon, 
			image
		} = this.props;

		return (	
			<div className="col-sm-12 col-md-4 margin-top center">
				<h2>
					<span className={`glyphicon ${glyphicon}`}></span> 
					{' ' + title} 
				</h2>
				<p>
					<img 
						id={removeExtension(image, '.png')} 
						className="screenshot" 
						src={`assets/screenshots/${image}`}
					/>
				</p>
			</div>
		);
	}	
};

export default ScreenShot;
	