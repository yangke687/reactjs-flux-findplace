import React from 'react';

class BlogUnit extends React.Component{
	render(){
		return (<div>
			<a href="#">
				<div className="blogUnit">
					<div className="blogImg" style={{"backgroundImage":"url("+this.props.img+")"}}></div>
					<h3>{this.props.name}</h3>
					<p>{this.props.desc}</p>
				</div>
			</a>
		</div>);
	}
}

class Blog extends React.Component{
	render(){
		return (
			<section className="blog">
				<div className="sectionWrapper">
					<div className="iconBlog"></div>
					<h3>场地志</h3>
					{this.props.posts.map((post,i)=>{
						return <BlogUnit key={i} {...post} />
					})}
					<a href="#">
						<button className="whiteOutlineBtn">更多精彩文章</button>
					</a>
				</div>
			</section>
		);
	}
}

export default Blog;