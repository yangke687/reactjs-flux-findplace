import React from 'react';

class PayInfo extends React.Component{
  render() {
    if( !this.props.payOrder.ORDER ) {
      return (<div>Loading...</div>);
    }
    console.log('payOrder:', this.props.payOrder);
    const times = JSON.parse(this.props.payOrder.ORDER.times);
    return (
      <div>
        <div>
          <h4 className="eachProgramTitle">订单号</h4>
          <p>{this.props.payOrder.ORDER.code}</p>
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
          <button className="btn btn-block btnSearch">确认支付</button>
        </div>
      </div>
    );
  }
}

export default PayInfo;