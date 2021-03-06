import React,{ Component } from 'react';
import { PUBLIC_PATH } from '../../sources/config';
class BillHeader extends Component {
  render() {
    const placeTitle = this.props.place.title? this.props.place.title : 'Loading...';
    const placeExcerpt = this.props.place.excerpt? this.props.place.excerpt : 'Loading...';
    return (
      <div>
        <div className="text-center bookProgramTitle">
          <h1>{ placeTitle }</h1>
          <h2>{ placeExcerpt }</h2>
          <div className="mT20">
            <span className="btn btnHour">价格 {this.props.place.price}/1小时</span>
          </div>
          <div className="bottomArrowWhite"></div>
          <div className="bottomArrow"></div>
        </div>
        <div className="steps text-center col-md-12">
          <h3 className="text-center">预定场地</h3>
          <div className="col-md-12">
            <section className="paymentWrapper">
              <div>
                <article className="text-center">
                  <img src={`${PUBLIC_PATH}/images/payment_icon-08.png`} />
                  <h3>选定场地方案</h3>
                  <p>请确定通用时段，修改方案时段可点选“看场地其他方案”</p>
                </article>
                <article className="text-center">
                  <img src={`${PUBLIC_PATH}/images/payment_icon-09.png`} />
                  <h3>送出预约申请</h3>
                  <p>点选「线上付款预订」填写预定信息</p>
                </article>
              </div>
              <div>
                <article className="text-center">
                  <img src={`${PUBLIC_PATH}/images/payment_icon-10.png`} />
                  <h3>等待场地回复</h3>
                  <p>场地24小时内回复预订结果</p>
                </article>
                <article className="text-center">
                  <img src={`${PUBLIC_PATH}/images/payment_icon-11.png`}/>
                  <h3>确认您的付款</h3>
                  <p>以上步骤仅为微信支付订金，场地确认后与您电话联系</p>
                </article>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default BillHeader;