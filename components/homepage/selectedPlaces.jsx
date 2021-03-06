import React from 'react';
import { Link } from 'react-router';

class SelectedPlaceItem extends React.Component{
	render(){
		return (<div>
			<Link to={'/place/'+this.props.id}>
				<article className="imgUnitLong">
					<div className="imgLong" style={{backgroundImage: "url('" + this.props.img + "')"}}></div>
					<h3>{this.props.name}</h3>
				</article>
			</Link>
		</div>);
	}
}

class SelectedPlaces extends React.Component{
	render(){
		return (
			<section className="sectionWrapper selected-places">
				<hr className="rule" />
				<div className="iconHouse"></div>
				<h3>精选场地</h3>
				{this.props.selectedPlaces.map((place,i)=>{
					return <SelectedPlaceItem key={i} {...place} />
				})}
			</section>);
	}
}

export default SelectedPlaces;