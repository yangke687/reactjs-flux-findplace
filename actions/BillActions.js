var alt = require('../alt');

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
}

export default alt.createActions(BillActions);