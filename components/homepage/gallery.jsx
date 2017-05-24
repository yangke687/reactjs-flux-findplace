import React from 'react';
import Slider from 'react-slick';

class Gallery extends React.Component{
	render(){
		let settings = {
			dots: false,
			infinite: false,
			centerMode: true,
			touchMove: false,
	      	swipe: false,
			className: 'galleryshow'
		};
		return (
			<section className="gallerywrapper">
				<Slider  {...settings}>
					<div>
						<div className="galleryThumb">
							<h3>课程讲座</h3>
							<img src="/dist/images/event_icons-01.png" alt="" />
							<a href="#">查看方案</a>
						</div>
					</div>
			        <div>
			        	<div className="galleryThumb">
			        		<h3>派对</h3>
			        		<img src="/dist/images/event_icons-03.png" alt="" />
							<a href="#">查看方案</a>
			        	</div>
			        </div>
			        <div>
			        	<div className="galleryThumb">
			        		<h3>会议</h3>
			        		<img src="/dist/images/event_icons-05.png" alt="" />
							<a href="#">查看方案</a>
			        	</div>
			        </div>
			        <div>
			        	<div className="galleryThumb">
			        		<h3>聚会餐饮</h3>
			        		<img src="/dist/images/event_icons-06.png" alt="" />
							<a href="#">查看方案</a>
			        	</div>
			        </div>
			        <div>
			        	<div className="galleryThumb">
			        		<h3>拍摄摄影</h3>
			        		<img src="/dist/images/event_icons-07.png" alt="" />
							<a href="#">查看方案</a>
			        	</div>
			        </div>
			        <div>
			        	<div className="galleryThumb">
			        		<h3>发表会</h3>
			        		<img src="/dist/images/event_icons-04.png" alt="" />
							<a href="#">查看方案</a>
			        	</div>
			        </div>
			        <div>
			        	<div className="galleryThumb">
			        		<h3>音乐表演</h3>
			        		<img src="/dist/images/event_icons-08.png" alt="" />
							<a href="#">查看方案</a>
			        	</div>
			        </div>
			        <div>
			        	<div className="galleryThumb">
			        		<h3>静态展览</h3>
			        		<img src="/dist/images/event_icons-09.png" alt="" />
							<a href="#">查看方案</a>
			        	</div>
			        </div>
			        <div>
			        	<div className="galleryThumb">
			        		<h3>教育训练</h3>
			        		<img src="/dist/images/event_icons-02.png" alt="" />
							<a href="#">查看方案</a>
			        	</div>
			        </div>
				</Slider>
			</section>
		);
	}
}

export default Gallery;