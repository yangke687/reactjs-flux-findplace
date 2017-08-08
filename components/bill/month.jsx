import React,{ Component } from 'react';
import TimeList from './timeList';
import BillActions from '../../actions/BillActions';

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
      selectedYear: nextProps.monthDays.header?
        nextProps.monthDays.header.year:
        new Date().getFullYear(),
      selectedMonth: nextProps.monthDays.header?
        nextProps.monthDays.header.month:
        new Date().getMonth()+1,
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

  getSelectedYearAndMonth() {
    const year = this.state.selectedYear?
      parseInt(this.state.selectedYear) : 
      new Date().getFullYear();
    const month = this.state.selectedMonth?
      parseInt(this.state.selectedMonth) :
       new Date().getMonth()+1;
    return [ year, month ];
  }

  resetSelectedDay() {
    this.setState({selectedDay:null, showTimeList: false});
  }

  setToLastMonth(evt) {
    evt.preventDefault();
    this.resetSelectedDay();
    let [year, month] = this.getSelectedYearAndMonth();
    if(month===1) {
      year = year-1;
      month = 12;
    } else {
      month = month-1;
    }
    // invoke actions
    BillActions.selectMonth(year, month);
  }

  setToNextMonth(evt) {
    evt.preventDefault();
    this.resetSelectedDay();
    let [year, month] = this.getSelectedYearAndMonth();
    if(month===12) {
      year = year+1;
      month = 1;
    } else {
      month = month + 1;
    }
    // invoke actions
    BillActions.selectMonth(year, month);
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
                <a 
                  className="lastMonth" 
                  href="javascirpt:void(0);"
                  onClick={this.setToLastMonth.bind(this)}
                >
                  <span className="glyphicon glyphicon-chevron-left"></span>
                </a>
              </li>
              <li>
                <a 
                  className="nextMonth" 
                  href="javascript:void(0);"
                  onClick={this.setToNextMonth.bind(this)}
                >
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
