'use strict';

import React, {Component} from 'react';
import $ from 'jquery';

import AppHeader from './../app-content/AppHeader.jsx';
import AppSubHeader from './../app-content/AppSubHeader.jsx';
import AppBody from './../app-content/AppBody.jsx';
import Section from './../Section.jsx';
import Space from './../Space.jsx';
import GitHubButton from './../app-content/SourceButton.jsx';

export default class Athena extends Component {
	constructor (props) {
		super(props);

		this.state = {
			scaleClass: '',
			isScaled: false
		}
		this.scaleChat = this.scaleChat.bind(this);
	}

	scaleChat () {
		const li = document.getElementById('liAthena');
		if ((li.classList.contains('active')) && !this.state.isScaled) {
			this.setState({
				scaleClass: 'scale',
				isScaled: true
			});
		} 
	} 

	componentDidMount () {
		window.addEventListener('scroll', this.scaleChat);
		window.addEventListener('click', this.scaleChat);
	}

	componentWillUnmount () {
		window.removeEventListener('scroll', this.scaleChat);
		window.removeEventListener('click', this.scaleChat);
	}

	render () {
		return (
			<Section id="athena">
				 <AppHeader 
					title="Athena" 
					subtitle="Don't know the meaning of a word? Just ask!" 
					icon="bot.png" 
				/>
				{/* <AppSubHeader
					info="Real. Intelligent."
					subInfo="Understands natural language expressions based on Wit.ai Machine Learning technology."
					contentClass="athena-content"
				 /> */}
				 <div className="row center margin-top margin-bottom athena-content">
					<h1 className="center title">Real. Intelligent.</h1>
					<p className="lead center">Understands natural language expressions based on Wit.ai Machine Learning technology.</p>
					<div className="col-md-12">
						<iframe 
							id="athenaChat"
							className={this.state.scaleClass}
							src="https://webchat.botframework.com/embed/mmaysonet-athena?s=zojiyvdeDSk.cwA.oAQ.Y2Mz4MxGYqwqltninOz7Epw8kfj9KgZjh4KamFXJu5o">
						</iframe>
					</div>
				</div>
				
				{/* <AppBody contentClass="athena-content">
					<div className="col-md-12">
          	<iframe 
							id="athenaChat"
							className={this.state.scaleClass}
              src="https://webchat.botframework.com/embed/mmaysonet-athena?s=zojiyvdeDSk.cwA.oAQ.Y2Mz4MxGYqwqltninOz7Epw8kfj9KgZjh4KamFXJu5o">
  					 </iframe>
        	</div>
				</AppBody>  */}
				<GitHubButton
					title="GitHub"
					sourceLink="https://github.com/michaelmaysonet74/athena_es6"
					icon="github-icon fa fa-github"
				/>		
				<Space size={3} />		
			</Section>
		);
	}
}