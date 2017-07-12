import alt from '../alt';
import { API_URL } from '../sources/config';

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
					this.updateMonthDays(json.DATA);
				});
			});
	}
}

export default alt.createActions(BillActions);