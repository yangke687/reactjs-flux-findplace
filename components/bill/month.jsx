import React,{ Component } from 'react';
import TimeList from './timeList';

class Month extends Component {

  constructor(props) {
		super(props);
		this.state = {
      selectedYear: '1970',
      selectedMonth: '01',
			selectedDay: null,
      showTimeList: false,
      monthDays: {},
		};
	}

  componentWillReceiveProps(nextProps) {
    this.setState({
      monthDays: nextProps.monthDays,
      selectedYear: nextProps.monthDays.header.year,
      selectedMonth: nextProps.monthDays.header.month,
    });
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
    if(!this.state.monthDays.header) {
      return <div>Loading...</div>;
    }
    return (
      <div className="col-md-12">
        <div className="bookCalendar">
          <div className="calendarHeader clear">
            <h4>{this.state.monthDays.header.month}</h4>
            <span>{this.state.monthDays.header.year}</span>
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
                <th>日</th>
                <th>ㄧ</th>
                <th>二</th>
                <th>三</th>
                <th>四</th>
                <th>五</th>
                <th>六</th>
              </tr>
              {this.renderWeeks(this.state.monthDays.weeks)}
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
