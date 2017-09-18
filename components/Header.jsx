import React from 'react';
import { PUBLIC_PATH } from '../sources/config';

class Header extends React.Component{
	render(){
		return (<div className="header">
			<a id="header__icon"></a>
			<a id="header__logo">
				<img id="logo" src={`${PUBLIC_PATH}/images/pickone_logo.png`} />
			</a>
		</div>);
	}
}

export default Header;