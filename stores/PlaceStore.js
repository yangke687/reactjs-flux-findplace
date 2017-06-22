var alt = require('../alt');
var PlaceActions = require('../actions/PlaceActions');
var PlaceSource = require('../sources/PlaceSource');

class PlaceStore {
  constructor() {
    this.place = {};
    this.errorMessage = null;

    this.bindListeners({
      handleUpdatePlace: PlaceActions.UPDATE_PLACE,
      handlePlaceFailed: PlaceActions.PLACE_FAILED,
    });

    this.exportAsync(PlaceSource);
  }

  handleUpdatePlace(place) {
    this.place = place;
    this.errorMessage = null;
  }

  handlePlaceFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }
}

export default alt.createStore(PlaceStore,'PlaceStore');
