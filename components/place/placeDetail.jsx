import React from 'react';

class PlaceDetail extends React.Component{
	render(){
		if(!this.props.place.contents){
			return <div>Loading...</div>;
		}
		return (
		<div>
			<div className="clear programSiteTime">
				<div>
					<h4 className="eachProgramTitle">场地编号</h4>
					<p>{this.props.place.no}</p>
				</div>
				<div>
					<h4 className="eachProgramTitle">联系电话</h4>
					<p>{this.props.place.tel}</p>
				</div>
				<div className="calendar">
					<h4 className="eachProgramTitle">价格</h4>
					<p>每时段收费<b>{this.props.place.price}</b>元</p>
					<p>
						<b>*</b>
						{this.props.place.notice}
					</p>
				</div>
			</div>
			<div>
				<h4 className="eachProgramTitle">內容</h4>
				<h5>人数</h5>
				<p>本方案的场地大小约为<b>{this.props.place.area}</b>平</p>
				<p>本方案包场<b>沒有最少人数限制</b></p>
				<p>场地容纳人数<b>最多{this.props.place.max_people}</b>人</p>
				{this.props.place.contents.map((con,idx) => {
					return (
						<div key={idx}>
							<h5>{con.title}</h5>
							<p>{con.content}</p>
						</div>
					);
				})}
			</div>
		</div>
		);
	}
}

export default PlaceDetail;