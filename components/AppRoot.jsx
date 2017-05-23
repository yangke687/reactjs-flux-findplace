import React from 'react';
import Header from './Header';
class AppRoot extends React.Component {
	render() {
		return (
		<div className="site-container">
			<div className="site-pusher">
				<Header />
			</div>
        </div>);
	}
};

export default AppRoot;