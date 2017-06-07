import React from 'react';

class SearchBtn extends React.Component{
	render(){
		return (
			<div className="col-xs-12 mT100">
				<div className="hidden-print searchResultNavBar">
					<a href="#">
						<div className="btnReset">
							<div class="btnResetSubmit">
                                <span>重新设置搜索条件</span>
                            </div>
						</div>
					</a>
				</div>
			</div>
		);
	}
}

export default SearchBtn;