import React from 'react';

class searchForm extends React.Component{
	render(){
		return (
			<form>
				<section className="dropdownWrapper">
					<div className="centerDropdown">
						<div className="dropdown evtType">
							<select ref="uses">
								<option value="">活动性质</option>
								<option value="1">会议</option>	
								<option value="2">派对</option>	
								<option value="3">课程讲座</option>	
								<option value="4">静态展览</option>	
								<option value="5">体育活动</option>	
								<option value="6">烹饪</option>	
								<option value="7">发表会</option>	
								<option value="8">记者会</option>	
								<option value="9">拍摄摄影</option>	
								<option value="10">音乐表演</option>	
								<option value="11">剧场表演</option>	
								<option value="12">聚会餐饮</option>	
								<option value="13">教育训练</option>	
								<option value="14">婚宴</option>	
							</select>
						</div>
						<div className="dropdown location">
							<select ref="county">
								<option value="">地点</option>
								<option value="台北市">台北市</option>	
								<option value="新北市">新北市</option>	
								<option value="台中市">台中市</option>	
								<option value="台南市">台南市</option>	
								<option value="高雄市">高雄市</option>	
								<option value="基隆市">基隆市</option>	
								<option value="新竹市">新竹市</option>	
								<option value="嘉义市">嘉义市</option>	
								<option value="桃园市">桃园市</option>	
								<option value="新竹县">新竹县</option>	
								<option value="苗粟县">苗粟县</option>	
								<option value="彰化县">彰化县</option>	
								<option value="南投县">南投县</option>	
								<option value="云林县">云林县</option>	
								<option value="嘉义县">嘉义县</option>	
								<option value="屏东县">屏东县</option>	
								<option value="宜兰县">宜兰县</option>	
								<option value="花莲县">花莲县</option>	
								<option value="台东县">台东县</option>	
								<option value="澎湖县">澎湖县</option>	
								<option value="金门县">金门县</option>	
								<option value="连江县">连江县</option>	
							</select>
						</div>
						<div className="dropdown capacity">
							<select ref="max_people">
								<option value="">活动人数</option>
								<option value="1.20">1 - 10</option>	
								<option value="11.30">11 - 20</option>	
								<option value="21.60">21 - 40</option>	
								<option value="41.100">41 - 60</option>	
								<option value="61.150">61 - 80</option>	
								<option value="81.200">81 - 100</option>	
								<option value="101.300">101 - 200</option>	
								<option value="201.450">201 - 300</option>	
								<option value="301.500">301 - 400</option>	
								<option value="401.700">401 - 500</option>	
								<option value="501">500+</option>	
							</select>
						</div>
						<input className="keySearch" type="text" ref="keywords" placeholder="例如: 东区, 咖啡店" />
						<button className="orangeBtn" type="submit">找场地</button>
					</div>
				</section>
			</form>
		);
	}
}

export default searchForm;