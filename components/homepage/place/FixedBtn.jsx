import React from 'react';
import {Link} from 'react-router';

class FixedBtn extends React.Component{
	render(){
		return (
			<Link to="/bill/1" className="btn fixed-bottom btnDiscount">付款预定</Link>
		);
	}
}

export default FixedBtn;