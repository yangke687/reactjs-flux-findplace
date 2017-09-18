import React from 'react';
import {Link} from 'react-router';

class FixedBtn extends React.Component{
  constructor(props){
    super(props);
    const id = props.placeId? props.placeId: null;
    this.state = { id };
  }
	render(){
		return (
			<Link to={'/place-rent/bill/'+this.state.id} className="btn fixed-bottom btnDiscount">付款预定</Link>
		);
	}
}

export default FixedBtn;