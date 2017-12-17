'use strict';

import React, {Component} from 'react';
import $ from 'jquery';

export default class BackToTop extends Component {
	constructor (props) {
		super(props);

		this.state = {
			fadeClass:'',
			isHidden: true
		};
		this.toggleFade = this.toggleFade.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	toggleFade () {
		const newState = {};

		if (window.scrollY > 200) {
			newState.fadeClass = 'fade-in';
			newState.isHidden = false;
		} else if (!this.state.isHidden) {
			newState.fadeClass = 'fade-out';
		}	

		this.setState(newState);
	}

	handleClick (e) {
		e.preventDefault();
		
		$('html, body').animate({
			scrollTop: 0
		}, 500);
	}

	componentDidMount () {
		window.addEventListener('scroll', this.toggleFade);
	}

	componentWillUnmount () {
		window.removeEventListener('scroll', this.toggleFade);
	}
	
	render () {
		let {fadeClass, isHidden} = this.state;

		return (
			<div>
				<a 
					id="btnBackToTop" 
					className={`back-to-top ${fadeClass}`} 
					href="" 
					title="Back to Top"
					hidden={isHidden}
					onClick={this.handleClick}
					onTouchEnd={() => $('#btnBackToTop').trigger('mouseleave')}
				>
					<strong>
						<span 
							className="back-to-top-icon glyphicon glyphicon-menu-up">
						</span>
					</strong>
				</a>
			</div>
		);	
	}
}