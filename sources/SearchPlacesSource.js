import SearchActions from '../actions/SearchActions';
var mockData = [{
	"id": 0,
	"name": "Treerful 小树屋｜古亭 B｜",
	"county": "台北市 中正区",
	"img": "http://i.imgur.com/w4CEvG1.jpg",
	"desc": "完整独立空间，每小时$280元，不被打扰、不限制使用人数",
	"max_people": "0-8人",
	"uses": ["会议","派对","发表会","课程讲座","记者会","拍摄摄影","聚会餐饮","教育训练"],
	"price": "总价 $280/1hr"
},{
	"id": 1,
	"name": "EZstay会议室~教室~场地出租-7人到25人都有",
	"county": "台北市 大同区",
	"img": "http://i.imgur.com/Aj1MWJw.jpg",
	"desc": "京站长安馆-小教室B-每日分时段包场方案",
	"max_people": "0-12人",
	"uses": ["会议","课程讲座","发表会","聚会餐饮","教育训练"],
	"price": "总价 $1000/4hr"
},{
	"id": 2,
	"name": "FA独立包厢会议室",
	"county": "台北市 大安区",
	"img": "http://i.imgur.com/H4GBhQ6.jpg",
	"desc": "包场方案",
	"max_people": "0-8人",
	"uses": ["会议","课程讲座","拍摄摄影"],
	"price": "总价 $300/1hr"
},{
	"id": 3,
	"name": "买咖啡",
	"county": "台北市 中正区",
	"img": "http://i.imgur.com/J2dCFp4.jpg",
	"desc": "隔音小房间",
	"max_people": "0-6人",
	"uses": ["会议","课程讲座"],
	"price": "总价 $250/1hr"
},{
	"id": 4,
	"name": "一三一巷",
	"county": "新北市 中和区",
	"img": "http://i.imgur.com/iFQQz0V.jpg",
	"desc": "假日 包场方案",
	"max_people": "0-8人",
	"uses": ["会议","课程讲座","静态展览","拍摄摄影"],
	"price": "总价 $1200/3hr"
},{
	"id": 5,
	"name": "蚁窝·Yiwoo空间租借",
	"county": "新北市 板桥区",
	"img": "http://i.imgur.com/nx9WtLm.jpg",
	"desc": "人数计算方案",
	"max_people": "4-15人",
	"uses": ["会议","课程讲座","静态展览","拍摄摄影","聚会餐饮","教育训练"],
	"price": "总价 $150/3hr"
},{
	"id": 6,
	"name": "Kidding咖啡万事屋@活动场地",
	"county": "台中市 中区",
	"img": "http://i.imgur.com/MCEJ8dC.jpg",
	"desc": "假日包场方案",
	"max_people": "0-30人",
	"uses": ["会议","派对","课程讲座","静态展览","发表会","记者会","拍摄摄影","音乐表演","聚会餐饮","教育训练"],
	"price": "总价 $1500/4hr"
},{
	"id": 7,
	"name": "橙艺共同创作空间",
	"county": "台中市 西区",
	"img": "http://i.imgur.com/el0c1hp.jpg",
	"desc": "会议教室-包场方案",
	"max_people": "0-10人",
	"uses": ["会议","课程讲座","聚会餐饮","教育训练"],
	"price": "总价 $250/1hr"
},{
	"id": 8,
	"name": "U-Better 全方位发展育成中心",
	"county": "台南市 永康区",
	"img": "http://i.imgur.com/c299IQa.jpg",
	"desc": "包场方案",
	"max_people": "0-60人",
	"uses": ["会议","课程讲座","发表会","记者会"],
	"price": "总价 $2000/4hr"
},{
	"id": 9,
	"name": "高雄高铁站前训练中心-高雄场地/教室租借",
	"county": "高雄市 左营区",
	"img": "http://i.imgur.com/C9Kkcce.jpg",
	"desc": "平日晚场/假日早场方案",
	"max_people": "0-20人",
	"uses": ["会议","课程讲座","静态展览","发表会","记者会","拍摄摄影","音乐表演","剧场表演","聚会餐饮","教育训练"],
	"price": "总价 $1200/3hr"
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