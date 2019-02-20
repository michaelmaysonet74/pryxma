import React, { Component } from 'react';

export default class Section extends Component {
	render() {
		let { id, children } = this.props;

		return (
			<div 
				id={ id } 
				className="container container-fluid content-container margin-bottom"
			>
				{ children }
			</div>
		);
	}
}
