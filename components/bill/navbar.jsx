import React,{Component} from 'react';
import { PUBLIC_PATH } from '../../sources/config';

export default class NavBar extends Component{
	render(){
		return (
			<div className="navbar navGary navbar-fixed-top">
				<div className="container clear">
					<div className="part">
						<div className="pickoneLogoArea">
							<a href="#" className="pickoneLogo">
								<img src={`${PUBLIC_PATH}/images/gfwy.png`} />
							</a>
						</div>
					</div>
					<div className="part">
						<span className="pickoneSlogan">
							挑场地  |  替你挑选好场地
						</span>
					</div>
				</div>
			</div>
		);
	}
};