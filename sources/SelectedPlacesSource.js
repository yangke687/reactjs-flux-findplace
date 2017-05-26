var HomeActions = require('../actions/HomeActions');

var mockData = [{
	id: 0,
	name: 'RAYCA COFFEE'
}, {
	id: 1,
	name: 'TreeFul 小树屋 | 南京复兴'
}];

export default {
	fetchSelectedPlaces() {
		return {
			remote() {
				return new Promise(function(resolve, reject) {
					setTimeout(function() {
						if (true) {
							resolve(mockData);
						} else {
							reject('something wrong');
						}
					}, 250);
				});
			},

			local() {
				return null;
			},

			success: HomeActions.updateSelectedPlaces,
			error: HomeActions.selectedPlacesFailed,
			loading: HomeActions.fetchSelectedPlaces
		}
	}
}