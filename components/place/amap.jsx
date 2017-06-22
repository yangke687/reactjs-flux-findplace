import React from 'react';

class AMap extends React.Component{
	constructor(props){
		super(props);
		this.state = {
				
		};
	}
	getLocation() {
		
		console.log(lng,lat);
	}
	componentDidUpdate(){
		const lng = this.props.place.lng;
		const lat = this.props.place.lat;
		const map = new window.AMap.Map(this.refs.amap,{
			resizeEnable: true,
				zoom:15,
				center: [lng,lat],
		});
		const marker = new window.AMap.Marker({
				icon: "http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
				position: [lng,lat]
		});
		marker.setMap(map);
	}
	render(){
		if( !this.props.place.lng || !this.props.place.lat ){
			return <div>Loading...</div>;
		}
		return (
			<div className="amapSpace clear">
				<h4 className="eachProgramTitle">地点位置</h4>
				<span className="address">{this.props.place.addr}</span>
				<div className="gd" ref="amap"></div>
			</div>
		);
	}
}

export default AMap;