var alt = require('../alt');

class SearchActions {

	updateSearchPlaces(places){
		return places;
	}	

	fetchSearchPlaces(){
		return null;
	}

	searchPlacesFailed(errorMessage){
		return errorMessage;
	}
}

export default alt.createActions(SearchActions);