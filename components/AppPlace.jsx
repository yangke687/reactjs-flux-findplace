import React from 'react';
import NavBar from './search/navbar';
import SearchBtn from './place/searchBtn';

import PlaceInfo from './place/placeInfo';

class AppPlace extends React.Component{
	render(){
		return (
			<div className="single-place">
				<NavBar />
				<div className="container">
					<div className="row">
						<SearchBtn />
						<div className="col-xs-12">
							<div className="mobileProgramArea">
								<PlaceInfo />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AppPlace;