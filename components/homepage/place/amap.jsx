import React from 'react';

class AMap extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			resizeEnable: true,
            zoom:11,
            center: [116.397428, 39.90923]
		};
	}
	componentDidMount(){
		new window.AMap.Map(this.refs.amap,this.state);
	}
	render(){
		return (
			<div className="amapSpace clear">
				<h4 className="eachProgramTitle">地点位置</h4>
				<span className="address">106台北市大安区和平东路一段8号3楼</span>
				<div className="gd" ref="amap"></div>
			</div>
		);
	}
}

export default AMap;