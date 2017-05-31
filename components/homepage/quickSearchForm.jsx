import React from 'react';
import UsesSelect from './widgets/usesSelect';

class QuickSearchForm extends React.Component {
	render() {
		return (<form>
			<section className="sectionWrapper">
				<h1>1000多个类型场地 , 立即浏览</h1>
				<div className="centerDropdown">
					<div className="dropdown evtType">
						<UsesSelect />
					</div>
					<button className="orangeBtn" type="submit">浏览场地</button>
				</div>
			</section>
		</form>);
	}
}

export default QuickSearchForm;