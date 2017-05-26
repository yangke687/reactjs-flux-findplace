import React from 'react';

class PlaceItem extends React.Component{
	render(){
		return (
			<div>
				<a href="#">
					<div className="imgOneThird" style={{backgroundImage: "url('" + this.props.img + "')"}}>
						<div className="infoTag">{this.props.city}&nbsp;•&nbsp;{this.props.scale}</div>
						<div>{this.props.price}</div>
					</div>
				</a>
			</div>
		);
	}
}

class PlaceCategory extends React.Component{
	render(){
		return (
			<section className="sectionWrapper place-categories">
				<h2>{this.props.name}</h2>
				<p>{this.props.desc}</p>
				{this.props.places.map((place,i)=>{
					return <PlaceItem {...place} key={i} />
				})}
			</section>
		);
	}
}

class PlaceCategories extends React.Component{
	render(){
		return (
			<div>
			{this.props.placeCategories.map((cat,i)=>{
				return <PlaceCategory {...cat} key={i} />
			})}
			</div>
		);
	}	
}

export default PlaceCategories;