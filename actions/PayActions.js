import alt from '../alt';
import PaySource from '../sources/PaySource';

class PayActions {
  fetchPayOrder(orderId) {
    PaySource.fetch(orderId)
      .then(res => {
        res.json().then(json => {
          this.updateOrder(json.DATA);
        });
      });
  }

  updatePayOrder(order) {
    return order;
  }

  payOrderFailed(errorMessage) {
    return errorMessage;
  }
}

export default alt.createActions(PayActions);