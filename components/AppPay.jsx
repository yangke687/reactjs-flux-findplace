import React, { Component } from 'react';
import AltContainer from 'alt-container';

import NavBar from './bill/navbar';
import PayActions from '../actions/PayActions';
import PayStore from '../stores/PayStore';
import PayInfo from './pay/payInfo';

class AppPay extends React.Component {
  constructor(props) {
    super(props);
    const orderId = this.props? this.props.params.order: null;
    this.state = { orderId };
  }

  componentDidMount() {
    window.scrollTo(0,0);
    PayActions.fetchPayOrder(this.state.orderId);
  }

  render() {
    return (
      <div className="single-place clear">
        <NavBar />
        <div className="container search clear">
          <div className="row">
            <div className="col-xs-12 mT100">
              <div className="mobileProgramArea">
                <div className="clear programSiteTime">
                  <AltContainer store={PayStore}>
                    <PayInfo />
                  </AltContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppPay;