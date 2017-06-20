import React,{ Component } from 'react';
import _ from 'lodash';

const data = [
  [{time:'00:00 ~ 00:30',stat:false},{time:'00:30 ~ 01:00',stat:false},{time:'01:00 ~ 01:30',stat:false},{time:'01:30 ~ 02:00',stat:false},{time:'02:00 ~ 02:30',stat:false},{time:'02:30 ~ 03:00',stat:false},{time:'03:00 ~ 3:30',stat:false},{time:'03:30 ~ 04:00',stat:false}],
  [{time:'04:00 ~ 04:30',stat:false},{time:'04:30 ~ 05:00',stat:false},{time:'05:00 ~ 05:30',stat:false},{time:'05:30 ~ 06:00',stat:false},{time:'06:00 ~ 06:30',stat:true},{time:'06:30 ~ 07:00',stat:true},{time:'07:00 ~ 7:30',stat:true},{time:'07:30 ~ 08:00',stat:true}],
  [{time:'08:00 ~ 08:30',stat:true},{time:'08:30 ~ 09:00',stat:true},{time:'91:00 ~ 09:30',stat:true},{time:'09:30 ~ 10:00',stat:true},{time:'10:00 ~ 10:30',stat:true},{time:'10:30 ~ 11:00',stat:true},{time:'11:00 ~ 11:30',stat:true},{time:'11:30 ~ 12:00',stat:true}],
  [{time:'12:00 ~ 12:30',stat:true},{time:'12:30 ~ 13:00',stat:true},{time:'13:00 ~ 13:30',stat:true},{time:'13:30 ~ 14:00',stat:true},{time:'14:00 ~ 14:30',stat:true},{time:'14:30 ~ 15:00',stat:true},{time:'15:00 ~ 15:30',stat:true},{time:'15:30 ~ 16:00',stat:true}],
  [{time:'16:00 ~ 16:30',stat:true},{time:'16:30 ~ 17:00',stat:true},{time:'17:00 ~ 17:30',stat:true},{time:'17:30 ~ 18:00',stat:false},{time:'18:00 ~ 18:30',stat:false},{time:'18:30 ~ 19:00',stat:false},{time:'19:00 ~ 19:30',stat:false},{time:'19:30 ~ 20:00',stat:false}],
  [{time:'20:00 ~ 20:30',stat:false},{time:'20:30 ~ 21:00',stat:false},{time:'21:00 ~ 21:30',stat:false},{time:'21:30 ~ 22:00',stat:false},{time:'22:00 ~ 22:30',stat:true},{time:'22:30 ~ 23:00',stat:true},{time:'23:00 ~ 23:30',stat:false},{time:'23:30 ~ 24:00',stat:false}],
];

class TimeList extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTimes: []
    }
  }

  handleTimeClick(time) {
    if(!time.stat) {
      return;
    }
    if(!_.contains(this.state.selectedTimes,time.time)) {
      this.setState({
        selectedTimes: [ ...this.state.selectedTimes, time.time ]
      });
    } else {
      this.setState({
        selectedTimes: _.reject(this.state.selectedTimes, item => item === time.time )
      });
    }
  }

  renderTime(times) {
    return times.map((time,idx) => {
     let cls = 'choiceTime';
     if(time.stat) {
       cls += ' ableTime';
     }
     if(_.contains(this.state.selectedTimes,time.time)) {
       cls += ' selectedTime';
     }
     return <li onClick={this.handleTimeClick.bind(this,time)} className={cls} key={idx}><span>{time.time}</span></li>;
    });
  }

  renderBlocks(timeBlocks) {
    return timeBlocks.map((block,idx) => {
     return (
       <ul className="choiceTimeArea" key={idx}>
        {this.renderTime(block)}
       </ul>
     ); 
    });
  }

  render() {
    return (
      <div className="bookTimeList">
        <div className="bookProgramTime">
          <div className="topArrowGray"></div>
          <div className="topArrow"></div>
          <div className="calendarHeader clear">
             <h4 className="bookSelectedDate">{this.props.month}.{this.props.day}</h4>
             <span className="bookYear">{this.props.year}</span>
          </div>
          {this.renderBlocks(data)}
        </div>
      </div>
    );
  }
}

export default TimeList;