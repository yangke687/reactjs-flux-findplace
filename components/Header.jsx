import React from 'react';

class Header extends React.Component{
	render(){
		return (<div className="header">
			<a id="header__icon"></a>
			<a id="header__logo">
				<img id="logo" src="/dist/images/pickone_logo.png" />
			</a>
		</div>);
	}
}

export default Header;