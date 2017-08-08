import alt from '../alt';
import PlaceSource from '../sources/PlaceSource';

class PlaceActions {
  fetchPlace(placeId) {
    PlaceSource.fetch(placeId)
      .then(res => {
        res.json().then(json => {
          this.updatePlace(json.DATA);
        });
      });
  }

  updatePlace(place) {
    return place;
  }

  placeFailed(errorMessage) {
    return errorMessage;
  }
}

export default alt.createActions(PlaceActions);