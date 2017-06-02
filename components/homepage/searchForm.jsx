import React from 'react';
import UsesSelect from './widgets/usesSelect';

class searchForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {};
	}
	handleSubmit(evt){
		evt.preventDefault();
		console.log(this.state);
	}
	handleChange(key,evt){
		let val = evt.target.value;
		let oldState = this.state;
		oldState[key] = val;
		this.setState(oldState);
	}
	handleChildChange(key,val){
		let oldState = this.state;
		oldState[key] = val;
		this.setState(oldState);
	}
	render(){
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<section className="dropdownWrapper">
					<div className="centerDropdown">
						<div className="dropdown evtType">
							<UsesSelect handleChange={this.handleChildChange.bind(this)} />
						</div>
						<div className="dropdown location">
							<select onChange={this.handleChange.bind(this,'county')}>
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
							<select onChange={this.handleChange.bind(this,'max_people')}>
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
						<input className="keySearch" type="text" onChange={this.handleChange.bind(this,'keywords')} placeholder="例如: 东区, 咖啡店" />
						<button className="orangeBtn" type="submit">找场地</button>
					</div>
				</section>
			</form>
		);
	}
}

export default searchForm;