var alt = require('../alt');
var BillActions = require('../actions/BillActions');
var PlaceActions = require('../actions/PlaceActions');
var BillSource = require('../sources/BillSource');

class BillStore {
	constructor() {
    this.place = {};
		this.monthDays = {};
    this.selectedDay = null;
    this.selectedMonth = new Date().getMonth()+1;
    this.selectedYear = new Date().getFullYear();
		this.errorMessage = null;

		this.bindListeners({

			handleUpdateMonthDays: BillActions.UPDATE_MONTH_DAYS,
			handledMonthDaysFailed: BillActions.MONTH_DAYS_FAILED,

			handleSelectMonth: BillActions.SELECT_MONTH,

      handleFetchPlace: PlaceActions.FETCH_PLACE,
      handleUpdatePlace: PlaceActions.UPDATE_PLACE,
      handlePlaceFailed: PlaceActions.PLACE_FAILED,
      // selected day
      handleUpdateSelectedDay: BillActions.UPDATE_SELECTED_DAY,
      handleUpdateSelectedDayFailed: BillActions.SELECTED_DAY_FAILED,
      handleResetSelectedDay: BillActions.RESET_SELECTED_DAY,
      // selected month
      handleUpdateSelectedMonth: BillActions.UPDATE_SELECTED_MONTH,
      handleUpdateSelectedMonthFailed: BillActions.SELECTED_MONTH_FAILED,
      // selected year
      handleUpdateSelectedYear: BillActions.UPDATE_SELECTED_YEAR,
      handleUpdateSelectedYearFailed: BillActions.SELECTED_YEAR_FAILED,
		});

		this.exportAsync(BillSource);
	}

	handleUpdateMonthDays(monthDays) {
		this.monthDays = monthDays;
	}

	handleSelectMonth() {
		this.monthDays = {};
	}

	handledMonthDaysFailed(errorMessage) {
		this.errorMessage = errorMessage;
	}

  // selected day
  handleUpdateSelectedDay(day) {
    this.selectedDay = day;
  }

  handleResetSelectedDay() {
    this.selectedDay = null;
  }

  handleUpdateSelectedDayFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }

  // selected month
  handleUpdateSelectedMonth(month) {
    this.selectedMonth = month;
  }

  handleUpdateSelectedMonthFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }

  // selected year
  handleUpdateSelectedYear(year) {
    this.selectedYear = year;
  }

  handleUpdateSelectedYearFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }

  // place

  handleFetchPlace() {
    this.place = {};
  }

  handleUpdatePlace(place) {
    this.place = place;
    this.errorMessage = null;
  }

  handlePlaceFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }
}

export default alt.createStore(BillStore, 'BillStore');