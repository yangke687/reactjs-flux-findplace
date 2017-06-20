import React,{Component} from 'react';
import NavBar from './bill/navbar';
import Month from './bill/month';
import BillHeader from './bill/header';
import BillForm from './bill/form';
import Footer from './footer';

class AppBill extends Component{
	render(){
		return (
			<div className="bill clear">
				<NavBar />
				<div className="col-sm-9 col-md-9 mT100" style={{"backgroundColor":"#FFF"}}>
					<BillHeader />
					<Month />
					<BillForm />
				</div>
				<Footer />
			</div>
		);
	}
}

export default AppBill;