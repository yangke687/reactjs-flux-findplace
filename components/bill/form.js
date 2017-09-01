import React, { Component } from 'react';
import { API_URL } from '../../sources/config';

class BillForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      eventType: null,
      useType: null,
      contactor: null,
      peopleCount: null,
      phone: null,
      email: null,
      corpName: null,
      recipients: null,
      recvAddr: null,
      message: null,
      /** 
        accept servie rules
      */
      accept: false,
      /** 
        props
      */
      placeID: props.placeId,
      year: props.selectedYear,
      month: props.selectedMonth,
      day: props.selectedDay,
      times: JSON.stringify(props.selectedTimes),
      /**
        amount
      */
      price: 0.1,
      total: 0.1,
    };
    this.change = this.change.bind(this);
    this.toggle= this.toggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      year: nextProps.selectedYear,
      month: nextProps.selectedMonth,
      day: nextProps.selectedDay,
      times: JSON.stringify(nextProps.selectedTimes),
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    fetch(`${API_URL}/saveOrder.do`,{
      method: 'POST',
      body: this.state,
    }).then(function(res){
      res.json().then(function(json){
        const orderId = json.obj;
        window.location = `/#/pay/${orderId}`;
      });
    });
  }

  toggle() {
   this.state['accept'] = !this.state.accept; 
  }

  change(evt){
    this.state[evt.target.name] = evt.target.value;
  }

  render() {
    return (
      <div className="form col-md-12">
        <form>
          <fieldset>

            <div className="row">
              <section className="col col-6">
                <label className="label">
                  活动
                </label>
                <select 
                  name="eventType" 
                  id="eventType" 
                  className="form-control"
                  onChange={this.change}
                  value={this.state.eventType}
                >
                  <option value="">选择...</option>
                  <option value="会议">会议</option>	
                  <option value="聚会">聚会</option>	
                  <option value="课程">课程</option>	
                  <option value="讲座">讲座</option>	
                  <option value="外景拍摄">外景拍摄</option>	
                  <option value="摄影">摄影</option>	
                  <option value="展览">展览</option>	
                  <option value="体育健身">体育健身</option>	
                  <option value="婚礼">婚礼</option>	
                  <option value="派对">派对</option>	
                  <option value="其他">其他</option>
							  </select>
              </section>
              <section className="col col-6">
                <label className="label">
                  使用人类别
                </label>
                <select 
                  name="useType"
                  id="useType" 
                  className="form-control"
                  onchange={this.change}
                  value={this.state.useType}>
                  <option value="">选择...</option>
                  <option value="个人">个人</option>	
                  <option value="公司">公司</option>	
                </select>
              </section>
            </div>

            <div className="row">
              <section className="col col-6">
                <label className="label">
                  姓名
                </label>
                <input 
                  type="text" 
                  name="contactor" 
                  className="form-control" 
                  placeholder="填入您的姓名..." 
                  onChange={this.change}
                  value={this.state.contactor}
                />
              </section>
              <section className="col col-6">
                <label className="label">
                  人数
                </label>
                <input 
                  type="number"
                  name="peopleCount"
                  className="form-control"
                  min="1" 
                  placeholder="填入预约人数..." 
                  onChange={this.change}
                  value={this.state.peopleCount}
                />
              </section>
            </div>
           
            <div className="row">
              <section className="col col-6">
                <label className="label">
                  电话
                </label>
                <input 
                  type="text"
                  name="phone" 
                  className="form-control" 
                  placeholder="填入您的手机号码..." 
                  onChange={this.change}
                  value={this.state.phone}
                />
              </section>
              <section className="col col-6">
                <label className="label">
                  E-Mail
                </label>
                <input 
                  type="email" 
                  name="email"
                  className="form-control" 
                  placeholder="填入您的Email..." 
                  onChange={this.change}
                  value={this.state.email}
                />
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
                <input 
                  type="text" 
                  name="corpName"
                  className="form-control" 
                  placeholder="填入公司名称..." 
                  onChange={this.change}
                  value={this.state.corpName}
                />
              </section>
            </div>

            <div className="row">
              <section className="col col-6">
                <label className="label">
                  收件人姓名
                </label>
                <input 
                  type="text" 
                  name="recipients"
                  className="form-control" 
                  placeholder="填入收件人姓名..." 
                  onChange={this.change}
                  value={this.state.recipients}
                />
              </section>
              <section className="col col-6">
                <label className="label">
                  收件人地址
                </label>
                <input 
                  type="number" 
                  name="recvAddr"
                  className="form-control" 
                  min="1" 
                  placeholder="填入收件人地址..." 
                  onChange={this.change}
                  value={this.state.recvAddr}
                />
              </section>
            </div>

            <div className="row">
              <section>
                <label className="label">
                  留言
                </label>
                <textarea 
                  name="message"
                  className="form-control"
                  rows="5"
                  placeholder="請輸入您问题..."
                  onChange={this.change}
                >
                {this.state.message}
                </textarea>
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
              <div className="col-xs-8 text-right">{this.state.total}</div>
            </div>

            <div className="row confirmInfo">
              <div className="col-xs-2">
                <input 
                  type="checkbox"
                  id="confirmCheck" 
                  onChange={this.toggle} />
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
                  onClick={this.handleSubmit}>预约</button>
              </div>
            </div>

          </fieldset>
        </form>
      </div>
    );
  }
}

export default BillForm; 