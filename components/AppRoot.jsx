import React from 'react';
import AltContainer from 'alt-container';
import HomeStore from '../stores/HomeStore';

import Header from './Header';
import SliderShow from './homepage/slidershow';
import SearchForm from './homepage/searchForm';
import GalleryShow from './homepage/gallery';
import SelectedPlaces from './homepage/selectedPlaces';
import Promo from './homepage/promo';
import PlaceCategories from './homepage/placeCategories';

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
					<AltContainer store={HomeStore}>
						<SelectedPlaces />
					</AltContainer>
					<Promo />
					<AltContainer store={HomeStore}>
						<PlaceCategories />
					</AltContainer>
				</div>
			</div>
        </div>);
	}

	componentDidMount(){
		HomeStore.fetchSelectedPlaces();
		HomeStore.fetchPlaceCategories();
	}
};

export default AppRoot;