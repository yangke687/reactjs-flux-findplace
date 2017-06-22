import React from 'react';
import AltContainer from 'alt-container';
import SearchStore from '../stores/SearchStore';

import NavBar from './bill/navbar';
import SearchForm from './search/searchForm';
import SearchResults from './search/searchResults';

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
			<div className="container">
				<div className="row">
					<SearchForm />
					<AltContainer store={SearchStore}>
						<SearchResults />
					</AltContainer>
				</div>
			</div>
		</div>);
	}
	componentDidMount(){
		SearchStore.fetchSearchPlaces();
	}
}

export default AppSearch;