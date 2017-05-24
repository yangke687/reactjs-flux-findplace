import React from 'react';
import Slider from 'react-slick';

class sliderShow extends React.Component{
	render(){
		let settings = {
	      infinite: true,
	      speed: 2000,
	      autoplaySpeed: 7000,
	      slidesToShow: 1,
	      slidesToScroll: 1,
	      arrows: false,
	      dots: false,
	      autoplay: true,
	      fade: true,
	      touchMove: false,
	      swipe: false,
	      className: 'slidesshow',
	    };
		return (
			<Slider {...settings}>
				<div>
					<div className="slide">
						<section className="slideImg second"></section>
						<p className="slideTitle">
							<span>Pickone 挑场地</span>
							<br />
							<span>帮您找到完美活动场地</span>
							<br />
							<span className="slideTagLine">希望美好的活动在各处发生，闲置空间都能被看见</span>
						</p>
					</div>
				</div>
				<div>
					<div className="slide">
						<section className="slideImg first"></section>
						<p className="slideTitle">
							<span>Pickone 挑场地</span>
							<br />
							<span>1000间场地 永远免费简单预约</span>
							<br />
							<span className="slideTagLine">希望美好的活动在各处发生，闲置空间都能被看见</span>
						</p>
					</div>
				</div>
			</Slider>
		);
	}
};

export default sliderShow;