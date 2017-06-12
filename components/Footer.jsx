import React from 'react';

class Footer extends React.Component{
	render(){
		return (
			<div id="footer" className="clear">
				<div className="container">
					<div className="col-sm-12 col-xs-12">
				        <p className="footerWord">
				        本网站所有信息均由用户提供，如有侵犯您的知识版权，请联系我们，我们在接到投诉后将及时处理。 
				        </p>
				        <p className="footerWord">© pickone 挑场地 2014 All Rights Reserved</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;