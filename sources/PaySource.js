import PayActions from '../actions/PayActions';
import { API_URL } from './config';

const PaySource = {
  fetch(orderId) {
    return fetch(`${API_URL}/getOrderById.do?id=${orderId}`, {
      method: 'GET',
    });
  }
}

export default PaySource;