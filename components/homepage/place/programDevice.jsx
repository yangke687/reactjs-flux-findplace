import React from 'react';

const devs = [
	{
		img: '/images/board.png',
		title: '黑板&白板',
		short: '白板180x90附白板笔',
	},
	{
		img: '/images/wifi.png',
		title: '无线网络',
		short: '光纤网络',
	},
	{
		img: '/images/table.png',
		title: '桌子',
		short: '一张圆桌',
	},
	{
		img: '/images/chair.png',
		title: '椅子',
		short: '藤椅x4+小板凳x4+转角沙发x1',
	},
	{
		img: '/images/box.png',
		title: '包厢',
		short: '独立包厢',
	},
	{
		img: '/images/bfe.png',
		title: '无障碍空间',
		short: '有电梯',
	},
	{
		img: '/images/other.png',
		title: '其他',
		short: '公用厕所及洗手槽、免费插座x4、可自带零食',
	}
];

class ProgramDeviceItem extends React.Component{
	render(){
		return (
			<div className="programDeviceArea">
				<div className="programDeviceImg text-center">
					<img src={this.props.img} />
					<p className="deviceNoFeeItem">{this.props.title}</p>
				</div>
				<div className="programDevicenote">{this.props.short}</div>
			</div>
		);
	}
}

class ProgramDevice extends React.Component{
	render(){
		return (
			<div className="ProgramDevice clear">
				<h4 className="eachProgramTitle">设备</h4>
				{devs.map((dev,i)=>{
					return <ProgramDeviceItem {...dev} key={i} />;
				})}
			</div>
		);
	}
}

export default ProgramDevice;