import React from 'react';
import Header from './Header';
import SliderShow from './homepage/slidershow';
import SearchForm from './homepage/searchForm';
import GalleryShow from './homepage/gallery';

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
				</div>
			</div>
        </div>);
	}
};

export default AppRoot;