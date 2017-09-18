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

import PlaceActions from '../actions/PlaceActions';
import PlaceStore from '../stores/PlaceStore';

class AppPlace extends React.Component{
  constructor(props){
    super(props);
    const id = this.props? this.props.params.id: null;
    this.state = { id };
  }
	componentDidMount() {
  	window.scrollTo(0,0);
		PlaceActions.fetchPlace(this.state.id);
	}
	render(){
		return (
			<div className="single-place clear">
				<NavBar />
				<div className="container clear">
					<div className="row">
						{/* <SearchBtn /> */}
						<div className="col-xs-12 mT100">
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
				<FixedBtn placeId={this.state.id}/>
			</div>
		);
	}
}

export default AppPlace;