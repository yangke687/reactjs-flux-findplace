var alt = require('../alt');
var BillActions = require('../actions/BillActions');
var PlaceActions = require('../actions/PlaceActions');
var BillSource = require('../sources/BillSource');

class BillStore {
	constructor() {
    this.place = {};
		this.monthDays = {};
		this.errorMessage = null;

		this.bindListeners({
			handleUpdateMonthDays: BillActions.UPDATE_MONTH_DAYS,
			handledMonthDaysFailed: BillActions.MONTH_DAYS_FAILED,
			handleSelectMonth: BillActions.SELECT_MONTH,
      handleFetchPlace: PlaceActions.FETCH_PLACE,
      handleUpdatePlace: PlaceActions.UPDATE_PLACE,
      handlePlaceFailed: PlaceActions.PLACE_FAILED,
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