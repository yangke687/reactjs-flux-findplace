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
					this.updateMonthDays(json.DATA);
				});
			});
	}

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