import React,{Component} from 'react';

const imgs = [
'http://i.imgur.com/ubODjpt.jpg',
'http://i.imgur.com/TUoIzVf.jpg',
'http://i.imgur.com/2nfpJDT.jpg',
'http://i.imgur.com/Ky6MtZ9.jpg',
'http://i.imgur.com/mDn4g8R.jpg',
'http://i.imgur.com/gW42PcP.jpg',
];

class PlaceGallery extends Component{
	imgListRender(){
		return imgs.map((img,idx)=>{
			return (
				<div key={idx}>
					<div className="programPhotoThumb" style={{"backgroundImage":"url('"+ img +"')"}}></div>
				</div>
			);
		});
	}
	render(){
		return (
			<div className="placeGallery">
				<div className="imgLiquidFill" style={{"backgroundImage":"url('"+imgs[0]+"')"}}></div>
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