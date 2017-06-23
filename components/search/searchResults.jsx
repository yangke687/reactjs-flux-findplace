import React from 'react';
import { Link } from 'react-router';

class SearchResultsItem extends React.Component{
	render(){
		return (<div className="mobileSearchResltArea" key={this.props.id}>
			<Link to={'/place/'+this.props.id} className="logProgramClick">
				<div className="searchProgramImgArea" 
					style={{"backgroundImage":"url('" + this.props.img +"')"}}></div>
			</Link>
			<div className="searchProgramContentArea">
				<Link to={'/place/'+this.props.id}>
					<h2>【{this.props.title}】{this.props.excerpt}</h2>
				</Link>
				<div className="saerchProgramIconArea">
					<div className="mD5">
                        <span className="programIcon">
                        	<img src="/images/house.png" />
                        	<a href="#">{this.props.title}</a>
                        </span>
                    </div>
                    <div className="mD5">
                        <span className="programIcon">
                        <img src="/images/marker.png" />{this.props.location}</span>
                        <span className="programIcon">
                        <img src="/images/person.png" />{this.props.min_people}~{this.props.max_people}人</span>
                    </div>
					<div className="mD5">
                        <span className="programIcon">
                    		<img src="/images/tags.png" />
                    		{this.props.uses.map((use,i)=>{
                    			return  (<span key={i}><a href="#" className="use" key={i}>{use}</a><b>/</b></span>);
                    		})}
                        </span>
                    </div>
                    <div style={{"textAlign": "center"}}>
                        <a className="logProgramClick" href="#">
                            <span className="btn btnHour">总价 {this.props.price}/hr</span>
                        </a>
                    </div>
				</div>
			</div>
		</div>);
	}
}

class SearchResults extends React.Component{
	render(){
		return (<div id="searchResult" className="mT20 col-xs-12">
			{this.props.searchPlaces.map((place,i)=>{
				return <SearchResultsItem key={i} {...place} />
			})}
		</div>);
	}
}

export default SearchResults;