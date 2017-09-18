import React from 'react';
import PlaceGallery from './placeGallery';
import { PUBLIC_PATH } from '../../../sources/config';

class PlaceInfo extends React.Component{
	render(){
		return (
			<div>
				<div className="clear programAreaTitle">
                    <div className="pull-left">
                        <h1 id="room_title">Treerful 小树屋｜古亭 302｜</h1>
                        <h2 id="room_title">完整独立空间，每小时$200元，不被打扰、不限使用人数。 
                        	<span>
                        		<a href="#">看场地其他方案</a>
                        	</span>
                        </h2>
                    </div>
                </div>
            	<div className="clear">
                    <div className="programShareArea">
                        <div className="tags">
                            <img src={`${PUBLIC_PATH}/images/house.png`} /> 
                            <a href="#">Treerful 小树屋｜古亭 302｜</a>
                        </div>
                        <div className="tags">
                            <img src={`${PUBLIC_PATH}/images/marker.png`} /> 
                            <a>台北市大安区</a>
                        </div>
                        <div className="tags">
                            <img src={`${PUBLIC_PATH}/images/person.png`} />
                            <a>0 ～ 8</a>
                        </div>
                        <div className="tags">
                            <img src={`${PUBLIC_PATH}/images/tags.png`} />
                            <a href="#"> 会议</a>
                            &nbsp; / &nbsp;
                            <a href="#"> 派对</a>
                            &nbsp; / &nbsp;
                            <a href="#"> 课程讲座</a>
                            &nbsp; / &nbsp;
                            <a href="#"> 拍摄摄影</a>
                            &nbsp; / &nbsp;
                            <a href="#"> 聚会餐饮</a>
                            &nbsp; / &nbsp; 
                            <a href="#"> 教育训练</a>
                        </div>
                	</div>
                    <div className="pull-right mT20">
                        <span className="btn btnHour">总价 $200/1hr</span>
                    </div>
                </div>
                <PlaceGallery />
            </div>
		);
	}
}

export default PlaceInfo;