import React from 'react';

class SearchForm extends React.Component{
	handleSubmit(evt){
		evt.preventDefault();
	}
	render(){
		return (
				
			<div className="col-xs-12 mT100" style={{marginTop: 0}}>
				<div id="phoneSearchNavbar">
					<div className="hidden-print searchNavbar">
						<form id="searchForm" onSubmit={this.handleSubmit.bind(this)}>
							<ul className="nav">
								<li>
									<span>活动性质</span>
									<div className="searchSelect">
										<select className="changeFilter" name="uses">
               					<option value="">请选择</option>
												<option value="">体育活动</option>
												<option value="">派对</option>
												<option value="">烹饪</option>
												<option value="">拍摄摄影</option>
												<option value="">聚会餐饮</option>
												<option value="">教育训练</option>
                    </select>
									</div>
								</li>
								<li>
									<span>活动人数</span>
									<div className="searchSelect">
										<select className="changeFilter" name="max_people">
											<option value="">请选择</option>
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
								</li>
								<li>
									<span>地点</span>
									<div className="searchSelect">
										<select className="changeFilter" name="county">
											<option value="">请选择</option>
               				<option value="">昆明市</option>
                    </select>
									</div>
								</li>
								<li>
									<span>租用类别</span>
									<div className="searchSelect">
										<select className="changeFilter" name="maxHrPrice">
               				<option value="">请选择</option>
											<option value="">包场</option>
											<option value="">散场</option>
                    </select>
									</div>
								</li>
								<li>
									<span>平日或假日</span>
									<label>
										<input type="checkbox" name="days[]" value="1,2,3,4,5" /> 平日
									</label>
									<label>
										<input type="checkbox" name="days[]" value="0,6" /> 假日
									</label>
								</li>
								<li>
									<span>租用时段</span>
									<label>
										<input type="checkbox" value="1" name="morning" /> 上午
									</label>
									<label>
										<input type="checkbox" value="1" name="afternoon" /> 下午
									</label>
									<label>
										<input type="checkbox" value="1" name="evening" /> 晚上
									</label>
								</li>
								<li>
									<span>关键字</span>
									<input type="text" className="form-control" name="keywords" />
								</li>
							</ul>
							<div className="mTD20">
				                <button type="submit" className="btn btnSearch btn-block">
				                	搜索
				                </button>
				            </div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default SearchForm;