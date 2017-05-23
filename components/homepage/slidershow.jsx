import React from 'react';

class sliderShow extends React.Component{
	render(){
		return (
			<div id="slidesshow">
				<div className="slide">
					<section className="slideImg"></section>
					<p className="slideTitle">
						<span>Pickone 挑场地</span>
						<br />
						<span>帮您找到完美活动场地</span>
						<br />
						<span className="slideTagLine">希望美好的活动在各处发生，闲置空间都能被看见</span>
					</p>
				</div>
				<div className="slide" style={{"display": "none"}}>
					<section className="slideImg"></section>
					<p className="slideTitle">
						<span>Pickone 挑场地</span>
						<br />
						<span>1000间场地 永远免费简单预约</span>
						<br />
						<span className="slideTagTitle">希望美好的活动在各处发生，闲置空间都能被看见</span>
					</p>
				</div>
			</div>
		);
	}
};

export default sliderShow;