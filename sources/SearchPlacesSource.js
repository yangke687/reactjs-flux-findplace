import SearchActions from '../actions/SearchActions';
var mockData = [{
	"id": 0,
	"title": "星耀路 都铎城邦｜运动公园 | 水吧",
	"location": "昆明市 官渡区",
	"img": "/images/list/06.jpg",
	"excerpt": "完整独立空间，每小时$280元，不被打扰、不限制使用人数",
	"min_people": 0,
	"max_people": 8,
	"uses": ["会议","派对","发表会","课程讲座","记者会","拍摄摄影","聚会餐饮","教育训练"],
	"price": 280
},{
	"id": 1,
	"title": "星耀路 都铎城邦 | 运动公园 | 足球场 | #1",
	"location": "昆明市 官渡区",
	"img": "/images/list/022.jpg",
	"excerpt": "包场方案",
	"min_people": 0,
	"max_people": 10,
	"uses": ["体育活动","教育训练"],
	"price": 250
},{
	"id": 2,
	"title": "星耀路 都铎城邦 | 运动公园 | 篮球场 | #1",
	"location": "昆明市 官渡区",
	"img": "/images/list/03.jpg",
	"excerpt": "包场方案",
	"min_people": 0,
	"max_people": 10,
	"uses": ["体育活动","教育训练"],
	"price": 250
},{
	"id": 3,
	"title": "星耀路 都铎城邦 | 运动公园 | 篮球场 | #2",
	"location": "昆明市 官渡区",
	"img": "/images/list/05.jpg",
	"excerpt": "包场方案",
	"min_people": 0,
	"max_people": 10,
	"uses": ["体育活动","教育训练"],
	"price": 250
}];

export default {
	fetchSearchPlaces(){
		return {
			remote(){
				return new Promise(function(resovle,reject){
					setTimeout(function(){
						if(true){
							resovle(mockData);
						}
						else{
							reject("something wrong")
						}
					},250);
				});
			},
			local(){
				return null;
			},
			success: SearchActions.updateSearchPlaces,
			error: SearchActions.searchPlacesFailed,
			loading: SearchActions.fetchSearchPlaces
		}
	}
}