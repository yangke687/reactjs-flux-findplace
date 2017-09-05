import React, { Component } from 'react';

import NavBar from './bill/navbar';
import PayActions from '../actions/PayActions';
import PayStore from '../stores/PayStore';

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
                  <div>
                    <h4 className="eachProgramTitle">订单号</h4>
                    <p>7e57d004-2b97-0e7a</p>
                  </div>
                  <div>
                    <h4 className="eachProgramTitle">场地详情</h4>
                    <h5>场地: 星耀路 都铎城邦 | 运动公园 | 足球场 | #1</h5>
                    <h5>地点: 环湖东路 滇池东岸</h5>
                    <h5>容纳: 0-40人</h5>
                    <h5>活动: 体育运动 / 聚会餐饮 / 摄影摄像</h5>
                  </div>
                  <div>
                    <h4 className="eachProgramTitle">时间段</h4>
                    <h5>2017年09月01日</h5>
                    <p>
                      12:00 ~ 12:30 <br/>
                      12:30 ~ 13:00 <br/>
                      14:30 ~ 15:00 <br/>
                    </p>
                  </div>
                  <div>
                    <h4 className="eachProgramTitle">支付金额:</h4>
                    <h5>¥ 150.00</h5>
                  </div>
                  <div className="searchNavbar text-center" style={{paddingLeft: 0, paddingRight: 0}}>
                    <button className="btn btn-block btnSearch">确认支付</button>
                  </div>
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