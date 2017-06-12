import React from 'react';
import NavBar from './search/navbar';
import SearchBtn from './place/searchBtn';

import PlaceInfo from './place/placeInfo';
import PlaceDetail from './place/placeDetail';
import PlaceSiteTime from './place/placeSiteTime';
import PlaceDevice from './place/programDevice';
import AMap from './place/amap';

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
								<AMap />
								<div className="text-right">
                    				<button className="btnBook book btnEdge">我有问题</button>
               					</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AppPlace;