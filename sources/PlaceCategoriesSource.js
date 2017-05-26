import HomeActions from '../actions/HomeActions';

var mockData = [{
	id: 0,
	name: '课程讲座',
	desc: '类型场地可举办课程、演讲、说明会、发表会等',
	places: [{
		id: 0,
		city: '台北市',
		scale: '0-100人',
		price: '$6000/3hr',
		img: 'http://i.imgur.com/MK4VzWt.jpg'
	}, {
		id: 1,
		city: '台北市',
		scale: '0-25人',
		price: '$400/1hr',
		img: 'http://i.imgur.com/WW8GHcr.jpg'
	}, {
		id: 2,
		city: '台中市',
		scale: '0-30人',
		price: '$2600/3hr',
		img: 'http://i.imgur.com/OrOEuDp.jpg'
	}]
}, {
	id: 1,
	name: '会议',
	desc: '类型场地可举办会议、研讨会、读书会等',
	places: [{
		id: 0,
		city: '台北市',
		scale: '0-15人',
		price: '$1500/3hr',
		img: 'http://i.imgur.com/rsup0fW.jpg'
	}, {
		id: 1,
		city: '台北市',
		scale: '0-25人',
		price: '$400/1hr',
		img: 'http://i.imgur.com/fFtTzP8.jpg'
	}, {
		id: 2,
		city: '台北市',
		scale: '0-100人',
		price: '$7500/4hr',
		img: 'http://i.imgur.com/Q7iihti.jpg'
	}]
}, {
	id: 2,
	name: '聚会派对',
	desc: '类型场地可举办校友会、庆生会、同学会等',
	places: [{
		id: 0,
		city: '台北市',
		scale: '0-50人',
		price: '$6400/4hr',
		img: 'http://i.imgur.com/u53sPzL.jpg'
	}, {
		id: 1,
		city: '台北市',
		scale: '0-19人',
		price: '$320/1hr',
		img: 'http://i.imgur.com/rocYcp7.jpg'
	}, {
		id: 2,
		city: '台北市',
		scale: '0-30人',
		price: '$900/1hr',
		img: 'http://i.imgur.com/MsRMmxX.jpg'
	}],
}];

export default {
	fetchPlaceCategories() {
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
			success: HomeActions.updatePlaceCategories,
			error: HomeActions.placeCategoriesFailed,
			loading: HomeActions.fetchPlaceCategories
		};
	}
};