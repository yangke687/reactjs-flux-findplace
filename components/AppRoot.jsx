import React from 'react';
import HomeStore from '../stores/HomeStore';

import Header from './Header';
import SliderShow from './homepage/slidershow';
import SearchForm from './homepage/searchForm';
import GalleryShow from './homepage/gallery';
import SelectedPlaces from './homepage/selectedPlaces';

class AppRoot extends React.Component {
	render() {
		return (
		<div className="site-container">
			<div className="site-pusher">
				<Header />
				<div className="site-content">
					<SliderShow />
					<SearchForm />
					<GalleryShow />
					<SelectedPlaces />
				</div>
			</div>
        </div>);
	}

	componentDidMount(){
		HomeStore.fetchSelectedPlaces();
	}
};

export default AppRoot;