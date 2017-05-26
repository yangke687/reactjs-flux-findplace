var HomeActions = require('../actions/HomeActions');

var mockData = [{
	id: 0,
	img: 'http://i.imgur.com/5BoqSLN.jpg',
	name: 'RAYCA COFFEE'
}, {
	id: 1,
	img: 'http://i.imgur.com/Ezh19CM.jpg',
	name: 'TreeFul 小树屋 | 南京复兴'
}, {
	id: 2,
	img: 'http://i.imgur.com/KaMHHrU.jpg',
	name: 'MoSo Space'
}, {
	id: 3,
	img: 'http://i.imgur.com/bHnziNb.jpg',
	name: '派大星 Event Space'
}, {
	id: 4,
	img: 'http://i.imgur.com/F1SwPLY.jpg',
	name: 'Changee 中山'
}, {
	id: 5,
	img: 'http://i.imgur.com/ks5QZhg.jpg',
	name: '台湾文创训练中心-台中文创馆1301'
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