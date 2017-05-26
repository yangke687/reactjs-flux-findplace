var alt = require('../alt');
var HomeActions = require('../actions/HomeActions');
var SelectedPlacesSource = require('../sources/SelectedPlacesSource');
var PlaceCategoriesSource = require('../sources/PlaceCategoriesSource');

class HomeStore {
	constructor() {
		this.selectedPlaces = [];
		this.placeCategories = [];
		this.placePosts = [];
		this.errorMessage = null;

		this.bindListeners({
			handleUpdateSelectedPlaces: HomeActions.UPDATE_SELECTED_PLACES,
			handleSelectedPlacesFailed: HomeActions.SELECTED_PLACES_FAILED,
			hanldeUpdatePlaceCategories: HomeActions.UPDATE_PLACE_CATEGORIES,
			handlePlaceCategoriesFailed: HomeActions.PLACE_CATEGORIES_FAILED,
		});

		this.exportAsync(SelectedPlacesSource);
		this.exportAsync(PlaceCategoriesSource);
	}

	handleUpdateSelectedPlaces(places) {
		this.selectedPlaces = places;
		this.errorMessage = null;
	}

	handleSelectedPlacesFailed(errorMessage) {
		this.errorMessage = errorMessage;
	}

	hanldeUpdatePlaceCategories(categories) {
		this.placeCategories = categories;
	}

	handlePlaceCategoriesFailed(errorMessage) {
		this.errorMessage = errorMessage;
	}
}

export default alt.createStore(HomeStore, 'HomeStore');