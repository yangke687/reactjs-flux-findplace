import BillActions from '../actions/BillActions';
import { API_URL } from './config';

/*const mockMonthDays = {
	header: {
    month: '07',
    year: '2017',
  },
  weeks: [
    [{d:null,stat:false},{d:null,stat:false},{d:null,stat:false},{d:1,stat:false},{d:2,stat:false},{d:3,stat:false},{d:4,stat:false}],
    [{d:5,stat:false},{d:6,stat:false},{d:7,stat:false},{d:8,stat:false},{d:9,stat:false},{d:10,stat:false},{d:11,stat:false}],
    [{d:12,stat:false},{d:13,stat:false},{d:14,stat:false},{d:15,stat:false},{d:16,stat:false},{d:17,stat:false},{d:18,stat:false}],
    [{d:19,stat:true},{d:20,stat:true},{d:21,stat:true},{d:22,stat:true},{d:23,stat:true},{d:24,stat:true},{d:25,stat:true}],
    [{d:26,stat:true},{d:27,stat:true},{d:28,stat:true},{d:29,stat:true},{d:30,stat:true},{d:null,stat:false},{d:null,stat:false}],
  ],
};*/

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