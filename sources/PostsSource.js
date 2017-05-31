import HomeActions from '../actions/HomeActions';

var mockData = [{
	id: 0,
	img: 'http://i.imgur.com/4W81UUd.jpg',
	name: '会议和讲座地该注意什么?',
	desc: '投影设备 场地的投影设备有几点特別要注意，首先是投影机的流明数大小，流明是光通量的单位，在相同距离的情況下，流明越高越...',
}, {
	id: 1,
	img: 'http://i.imgur.com/8YomEoc.jpg',
	name: '场地故事馆︱02 Rayca 咖啡精灵的100种生活',
	desc: '假如有一天，「场地」成了一位活生生的人，在你心中他 / 她该是什么样子？它可以很活波、华丽缤纷、落落大方，也可以斯文有礼、随性自...'
}, {
	id: 2,
	img: 'http://i.imgur.com/P75KZVz.jpg',
	name: '场地介紹 - Smohouse思默好时【B1好事空间】',
	desc: '位于台中的思默好时，光听名字就給人留下很深刻的印象，走進三层楼的空间及地下室，你會发现在这里的每一层楼，都有很不同的空间设计...'
}];

export default {
	fetchPosts() {
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

			success: HomeActions.updatePosts,
			error: HomeActions.postsFailed,
			loading: HomeActions.fetchPosts
		}
	}
}