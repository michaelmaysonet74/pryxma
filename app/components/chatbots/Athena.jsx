'use strict';

import React, {Component} from 'react';
import $ from 'jquery';

import AppHeader from './../app-content/AppHeader.jsx';
import Section from './../Section.jsx';
import Space from './../Space.jsx';
import GitHubButton from './../app-content/SourceButton.jsx';

const regex = /iOS|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
const domEvents = ['scroll', 'hashchange', 'load'];

class Athena extends Component {
	constructor(props) {
		super(props);

		this.state = {
			scaleClass: '',
			isScaled: false
		}
		this.scaleChat = this.scaleChat.bind(this);
	}

	scaleChat() {
		let isMobile = regex.test(navigator.userAgent);
		let scaleClass = isMobile ? 'mobileScale' : 'scale';

		const li = document.getElementById('liAthena');
		const section = document.getElementById('athena');
		const navbarHeight = $('.navbar').height();
		const isActive = (section.getBoundingClientRect().y - navbarHeight) <= navbarHeight;

		if ((li.classList.contains('active') || isActive) && !this.state.isScaled) {
			this.setState({
				scaleClass: scaleClass,
				isScaled: true
			});

			setTimeout(() => {
				$('html, body').animate({
					scrollTop: $(document).height()
				}, 250);
			}, 1400);		
		} 
	} 

	componentDidMount() {
		domEvents.forEach((e) => {
			window.addEventListener(e, this.scaleChat);
		});
	}

	componentWillUnmount() {
		domEvents.forEach((e) => {
			window.removeEventListener(e, this.scaleChat);
		});
	}

	render() {
		return (
			<Section id="athena">
				<AppHeader 
					title="Athena" 
					subtitle="Don't know the meaning of a word? Just ask!" 
					icon="bot.png" 
				/>
				
				<div className="row center margin-top margin-bottom athena-content">
					<h1 className="center title">Real. Intelligent.</h1>
					<p className="lead center">
						Understands natural language expressions based on Wit.ai Machine Learning technology.
					</p>
					<div className="col-md-12">
						<iframe 
							id="athenaChat"
							className={this.state.scaleClass}
							src="https://webchat.botframework.com/embed/mmaysonet-athena?s=zojiyvdeDSk.cwA.oAQ.Y2Mz4MxGYqwqltninOz7Epw8kfj9KgZjh4KamFXJu5o"
						>
						</iframe>
					</div>
				</div>
				
				<GitHubButton
					title="GitHub"
					sourceLink="https://github.com/michaelmaysonet74/athena"
					icon="github-icon fa fa-github"
				/>		
				<Space size={3} />		
			</Section>
		);
	}
}

export default Athena;