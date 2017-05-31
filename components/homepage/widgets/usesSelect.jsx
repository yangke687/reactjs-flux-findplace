import React from 'react';

class UsesSelect extends React.Component{
	render(){
		return (
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
		);
	}
}

export default UsesSelect;