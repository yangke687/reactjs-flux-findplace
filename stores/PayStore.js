var alt = require('../alt');
var PayActions = require('../actions/PayActions');

class PayStore {
  constructor(){
    this.payOrder = {};
    this.errorMessage = null;

    this.bindListeners({
      handleFetchPayOrder: PayActions.FETCH_PAY_ORDER,
      handleUpdatePayOrder: PayActions.UPDATE_PAY_ORDER,
      handlePayOrderFailed: PayActions.PAY_ORDER_FAILED,
    });
  }

  handleFetchPayOrder() {
    this.payOrder = {};
  }

  handleUpdatePayOrder(order) {
    this.payOrder = order;
  }

  handlePayOrderFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }
}

export default alt.createStore(PayStore,'PayStore');