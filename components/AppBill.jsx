import React,{Component} from 'react';
import NavBar from './bill/navbar';
import Month from './bill/month';
import BillHeader from './bill/header';

class AppBill extends Component{
	render(){
		return (
			<div className="bill clear">
				<NavBar />
				<div className="col-sm-9 col-md-9 mT100" style={{"backgroundColor":"#FFF"}}>
					<BillHeader />
					<Month />
				</div>
			</div>
		);
	}
}

export default AppBill;