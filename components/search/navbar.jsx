import React from 'react';

class NavBar extends React.Component{
	render(){
		return (
			<nav className="navbar navbar-default navbar-fixed-top">
				<div className="container" id="mobileNavbarArea">
					<div className="navbar-header">
			            <a className="mobilePickoneLogo" href="#">
			                <em>pickone&nbsp;挑場地&nbsp;替你挑選好場地</em>
			            </a>
			        </div>
				</div>
			</nav>
		);
	}
}

export default NavBar