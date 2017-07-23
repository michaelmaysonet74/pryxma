'use strict';

import React, {Component} from 'react';

class ScreenShot extends Component {
	render () {
		let {
			contentClass, 
			glyphicon, 
			title, 
			image
		} = this.props;
		return (
			<div className={`row margin-bottom ${contentClass}`}>
				<div className="col-sm-12 col-md-4 margin-top center">
					<h2 className="descriptive-title">
						<span className={`glyphicon ${glyphicon}`}></span> 
						{title} 
					</h2>
					<p>
						<img className="screen-image" src={image} />
					</p>
				</div>
			</div>
		);
	}	
};

export default ScreenShot;
	