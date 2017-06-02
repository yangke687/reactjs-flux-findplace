import React from 'react';

import NavBar from './search/navbar';
import SearchForm from './search/searchForm';

class AppSearch extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			filters: this.props.params
		};
	}
	render(){
		return (<div className="search">
			<NavBar />
			<SearchForm />
		</div>);
	}
}

export default AppSearch;