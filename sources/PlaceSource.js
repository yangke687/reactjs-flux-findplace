import PlaceActions from '../actions/PlaceActions';
import { API_URL } from './config';

const PlaceSource = {
  fetch(placeId) {
    return fetch(`${API_URL}/getPlaceById.do?id=${placeId}`,{
      method: 'GET',
    });
  }
};

export default PlaceSource;