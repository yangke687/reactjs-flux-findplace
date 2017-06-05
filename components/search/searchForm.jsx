import React from 'react';

class SearchForm extends React.Component{
	handleSubmit(evt){
		evt.preventDefault();
	}
	render(){
		return (
				
			<div className="col-xs-12 mT100">
				<div id="phoneSearchNavbar">
					<div className="hidden-print searchNavbar">
						<form id="searchForm" onSubmit={this.handleSubmit.bind(this)}>
							<ul className="nav">
								<li>
									<span>目的</span>
									<div className="searchSelect">
										<select className="changeFilter" name="uses">
               								<option value="">请选择</option>
                                    	</select>
									</div>
								</li>
								<li>
									<span>活动人数</span>
									<div className="searchSelect">
										<select className="changeFilter" name="max_people">
               								<option value="">请选择</option>
                                    	</select>
									</div>
								</li>
								<li>
									<span>地点</span>
									<div className="searchSelect">
										<select className="changeFilter" name="county">
               								<option value="">请选择</option>
                                    	</select>
									</div>
								</li>
								<li>
									<span>每小时预算上限</span>
									<div className="searchSelect">
										<select className="changeFilter" name="maxHrPrice">
               								<option value="">请选择</option>
                                    	</select>
									</div>
								</li>
								<li>
									<span>每小时最低预算</span>
									<div className="searchSelect">
										<select className="changeFilter" name="minHrPrice">
               								<option value="">请选择</option>
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