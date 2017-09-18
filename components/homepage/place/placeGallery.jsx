import React,{Component} from 'react';
import { PUBLIC_PATH } from '../../..//sources/config'; 

class PlaceGallery extends Component{
	constructor(props){
		super(props);
		this.state = {
			'activeImgIdx': 0
		}
	}
	imgListRender(){
		return imgs.map((img,idx)=>{
			return (
				<div onClick={this.selectActiveImg.bind(this,idx)} key={idx} className="programPhotoThumbWrapper">
					<div className="programPhotoThumb" style={{"backgroundImage":"url('"+ img +"')"}}></div>
				</div>
			);
		});
	}
	selectActiveImg(idx){
		console.log('select',idx);
		this.setState({activeImgIdx: idx});
	}
	render(){
		let activeImgIdx = this.state.activeImgIdx;
		return (
			<div className="placeGallery">
				<div className="imgLiquidFill" style={{"backgroundImage":"url('"+imgs[activeImgIdx]+"')"}}></div>
				<div className="mobileProgramPhotoArea">
					<div className="mobileProgramPhotoBarBtn leftBtn">
						<img src={`${PUBLIC_PATH}/images/arrow.png`} />
					</div>
					<div id="programPhotoBar">
						{this.imgListRender()}
					</div>
					<div className="mobileProgramPhotoBarBtn rightBtn">
						<img src={${PUBLIC_PATH}`/images/arrow2.png`} />
					</div>
				</div>
			</div>
		);
	}
}

export default PlaceGallery;