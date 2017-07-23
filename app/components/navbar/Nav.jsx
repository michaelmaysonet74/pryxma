'use strict'; 

import React, {Component} from 'react';
import NavTab from './NavTab.jsx';

class Nav extends Component {

	constructor (props) {
		super(props);

		this.renderNavTabs = this.renderNavTabs.bind(this);
	}

	renderNavTabs (iOSAppList) {
		if (typeof iOSAppList !== 'undefined' && iOSAppList.length > 0) {
			return iOSAppList.map((app) => {
				return <NavTab key={app.id} title={app.title} />
			});
		}	
	}

	render () {
		const {iOSAppList} = this.props;

		return (
			<div id="mainNavbar" className="navbar navbar-fixed-top" >
				<div className="container">
					{/*TODO: Create NavHeader Component  */}
					<div className="navbar-header ">
						<button 
							type= "button" 
							id="navbarCollapseBtn" 
							className="navbar-toggle" 
							data-toggle="collapse" 
							data-target=".navbar-collapse">
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a 
							id="navbarTitle" 
							className="navbar-brand navbar-text-color" 
							href="">
							Pryxma
						</a>
					</div>
					<div className="collapse navbar-collapse">
						<ul className="nav navbar-nav">
							<li id="liHome" className="active" >
								<a className="navbar-text-color" href="#home">
									<span className="glyphicon glyphicon-home"></span>
								</a>
							</li>
							{this.renderNavTabs(iOSAppList)}
							<NavTab title="Athena" />
						</ul>
					</div>		
				</div>
			</div>	
		);
	}
}

export default Nav;