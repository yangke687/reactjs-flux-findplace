import React from 'react';
import NavBar from './search/navbar';
import SearchBtn from './place/searchBtn';

class AppPlace extends React.Component{
	render(){
		return (
			<div className="single-place">
				<NavBar />
				<div className="container">
					<div className="row">
						<SearchBtn />
					</div>
				</div>
			</div>
		);
	}
}

export default AppPlace;