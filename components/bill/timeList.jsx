import React,{ Component } from 'react';
import _ from 'lodash';

import BillActions from '../../actions/BillActions';

class TimeList extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTimes: []
    };
  }

  handleTimeClick(time) {
    console.log('time:', time);
    if(!time.stat) {
      return;
    }
    if(!_.contains(this.state.selectedTimes,time.time)) {
      this.setState({
        selectedTimes: [ ...this.state.selectedTimes, time.time ],
      });
    } else { 
      this.setState({
        selectedTimes: _.reject(this.state.selectedTimes, item => item === time.time),
      });
    }
    BillActions.updateSelectedTimes(time);
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
    if(!this.props.selectedDay) {
      return null;
    }
    if(!this.props.selectedTimes) {
      return null;
    }
    return (
    <div className="col-md-12">
      <div className="bookTimeList">
        <div className="bookProgramTime">
          <div className="topArrowGray"></div>
          <div className="topArrow"></div>
          <div className="calendarHeader clear">
             <h4 className="bookSelectedDate">{this.props.selectedMonth}.{this.props.selectedDay}</h4>
             <span className="bookYear">{this.props.selectedYear}</span>
          </div>
          {this.renderBlocks(this.props.dayTimes)}
        </div>
      </div>
    </div>
    );
  }
}

export default TimeList;