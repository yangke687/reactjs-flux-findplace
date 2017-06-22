var alt = require('../alt');

class PlaceActions {
  fetchPlace() {
    return null;
  }

  updatePlace(place) {
    return place;
  }

  placeFailed(errorMessage) {
    return errorMessage;
  }
}

export default alt.createActions(PlaceActions);