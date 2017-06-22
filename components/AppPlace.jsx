import React from 'react';
import ReactDOM from 'react-dom';
import AltContainer from 'alt-container';
import NavBar from './bill/navbar';
import SearchBtn from './place/searchBtn';

import PlaceInfo from './place/placeInfo';
import PlaceDetail from './place/placeDetail';
import PlaceSiteTime from './place/placeSiteTime';
import PlaceDevice from './place/programDevice';
import AMap from './place/amap';
import Footer from './Footer';
import FixedBtn from './place/FixedBtn';

import PlaceStore from '../stores/PlaceStore';

class AppPlace extends React.Component{
	componentDidMount() {
  	window.scrollTo(0,0);
		PlaceStore.fetchPlace();
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
								<AltContainer store={PlaceStore}>
									<PlaceInfo />
									<PlaceDetail />
									<PlaceSiteTime />
									<PlaceDevice />
									<AMap />
								</AltContainer>
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