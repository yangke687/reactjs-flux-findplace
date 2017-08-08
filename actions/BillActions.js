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