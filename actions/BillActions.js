import alt from '../alt';
import { API_URL } from '../sources/config';
import PlaceSource from '../sources/PlaceSource';

class BillActions {

	fetchMonthDays() {
		return null;
	}

	updateMonthDays(monthDays) {
		return monthDays;
	}

	monthDaysFailed(errorMesssage) {
		return errorMessage;
	}

	selectMonth(year, month) {
		fetch(`${API_URL}/placeMonthUsable.do?year=${year}&month=${month}`)
			.then(res => {
				res.json().then(json => {
          this.updateSelectedMonth(month);
          this.updateSelectedYear(year);
					this.updateMonthDays(json.DATA);
				});
			});
	}

  // day times
  updateDayTimes(dayTimes) {
    return dayTimes;
  }

  dayTimesFailed(errorMessage) {
    return errorMessage;
  }

  selectDay(placeId, year, month, day, ) {
    fetch(`${API_URL}/placeDayUsable.do?id=${placeId}&year=${year}&month=${month}&day=${day}`)
      .then(res => {
        res.json().then(json => {
          this.updateDayTimes(json.DATA);
          this.updateSelectedDay(day);
        });
      });
  }

  // selectTimes
  updateSelectedTimes(time) {
    return time;
  }

  selectedTimesFailed(errorMessage) {
    return errorMessage;
  }

  // selectedDay
  updateSelectedDay(day) {
    return day;
  }

  selectedDayFailed(errorMessage) {
    return errorMessage;
  }

  resetSelectedDay() {
    return null;
  }

  // selectedMonth
  updateSelectedMonth(month) {
    return month;
  }

  selectedMonthFailed(errorMessage){
    return errorMessage;
  }

  // selecteYear
  updateSelectedYear(year) {
    return year;
  }

  selectedYearFailed(errorMessage){
    return errorMessage;
  }


  // place
  fetchPlace(placeId) {
    PlaceSource.fetch(placeId)
      .then(res => {
        res.json().then(json => {
          this.updatePlace(json.DATA);
        });
      });
  }

  updatePlace(place) {
    return place;
  }

  placeFailed(errorMessage) {
    return errorMessage;
  }
}

export default alt.createActions(BillActions);