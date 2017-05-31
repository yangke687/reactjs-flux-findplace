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

	fetchPlaceCategories() {
		return null;
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

	updatePosts(posts) {
		return posts;
	}

	postsFailed(errorMessage) {
		return errorMessage;
	}

	fetchPosts() {
		return null;
	}
}

export default alt.createActions(HomeActions);