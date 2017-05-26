var alt = require('../alt');

class HomeActions {

	updateSelectedPlaces(places) {
		return places;
	}

	fetchSelectedPlaces() {
		return null;
	}

	selectedPlacesFailed(errorMessage) {
		return errorMessage;
	}

	updatePlaceCategories(categories) {
		return categories;
	}

	placeCategoriesFailed(errorMessage) {
		return errorMessage;
	}

	updatePlacePosts(posts) {
		return posts;
	}

	placePostsFailed(errorMessage) {
		return errorMessage;
	}
}

export default alt.createActions(HomeActions);