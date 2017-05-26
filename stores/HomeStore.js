var alt = require('../alt');
var HomeActions = require('../actions/HomeActions');
var SelectedPlacesSource = require('../sources/SelectedPlacesSource');

class HomeStore {
	constructor() {
		this.selectedPlaces = [];
		this.placeCategories = [];
		this.placePosts = [];
		this.errorMessage = null;

		this.bindListeners({
			handleUpdateSelectedPlaces: HomeActions.UPDATE_SELECTED_PLACES,
			handleSelectedPlacesFailed: HomeActions.SELECTED_PLACES_FAILED,
		});

		this.exportAsync(SelectedPlacesSource);
	}

	handleUpdateSelectedPlaces(places) {
		this.selectedPlaces = places;
		this.errorMessage = null;
	}

	handleSelectedPlacesFailed(errorMessage) {
		this.errorMessage = errorMessage;
	}
}

export default alt.createStore(HomeStore, 'HomeStore');