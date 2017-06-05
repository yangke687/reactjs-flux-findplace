var alt = require('../alt');
var SearchActions = require('../actions/SearchActions');
var SearchPlacesSource = require('../sources/SearchPlacesSource');

class SearchStore {
	constructor(){
		this.searchPlaces = [];
		this.errorMessage = null;

		this.bindListeners({
			handleUpdateSearchPlaces: SearchActions.UPDATE_SEARCH_PLACES,
			handleSearchPlacesFailed: SearchActions.SEARCH_PLACES_FAILED,
		});

		this.exportAsync(SearchPlacesSource);
	}

	handleUpdateSearchPlaces(places){
		this.searchPlaces = places;
		this.errorMessage = null;
	}

	handleSearchPlacesFailed(errorMessage){
		this.errorMessage = errorMessage;
	}
}

export default alt.createStore(SearchStore,'SearchStore');