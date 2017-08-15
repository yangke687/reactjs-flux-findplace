import alt from '../alt';
import PlaceSource from '../sources/PlaceSource';

class PlaceActions {
  fetchPlace(placeId) {
    PlaceSource.fetch(placeId)
      .then(res => {
        res.json().then(json => {
          console.log(json.DATA);
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