import React from 'react';

let availableHours = [
	{
		week: '一',
		hours: [
			{ '6:00': true },  
			{ '6:30': true },  
			{ '7:00': true },
			{ '7:30': true },  
			{ '8:00': true },
			{ '8:30': true },  
			{ '9:00': true }, 
			{ '9:30': true },
			{ '10:00': true },
			{ '10:30': true },
			{ '11:00': true },  
			{ '11:30': true },  
			{ '12:00': true },
			{ '12:30': true },  
			{ '13:00': true },
			{ '13:30': true },  
			{ '14:00': true }, 
			{ '14:30': true },  
			{ '15:00': true },
			{ '15:30': true },  
			{ '16:00': true },
			{ '16:30': true },  
			{ '17:00': true },
			{ '17:30': true },  
			{ '18:00': true }, 
			{ '18:30': true },  
			{ '19:00': true },
			{ '19:30': true },  
			{ '20:00': true },
			{ '20:30': true },  
			{ '21:00': true },
			{ '21:30': true },   
			{ '22:00': true },
			{ '22:30': false },  
			{ '23:00': false },
			{ '23:30': false },
			{ '00:00': false },
			{ '00:30': false },
			{ '01:00': false },
			{ '01:30': false },
			{ '02:00': false },
			{ '02:30': false },
			{ '03:00': false },
			{ '03:30': false },
			{ '04:00': false },
			{ '04:30': false },
			{ '05:00': false },
			{ '05:30': false },
	 	]
	},
	{
		week: '二',
		hours: [
			{ '6:00': true },  
			{ '6:30': true },  
			{ '7:00': true },
			{ '7:30': true },  
			{ '8:00': true },
			{ '8:30': true },  
			{ '9:00': true }, 
			{ '9:30': true },
			{ '10:00': true },
			{ '10:30': true },
			{ '11:00': true },  
			{ '11:30': true },  
			{ '12:00': true },
			{ '12:30': true },  
			{ '13:00': true },
			{ '13:30': true },  
			{ '14:00': true }, 
			{ '14:30': true },  
			{ '15:00': true },
			{ '15:30': true },  
			{ '16:00': true },
			{ '16:30': true },  
			{ '17:00': true },
			{ '17:30': true },  
			{ '18:00': true }, 
			{ '18:30': true },  
			{ '19:00': true },
			{ '19:30': true },  
			{ '20:00': true },
			{ '20:30': true },  
			{ '21:00': true },
			{ '21:30': true },   
			{ '22:00': true },
			{ '22:30': false },  
			{ '23:00': false },
			{ '23:30': false },
			{ '00:00': false },
			{ '00:30': false },
			{ '01:00': false },
			{ '01:30': false },
			{ '02:00': false },
			{ '02:30': false },
			{ '03:00': false },
			{ '03:30': false },
			{ '04:00': false },
			{ '04:30': false },
			{ '05:00': false },
			{ '05:30': false },
	 	]
	},
	{
		week: '三',
		hours: [
			{ '6:00': true },  
			{ '6:30': true },  
			{ '7:00': true },
			{ '7:30': true },  
			{ '8:00': true },
			{ '8:30': true },  
			{ '9:00': true }, 
			{ '9:30': true },
			{ '10:00': true },
			{ '10:30': true },
			{ '11:00': true },  
			{ '11:30': true },  
			{ '12:00': true },
			{ '12:30': true },  
			{ '13:00': true },
			{ '13:30': true },  
			{ '14:00': true }, 
			{ '14:30': true },  
			{ '15:00': true },
			{ '15:30': true },  
			{ '16:00': true },
			{ '16:30': true },  
			{ '17:00': true },
			{ '17:30': true },  
			{ '18:00': true }, 
			{ '18:30': true },  
			{ '19:00': true },
			{ '19:30': true },  
			{ '20:00': true },
			{ '20:30': true },  
			{ '21:00': true },
			{ '21:30': true },   
			{ '22:00': true },
			{ '22:30': false },  
			{ '23:00': false },
			{ '23:30': false },
			{ '00:00': false },
			{ '00:30': false },
			{ '01:00': false },
			{ '01:30': false },
			{ '02:00': false },
			{ '02:30': false },
			{ '03:00': false },
			{ '03:30': false },
			{ '04:00': false },
			{ '04:30': false },
			{ '05:00': false },
			{ '05:30': false },
	 	]
	},
	{
		week: '四',
		hours: [
			{ '6:00': true },  
			{ '6:30': true },  
			{ '7:00': true },
			{ '7:30': true },  
			{ '8:00': true },
			{ '8:30': true },  
			{ '9:00': true }, 
			{ '9:30': true },
			{ '10:00': true },
			{ '10:30': true },
			{ '11:00': true },  
			{ '11:30': true },  
			{ '12:00': true },
			{ '12:30': true },  
			{ '13:00': true },
			{ '13:30': true },  
			{ '14:00': true }, 
			{ '14:30': true },  
			{ '15:00': true },
			{ '15:30': true },  
			{ '16:00': true },
			{ '16:30': true },  
			{ '17:00': true },
			{ '17:30': true },  
			{ '18:00': true }, 
			{ '18:30': true },  
			{ '19:00': true },
			{ '19:30': true },  
			{ '20:00': true },
			{ '20:30': true },  
			{ '21:00': true },
			{ '21:30': true },   
			{ '22:00': true },
			{ '22:30': false },  
			{ '23:00': false },
			{ '23:30': false },
			{ '00:00': false },
			{ '00:30': false },
			{ '01:00': false },
			{ '01:30': false },
			{ '02:00': false },
			{ '02:30': false },
			{ '03:00': false },
			{ '03:30': false },
			{ '04:00': false },
			{ '04:30': false },
			{ '05:00': false },
			{ '05:30': false },
	 	]
	},
	{
		week: '五',
		hours: [
			{ '6:00': true },  
			{ '6:30': true },  
			{ '7:00': true },
			{ '7:30': true },  
			{ '8:00': true },
			{ '8:30': true },  
			{ '9:00': true }, 
			{ '9:30': true },
			{ '10:00': true },
			{ '10:30': true },
			{ '11:00': true },  
			{ '11:30': true },  
			{ '12:00': true },
			{ '12:30': true },  
			{ '13:00': true },
			{ '13:30': true },  
			{ '14:00': true }, 
			{ '14:30': true },  
			{ '15:00': true },
			{ '15:30': true },  
			{ '16:00': true },
			{ '16:30': true },  
			{ '17:00': true },
			{ '17:30': true },  
			{ '18:00': true }, 
			{ '18:30': true },  
			{ '19:00': true },
			{ '19:30': true },  
			{ '20:00': true },
			{ '20:30': true },  
			{ '21:00': true },
			{ '21:30': true },   
			{ '22:00': true },
			{ '22:30': false },  
			{ '23:00': false },
			{ '23:30': false },
			{ '00:00': false },
			{ '00:30': false },
			{ '01:00': false },
			{ '01:30': false },
			{ '02:00': false },
			{ '02:30': false },
			{ '03:00': false },
			{ '03:30': false },
			{ '04:00': false },
			{ '04:30': false },
			{ '05:00': false },
			{ '05:30': false },
	 	]
	},
	{
		week: '六',
		hours: [
			{ '6:00': true },  
			{ '6:30': true },  
			{ '7:00': true },
			{ '7:30': true },  
			{ '8:00': true },
			{ '8:30': true },  
			{ '9:00': true }, 
			{ '9:30': true },
			{ '10:00': true },
			{ '10:30': true },
			{ '11:00': true },  
			{ '11:30': true },  
			{ '12:00': true },
			{ '12:30': true },  
			{ '13:00': true },
			{ '13:30': true },  
			{ '14:00': true }, 
			{ '14:30': true },  
			{ '15:00': true },
			{ '15:30': true },  
			{ '16:00': true },
			{ '16:30': true },  
			{ '17:00': true },
			{ '17:30': true },  
			{ '18:00': true }, 
			{ '18:30': true },  
			{ '19:00': true },
			{ '19:30': true },  
			{ '20:00': true },
			{ '20:30': true },  
			{ '21:00': true },
			{ '21:30': true },   
			{ '22:00': true },
			{ '22:30': false },  
			{ '23:00': false },
			{ '23:30': false },
			{ '00:00': false },
			{ '00:30': false },
			{ '01:00': false },
			{ '01:30': false },
			{ '02:00': false },
			{ '02:30': false },
			{ '03:00': false },
			{ '03:30': false },
			{ '04:00': false },
			{ '04:30': false },
			{ '05:00': false },
			{ '05:30': false },
	 	]
	},
	{
		week: '日',
		hours: [
			{ '6:00': true },  
			{ '6:30': true },  
			{ '7:00': true },
			{ '7:30': true },  
			{ '8:00': true },
			{ '8:30': true },  
			{ '9:00': true }, 
			{ '9:30': true },
			{ '10:00': true },
			{ '10:30': true },
			{ '11:00': true },  
			{ '11:30': true },  
			{ '12:00': true },
			{ '12:30': true },  
			{ '13:00': true },
			{ '13:30': true },  
			{ '14:00': true }, 
			{ '14:30': true },  
			{ '15:00': true },
			{ '15:30': true },  
			{ '16:00': true },
			{ '16:30': true },  
			{ '17:00': true },
			{ '17:30': true },  
			{ '18:00': true }, 
			{ '18:30': true },  
			{ '19:00': true },
			{ '19:30': true },  
			{ '20:00': true },
			{ '20:30': true },  
			{ '21:00': true },
			{ '21:30': true },   
			{ '22:00': true },
			{ '22:30': false },  
			{ '23:00': false },
			{ '23:30': false },
			{ '00:00': false },
			{ '00:30': false },
			{ '01:00': false },
			{ '01:30': false },
			{ '02:00': false },
			{ '02:30': false },
			{ '03:00': false },
			{ '03:30': false },
			{ '04:00': false },
			{ '04:30': false },
			{ '05:00': false },
			{ '05:30': false },
	 	]
	}
];

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
						{availableHours.map((availableHours,i)=>{
							return <HoursItem {...availableHours} key={i} />;
						})}
					</div>
				</div>
				<div className="programSpace clear mT20">
					<h4 className="eachProgramTitle">场地单位</h4>
					<div className="spaceLogo clear">
                        <h5 className="text-center">
                        	<a href="#">Treerful 小树屋｜古亭 302｜</a>
                        </h5>
                    </div>
                    <div className="text-center"> 
                        <button className="btnBook book">我有问题</button>
                    </div>
                    <div className="programRemindArea">
                        <p>请确认价格、人数、时段皆符合需求再进行点选预约，点选预约已确定遵守场地主之<b>使用规范</b>，场地确认预定以后，将以Email方式回复确认</p>
					</div>
				</div>
			</div>
		);
	}
}

export default PlaceSiteTime;