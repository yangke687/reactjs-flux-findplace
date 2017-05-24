import React from 'react';
import Slider from 'react-slick';

class Gallery extends React.Component{
	render(){
		let settings = {
			dots: false,
			centerMode: true,
			touchMove: false,
	      	swipe: false,
			className: 'galleryshow'
		};
		return (
			<section className="gallerywrapper">
				<Slider  {...settings}>
					<div>
						<div className="galleryThumb"></div>
					</div>
			        <div>
			        	<div className="galleryThumb"></div>
			        </div>
			        <div>
			        	<div className="galleryThumb"></div>
			        </div>
			        <div>
			        	<div className="galleryThumb"></div>
			        </div>
			        <div>
			        	<div className="galleryThumb"></div>
			        </div>
			        <div>
			        	<div className="galleryThumb"></div>
			        </div>
				</Slider>
			</section>
		);
	}
}

export default Gallery;