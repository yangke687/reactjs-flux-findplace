import BillActions from '../actions/BillActions';
import { API_URL } from './config';

export default {
	fetchMonthDays() {
		return {
			remote(state) {
				return fetch(`${API_URL}/placeMonthUsable.do?`,{
					method: 'GET'
				}).then(res => {
					return res.json().then(json => {
						return json.DATA;
					});
				});
			},

			local(state) {
				
			},

			success: BillActions.updateMonthDays,
			loading: BillActions.fetchMonthDays,
			error: BillActions.monthDaysFailed,
		}
	}
}