'use strict';

import React from 'react';
import {camelCaseIt} from 'Utils/strings-utils.js';

class iOSApp extends React.Component {
	render () {
		let {title} = this.props;
		const camelCaseTitle = camelCaseIt(title);

		return (
			<div id={camelCaseTitle} 
						className="container container-fluid content-container margin-top margin-bottom">
				<div className="row center">
					<div className="col-md-6 col-md-offset-3">
						<h1 className="app-title margin-top">
							{title}
						</h1>
					</div>
				</div>
			</div>
		);
	}
}

export default iOSApp;

{/* <div id="pixmint" class="container container-fluid content-container margin-top margin-bottom">
      <div class="row center">
        <div class="col-md-6 col-md-offset-3">
          <h1 class="app-title margin-top">Pixmint</h1>
          <p class="lead"> A palette of colors in the palm of your hands.</p>
					<p class="center">
						<img class="app-logo image" src="assets/img/palette.png">
					</p>
        </div>
      </div>
      <div class="row center pixmint-content">
        <h1 class="center title">Beautiful. Redesigned. </h1>
        <p class="lead center">Made for developers and designers.</p>
      </div>
      <div class="row margin-bottom pixmint-content">
        <div class="col-sm-12 col-md-4 margin-top center" >
          <h2 class="descriptive-title">
						<span class="glyphicon glyphicon-tasks"></span> 
						Hexadecimal Code 
					</h2>
          <p>
            <img class="screen-image" src="assets/img/pixmint1.png">
          </p>
        </div>
        <div class="col-sm-12 col-md-4 margin-top center">
          <h2 class="descriptive-title">
						<span class="glyphicon glyphicon-tint"></span> 
						RGB Values
				  </h2>
          <p>
            <img class="screen-image" src="assets/img/pixmint2.png">
          </p>
        </div>
        <div class="col-sm-12 col-md-4 margin-top center">
          <h2 class="descriptive-title">
						<span class="glyphicon glyphicon-phone"></span> 
						Available on iPad
					</h2>
					<p>
						<img class="screen-image" id="palette3" src="assets/img/pixmint3.png">
					</p>
        </div>
      </div>
      <div class="row center">
        <div class="col-xs-12 col-md-4 col-lg-4 center"></div>
        <div class="col-xs-12 col-md-4 col-lg-4 center">
					<a class="btn btn-lg link" target="_blank" href="https://itunes.apple.com/us/app/pixmint/id1084232768?mt=8">
							Download 
							<span class="download-icon glyphicon glyphicon-download"></span>
					</a>
        </div>
        <div class="col-xs-12 col-md-4 col-lg-4 center"></div>
      </div>
    </div>
    <br /> <br /> <br />
    <hr />  */}