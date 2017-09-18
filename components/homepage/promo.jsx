import React from 'react';
import { PUBLIC_PATH } from '../../sources/config';

class Promo extends React.Component{
	render(){
		return (
			<a href="#" style={{display:'block'}}>
				<section className="promo">
					<img src={`${PUBLIC_PATH}/images/promo-12.jpg`} />
				</section>
			</a>
		);
	}
}

export default Promo;