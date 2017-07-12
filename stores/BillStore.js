var alt = require('../alt');
var BillActions = require('../actions/BillActions');
var BillSource = require('../sources/BillSource');

class BillStore {
	constructor() {
		this.monthDays = {};
		this.errorMessage = null;

		this.bindListeners({
			handleUpdateMonthDays: BillActions.UPDATE_MONTH_DAYS,
			handledMonthDaysFailed: BillActions.MONTH_DAYS_FAILED,
		});

		this.exportAsync(BillSource);
	}

	handleUpdateMonthDays(monthDays) {
		this.monthDays = monthDays;
	}

	handledMonthDaysFailed(errorMessage) {
		this.errorMessage = errorMessage;
	}
}

export default alt.createStore(BillStore, 'BillStore');