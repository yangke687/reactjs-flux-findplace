import React from 'react';
import Header from './Header';
import SliderShow from './homepage/slidershow';

class AppRoot extends React.Component {
	render() {
		return (
		<div className="site-container">
			<div className="site-pusher">
				<Header />
				<div className="site-content">
					<SliderShow />
				</div>
			</div>
        </div>);
	}
};

export default AppRoot;