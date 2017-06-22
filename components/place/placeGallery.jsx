import React,{Component} from 'react';

class PlaceGallery extends Component{
	constructor(props){
		super(props);
		this.state = {
			'activeImgIdx': 0
		}
	}
	imgListRender(){
		return this.props.gallery.map((img,idx)=>{
			return (
				<div onClick={this.selectActiveImg.bind(this,idx)} key={idx} className="programPhotoThumbWrapper">
					<div className="programPhotoThumb" style={{"backgroundImage":"url('"+ img +"')"}}></div>
				</div>
			);
		});
	}
	selectActiveImg(idx){
		this.setState({activeImgIdx: idx});
	}
	render(){
		if(!this.props.gallery){
			return <div>Loading...</div>;
		}
		let activeImgIdx = this.state.activeImgIdx;
		return (
			<div className="placeGallery">
				<div className="imgLiquidFill" style={{"backgroundImage":"url('"+this.props.gallery[activeImgIdx]+"')"}}></div>
				<div className="mobileProgramPhotoArea">
					<div className="mobileProgramPhotoBarBtn leftBtn">
						<img src="/images/arrow.png" />
                    </div>
                   	<div id="programPhotoBar">
                   		{this.imgListRender()}
                   	</div>
					<div className="mobileProgramPhotoBarBtn rightBtn">
                    	<img src="/images/arrow2.png" />
                    </div>
				</div>
			</div>
		);
	}
}

export default PlaceGallery;