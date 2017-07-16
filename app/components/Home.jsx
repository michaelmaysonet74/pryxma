'use strict';

import React, {Component} from 'react';

class Home extends Component {
	render () {

		return (
			<div id="home" 
					 className="container container-fluid content-container">
					 {/* style={{marginTop: '50px'}} */}
				<div className="row">
					<div id="topRow" className="col-md-6 col-md-offset-3">
						<h1>pryxma</h1>
						<p className="lead">
							A Colorful Way
						</p>
					</div> 
				</div>  	
			</div>
		);
	}
}

export default Home;