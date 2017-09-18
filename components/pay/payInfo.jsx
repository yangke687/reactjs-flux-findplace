import React from 'react';
import { API_URL } from '../../sources/config';

class PayInfo extends React.Component{
  constructor(props) {
    super(props);
    this.state = { orderId: props.orderId }
  }
  pay() {
    if(localStorage.getItem('gfsq_openId')) {
      const openId = localStorage.getItem('gfsq_openId');
      window.location = `${API_URL}/orderPay.do?orderId=${this.state.orderId}&openId=${openId}`;
    } else {
      alert('获取openId失败!');
    }
  }
  render() {
    if( !this.props.payOrder.ORDER ) {
      return (<div>Loading...</div>);
    }
    const times = JSON.parse(this.props.payOrder.ORDER.times);
    return (
      <div>
        <div>
          <h4 className="eachProgramTitle">订单号</h4>
          <p>{this.props.payOrder.ORDER.code}</p>
        </div>
        <div>
          <h4 className="eachProgramTitle">场地详情</h4>
          <h5>场地: { this.props.payOrder.PLACE.placeName }</h5>
          <h5>地点: { this.props.payOrder.PLACE.locationContent }</h5>
          <h5>容纳: 0-{ this.props.payOrder.PLACE.personNum }人</h5>
          <h5>预订人: { this.props.payOrder.ORDER.contactor }</h5>
          <h5>联系电话: { this.props.payOrder.ORDER.phone }</h5>
        </div>
        <div>
          <h4 className="eachProgramTitle">时间段</h4>
          <h5>2017年09月01日</h5>
          <p>
            { times.map((time) => {
              return (<div style={{fontSize: 14}}>{time}</div>);
            }) }
          </p>
        </div>
        <div>
          <h4 className="eachProgramTitle">支付金额:</h4>
          <h5>¥ {this.props.payOrder.ORDER.total}</h5>
        </div>
        <div className="searchNavbar text-center" style={{paddingLeft: 0, paddingRight: 0}}>
          <button className="btn btn-block btnSearch" onClick={this.pay.bind(this)}>确认支付</button>
        </div>
      </div>
    );
  }
}

export default PayInfo;