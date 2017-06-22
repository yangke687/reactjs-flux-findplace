import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './bill/navbar';
import SearchBtn from './place/searchBtn';

import PlaceInfo from './place/placeInfo';
import PlaceDetail from './place/placeDetail';
import PlaceSiteTime from './place/placeSiteTime';
import PlaceDevice from './place/programDevice';
import AMap from './place/amap';
import Footer from './Footer';
import FixedBtn from './place/FixedBtn';

class AppPlace extends React.Component{
	componentDidMount() {
  	window.scrollTo(0,0);
	}
	render(){
		return (
			<div className="single-place clear">
				<NavBar />
				<div className="container clear">
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
				<Footer />
				<FixedBtn />
			</div>
		);
	}
}

export default AppPlace;