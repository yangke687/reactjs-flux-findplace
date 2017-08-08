import React,{ Component } from 'react';
import TimeList from './timeList';
import BillActions from '../../actions/BillActions';

class Month extends Component {

  constructor(props) {
		super(props);
		this.state = {
      monthDays: {},
		};
	}

  componentWillReceiveProps(nextProps) {
    this.setState({
      monthDays: nextProps.monthDays,
    });
  }

  handleClick(day){
    if(!day.stat) {
      return;
    }
    BillActions.updateSelectedDay(day.d);
    //this.setState({selectedDay: day.d, showTimeList: true});
  }

  renderDays(days) {
    return days.map( (day,idx) => {
      let cls = day.stat?'choiceDay':'disabled';
      if( this.props.selectedDay === day.d ) cls += ' selectedDate';
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

  resetSelectedDay() {
    this.setState({selectedDay:null, showTimeList: false});
  }

  setToLastMonth(evt) {
    evt.preventDefault();
    let { selectedYear: year, selectedMonth: month } = this.props;
    if(month===1) {
      year = year-1;
      month = 12;
    } else {
      month = month-1;
    }
    // invoke actions
    BillActions.resetSelectedDay();
    BillActions.selectMonth(year, month);
  }

  setToNextMonth(evt) {
    evt.preventDefault();
    let { selectedYear: year, selectedMonth: month } = this.props;
    if(month===12) {
      year = year+1;
      month = 1;
    } else {
      month = month + 1;
    }
    // invoke actions
    BillActions.resetSelectedDay();
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
            <h4>{this.props.selectedYear}</h4>
            <span>{this.props.selectedMonth}</span>
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
                <th>一</th>
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
        { this.props.selectedDay ? <TimeList
          id={this.state.placeId}
          year={this.state.selectedYear} 
          month={this.state.selectedMonth} 
          day={this.props.selectedDay} />: null }
      </div>
    );
  }
}

export default Month;
