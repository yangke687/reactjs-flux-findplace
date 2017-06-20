import React from 'react';
import { Link } from 'react-router';

class SearchResultsItem extends React.Component{
	render(){
		return (<div className="mobileSearchResltArea">
			<Link to={'/place/'+this.props.id} className="logProgramClick">
				<div className="searchProgramImgArea" 
					style={{"backgroundImage":"url('" + this.props.img +"')"}}></div>
			</Link>
			<div className="searchProgramContentArea">
				<a href="#">
					<h2>【{this.props.name}】{this.props.desc}</h2>
				</a>
				<div className="saerchProgramIconArea">
					<div className="mD5">
                        <span className="programIcon">
                        	<img src="/images/house.png" />
                        	<a href="#">{this.props.name}</a>
                        </span>
                    </div>
                    <div className="mD5">
                        <span className="programIcon">
                        <img src="/images/marker.png" />{this.props.county}</span>
                        <span className="programIcon">
                        <img src="/images/person.png" />{this.props.max_people}</span>
                    </div>
					<div className="mD5">
                        <span className="programIcon">
                    		<img src="/images/tags.png" />
                    		{this.props.uses.map((use,i)=>{
                    			return  (<span><a href="#" className="use" key={i}>{use}</a><b>/</b></span>);
                    		})}
                        </span>
                    </div>
                    <div style={{"textAlign": "center"}}>
                        <a className="logProgramClick" href="#">
                            <span className="btn btnHour">{this.props.price}</span>
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