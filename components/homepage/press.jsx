import React from 'react';

class Press extends React.Component{
	render(){
		return (
			<section className="press">
				<div className="sectionWrapper">
					<div>
						<p>媒体报道</p>
						<a href="#">
							<img alt="inside" src="http://www.pickoneplace.com/Assets/image/press-01.png" />
						</a>
						<a href="#">
							<img alt="数位时代" src="http://www.pickoneplace.com/Assets/image/press-02.png" />
						</a>
					</div>
					<div>
						<a href="#">
							<img alt="AppWorks" src="http://www.pickoneplace.com/Assets/image/press-05.png" />
						</a>
					</div>
				</div>
			</section>
		);
	}
}

export default Press;