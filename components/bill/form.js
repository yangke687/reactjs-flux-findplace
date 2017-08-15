import React, { Component } from 'react';

class BillForm extends Component {

  handleSubmit(evt) {
    evt.preventDefault();
    console.log('submit info', this.props);
  }

  render() {
    return (
      <div className="form col-md-12">
        <form>
          <fieldset>

            <div className="row">
              <section className="col col-6">
                <label className="label">
                  目的
                </label>
                <select name="event_type" id="eventType" className="form-control">
                  <option value="">选择...</option>
                  <option value="1">会议</option>	
                  <option value="2">聚会</option>	
                  <option value="3">记者会/商品发布</option>	
                  <option value="41">课程</option>	
                  <option value="42">讲座</option>	
                  <option value="5">外景拍摄</option>	
                  <option value="6">摄影</option>	
                  <option value="7">展览</option>	
                  <option value="8">体育健身</option>	
                  <option value="9">婚礼</option>	
                  <option value="10">派对</option>	
                  <option value="100">其他</option>
							  </select>
              </section>
              <section className="col col-6">
                <label className="label">
                  使用人类别
                </label>
                <select name="use_type" id="useType" className="form-control">
                  <option value="">选择...</option>
                  <option value="1">个人</option>	
                  <option value="2">公司</option>	
                </select>
              </section>
            </div>

            <div className="row">
              <section className="col col-6">
                <label className="label">
                  姓名
                </label>
                <input type="text" className="form-control" placeholder="填入您的姓名..." />
              </section>
              <section className="col col-6">
                <label className="label">
                  人数
                </label>
                <input type="number" className="form-control"  min="1" placeholder="填入预约人数..." />
              </section>
            </div>
           
            <div className="row">
              <section className="col col-6">
                <label className="label">
                  电话
                </label>
                <input type="text" className="form-control" placeholder="填入您的手机号码..." />
              </section>
              <section className="col col-6">
                <label className="label">
                  E-Mail
                </label>
                <input type="email" className="form-control" placeholder="填入您的Email..." />
              </section>
            </div>

            <hr />

            <h3>发票信息</h3>
            <h4>资料信息请填写完整</h4>

            <div className="row">
              <section className="col col-6">
                <label className="label">
                  公司名称
                </label>
                <input type="text" className="form-control" placeholder="填入公司名称..." />
              </section>
              <section className="col col-6">
                <label className="label">
                  公司编号
                </label>
                <input type="number" className="form-control"  min="1" placeholder="填入公司编号..." />
              </section>
            </div>

            <div className="row">
              <section className="col col-6">
                <label className="label">
                  收件人姓名
                </label>
                <input type="text" className="form-control" placeholder="填入收件人姓名..." />
              </section>
              <section className="col col-6">
                <label className="label">
                  收件人地址
                </label>
                <input type="number" className="form-control"  min="1" placeholder="填入收件人地址..." />
              </section>
            </div>

            <div className="row">
              <section>
                <label className="label">
                  留言
                </label>
                <textarea className="form-control" rows="5" placeholder="請輸入您问题..."></textarea>
              </section>
            </div>

            <div className="row priceInfo" style={{display:"none"}}>
              <div className="col-xs-4">小计</div>
              <div className="col-xs-8 text-right">280</div>
            </div>

            <div className="row" style={{display:"none"}}>
              <div className="col-xs-12 coupon">折扣码</div>
              <div className="col-xs-8">
                <input type="text" className="input-code" id="discountCode" placeholder="输入折扣码" />
              </div>
              <div className="col-xs-4 text-right">
                <button className="btn" id="btnCode">使用</button>
              </div>
            </div>

            <div className="row priceInfo total">
              <hr style={{display:"none"}}/>
              <div className="col-xs-4">总金额</div>
              <div className="col-xs-8 text-right">280</div>
            </div>

            <div className="row confirmInfo">
              <div className="col-xs-2">
                <input type="checkbox" id="confirmCheck" />
              </div>
              <div className="col-xs-10">
                我已经了解「微信预付定金不代表预约完成，收到确认回复才表示预约完成」
              </div>
            </div>

            <div className="row">
              <div className="mT20 mD20 mB50">
                <button 
                  id="submitBook" 
                  className="btn btnSearch btn-block"
                  onClick={this.handleSubmit.bind(this)}>预约</button>
              </div>
            </div>

          </fieldset>
        </form>
      </div>
    );
  }
}

export default BillForm; 