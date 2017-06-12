import React from 'react';
import NavBar from './search/navbar';
import SearchBtn from './place/searchBtn';

import PlaceInfo from './place/placeInfo';
import PlaceDetail from './place/placeDetail';
import PlaceSiteTime from './place/placeSiteTime';
import PlaceDevice from './place/programDevice';

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
								<PlaceDetail />
								<PlaceSiteTime />
								<PlaceDevice />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AppPlace;