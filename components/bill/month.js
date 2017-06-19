import React,{ Component } from 'react';
import TimeList from './timeList';

const data = {
  header: {
    month: '06',
    year: '2017',
  },
  weeks: [
    [{d:null,stat:false},{d:null,stat:false},{d:null,stat:false},{d:1,stat:false},{d:2,stat:false},{d:3,stat:false},{d:4,stat:false}],
    [{d:5,stat:false},{d:6,stat:false},{d:7,stat:false},{d:8,stat:false},{d:9,stat:false},{d:10,stat:false},{d:11,stat:false}],
    [{d:12,stat:false},{d:13,stat:false},{d:14,stat:false},{d:15,stat:false},{d:16,stat:false},{d:17,stat:false},{d:18,stat:false}],
    [{d:19,stat:true},{d:20,stat:true},{d:21,stat:true},{d:22,stat:true},{d:23,stat:true},{d:24,stat:true},{d:25,stat:true}],
    [{d:26,stat:true},{d:27,stat:true},{d:28,stat:true},{d:29,stat:true},{d:30,stat:true},{d:null,stat:false},{d:null,stat:false}],
  ],
};

class Month extends Component {

  constructor(props) {
		super(props);
		this.state = {
      selectedYear: '2017',
      selectedMonth: '06',
			selectedDay: null,
      showTimeList: false,
		};
	}

  handleClick(day){
    if(!day.stat) {
      return;
    }
    this.setState({selectedDay: day.d, showTimeList: true});
  }

  renderDays(days) {
    return days.map( (day,idx) => {
      let cls = day.stat?'choiceDay':'disabled';
      if( this.state.selectedDay === day.d ) cls += ' selectedDate';
      return (<td key={idx}>
        {day.d ? <a href="javascript:void(0);" onClick={this.handleClick.bind(this,day)} className={cls}>{day.d}</a> : ' ' }
      </td>);
    });
  }

  renderWeeks(weeks) {
    return weeks.map( (week,idx) => {
      return (
        <tr key={idx}>
          {this.renderDays(week)}
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="col-md-12">
        <div className="bookCalendar">
          <div className="calendarHeader clear">
            <h4>{data.header.month}</h4>
            <span>{data.header.year}</span>
            <ul>
              <li>
                <a className="lastMonth" href="javascirpt:void(0);" year="2017" month="05">
                  <span className="glyphicon glyphicon-chevron-left"></span>
                </a>
              </li>
              <li>
                <a className="nextMonth" href="javascript:void(0);" year="2017" month="07">
                  <span className="glyphicon glyphicon-chevron-right"></span>
                </a>
              </li>
            </ul>
          </div>
          <table className="monthlyTable">
            <tbody>
              <tr align="center" className="week_text">
                <th>ㄧ</th>
                <th>二</th>
                <th>三</th>
                <th>四</th>
                <th>五</th>
                <th>六</th>
                <th>日</th>
              </tr>
              {this.renderWeeks(data.weeks)}
            </tbody>
          </table>
        </div>
        { this.state.showTimeList ? <TimeList 
          year={this.state.selectedYear} 
          month={this.state.selectedMonth} 
          day={this.state.selectedDay} />: null }
      </div>
    );
  }
}

export default Month;
