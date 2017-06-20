import React from 'react';
import { Link } from 'react-router';

class PlaceItem extends React.Component{
	render(){
		var idx = this.props.idx;
		var length = this.props.length;
		var hr = null;
		// last element
		if(idx+1===length){
			hr = <hr className="rule" />;
		}
		return (
			<div>
				<Link to={'/place/'+this.props.id}>
					<div className="imgOneThird" style={{backgroundImage: "url('" + this.props.img + "')"}}>
						<div className="infoTag">{this.props.city}&nbsp;•&nbsp;{this.props.scale}</div>
						<div>{this.props.price}</div>
					</div>
				</Link>
				{hr}
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
					return <PlaceItem {...place} key={i} idx={i} length={this.props.places.length} />
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