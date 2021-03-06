import React from 'react';
import PlaceGallery from './placeGallery';
import { PUBLIC_PATH } from '../../sources/config';

class PlaceInfo extends React.Component{
	render(){
        if(!this.props.place.uses) {
            return (<div>Loading...</div>);
        }
		return (
			<div>
				<div className="clear programAreaTitle">
                    <div className="pull-left">
                        <h1 id="room_title">{this.props.place.title}</h1>
                        <h2 id="room_title">{this.props.place.excerpt}</h2>
                    </div>
                </div>
            	<div className="clear">
                    <div className="programShareArea">
                        <div className="tags">
                            <img src={`${PUBLIC_PATH}images/house.png`} /> 
                            <a href="#">{this.props.place.title}</a>
                        </div>
                        <div className="tags">
                            <img src={`${PUBLIC_PATH}/images/marker.png`} /> 
                            <a>{this.props.place.location}</a>
                        </div>
                        <div className="tags">
                            <img src={`${PUBLIC_PATH}/images/person.png`} />
                            <a>{this.props.place.min_people} ～ {this.props.place.max_people} 人</a>
                        </div>
                        <div className="tags">
                            <img src={`${PUBLIC_PATH}/images/tags.png`} />
                            {this.props.place.uses.map((use,i)=>{
                                return (<span><a href="#" key={i}> {use} </a> /</span>);
                            })}
                        </div>
                	</div>
                    <div className="pull-right mT20">
                        <span className="btn btnHour">价格 {this.props.place.price}/1hr</span>
                    </div>
                </div>
                <PlaceGallery gallery={this.props.place.gallery} />
            </div>
		);
	}
}

export default PlaceInfo;