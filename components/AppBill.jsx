import React,{Component} from 'react';
import AltContainer from 'alt-container';

import NavBar from './bill/navbar';
import Month from './bill/month';
import BillHeader from './bill/header';
import BillForm from './bill/form';
import Footer from './Footer';

import BillStore from '../stores/BillStore';
import PlaceActions from '../actions/PlaceActions';

class AppBill extends Component{
  constructor(props) {
    super(props);
    const id = this.props? this.props.params.id: null;
    this.state = { id };
  }
	componentDidMount() {
  	window.scrollTo(0,0);
    PlaceActions.fetchPlace(this.state.id);
		BillStore.fetchMonthDays();
	}
	render(){
		return (
			<div className="bill clear">
				<NavBar />
				<div className="col-sm-9 col-md-9 mT100" style={{"backgroundColor":"#FFF"}}>
					<AltContainer store={BillStore}>
						<BillHeader />
						<Month />
						<BillForm />
					</AltContainer>
				</div>
				<Footer />
			</div>
		);
	}
}

export default AppBill;