import React,{Component} from 'react';
import NavBar from './bill/navbar';
import Month from './bill/month';

class AppBill extends Component{
	render(){
		return (
			<div className="bill clear">
				<NavBar />
				<div className="col-sm-9 col-md-9 mT100" style={{"backgroundColor":"#FFF"}}>
					<div className="col-md-12">
						<Month />
					</div>
				</div>
			</div>
		);
	}
}

export default AppBill;