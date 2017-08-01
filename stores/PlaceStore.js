var alt = require('../alt');
var PlaceActions = require('../actions/PlaceActions');
//var PlaceSource = require('../sources/PlaceSource');

class PlaceStore {
  constructor() {
    this.place = {};
    this.errorMessage = null;

    this.bindListeners({
      handleFetchPlace: PlaceActions.FETCH_PLACE,
      handleUpdatePlace: PlaceActions.UPDATE_PLACE,
      handlePlaceFailed: PlaceActions.PLACE_FAILED,
    });
    //this.exportAsync(PlaceSource);
  }

  handleFetchPlace() {
    this.place = {};
  }

  handleUpdatePlace(place) {
    this.place = place;
    this.errorMessage = null;
  }

  handlePlaceFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }

  handleUpdatePlaceId(placeId) {
    this.placeId = placeId;
  }
}

export default alt.createStore(PlaceStore,'PlaceStore');
