'use strict';

import React, {Component} from 'react';

import Section from './../Section.jsx';
import AppHeader from './../app-content/AppHeader.jsx';
import AppBody from './../app-content/AppBody.jsx';
import DownloadButton from './../app-content/SourceButton.jsx';
import Space from './../Space.jsx';
import ScreenShot from './../app-content/ScreenShot.jsx';

import {camelCaseIt} from 'Utils/strings-utils.js';

class iOSApp extends Component {

	renderScreenShots (screenshots, contentClass) {
		return screenshots.map((screenshot) => {
			screenshot.contentClass = contentClass;
			return (
				<ScreenShot 
					key={screenshot.id.toString()} 
					{...screenshot} 
				/>
			);
		});
	}

	render () {
		let {
			title, 
			subtitle,
			icon,
			contentClass,
			info,
			subInfo,
			screenshots,
			download
		} = this.props;

		const camelCaseTitle = camelCaseIt(title);

		return (
			<Section id={camelCaseTitle}>
				<AppHeader title={title} subtitle={subtitle} icon={icon} />
				<AppBody info={info} subInfo={subInfo} contentClass={contentClass}>
					{this.renderScreenShots(screenshots, contentClass)}
					{/* {ScreenShots(screenshots, contentClass)} */}
				</AppBody>
				<div className="row center">
					<div className="col-xs-12 col-md-4 col-lg-4 center"></div>
					<DownloadButton title="Download" sourceLink={download} />
					<div className="col-xs-12 col-md-4 col-lg-4 center"></div>
				</div>
				<Space size={3} />
				<hr />
			</Section>
		);
	}
}

export default iOSApp;