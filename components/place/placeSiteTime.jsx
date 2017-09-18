import React from 'react';

class HoursItem extends React.Component{
	render(){
		return (
			<div className="weekArea">
				 <div className="week">{this.props.week}</div>
				{this.props.hours.map((hour,idx)=>{
					for(let key in hour){
						let val = hour[key];
						let className = val ? "programAvailable" : "nonavailable";
						if(idx%2){
							className += " calendarMargin";
						}
						return <div className={className} key={idx}></div>;
					}
				})}
			</div>
		);
	}
}

class PlaceSiteTime extends React.Component{
	render(){
		if(!this.props.place.available_hours){
			return <div>Loading...</div>;
		}
		return (
			<div className="clear programSiteTime">
				<div className="calendar clear">
					<h4 className="eachProgramTitle">适用时间</h4>
					<div className="calendar clear">
						<div className="weekArea">
							<div style={{"visibility":"hidden","minWidth": "50px","height":"22px"}}>week</div>
						    <div className="time">06:00</div>
						    <div className="time">08:00</div>
						    <div className="time">10:00</div>
						    <div className="time">12:00</div>
						    <div className="time">14:00</div>
						    <div className="time">16:00</div>
						    <div className="time">18:00</div>
						    <div className="time">20:00</div>
						    <div className="time">22:00</div>
						    <div className="time">00:00</div>
						    <div className="time">02:00</div>
						    <div className="time">04:00</div>
						</div>
						{this.props.place.available_hours.map((availableHours,i)=>{
							return <HoursItem {...availableHours} key={i} />;
						})}
					</div>
				</div>
				<div className="programSpace clear mT20">
					<h4 className="eachProgramTitle">场地单位</h4>
						<div className="spaceLogo clear">
								<h5 className="text-center">
									<a href="#">{this.props.place.title}</a>
								</h5>
						</div>
						<div className="text-center"> 
								<button className="btnBook book">我有问题</button>
						</div>
						<div className="programRemindArea">
								<p>请确认价格、人数、时段皆符合需求再进行点选预约，点选预约已确定遵守场地<b>使用规范</b>，场地确认预定以后，工作人员将电话联系您</p>
						</div>
				</div>
			</div>
		);
	}
}

export default PlaceSiteTime;