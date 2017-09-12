import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import URI from 'urijs';
import axios from 'axios';

import { API_URL, APP_ID, APP_SECRET } from './sources/config';
import AppRoot from './components/AppRoot';
import AppSearch from './components/AppSearch';
import AppPlace from './components/AppPlace';
import AppBill from './components/AppBill';
import AppPay from './components/AppPay';

const generateGetCodeUrl = function(redirectURL) {
	return new URI('https://open.weixin.qq.com/connect/oauth2/authorize')
        .addQuery("appid", APP_ID)
        .addQuery("redirect_uri", redirectURL)
        .addQuery("response_type", "code")
        .addQuery("scope", "snsapi_userinfo")
        .addQuery("response_type", "code")
        .hash("wechat_redirect")
        .toString();
}

const generateGetTokenUrl = function(code) {
	return new URI(`${API_URL}/doPost.do`)
		.addQuery('code', code)
		.toString();
}

const wechatAuth = function(nextState, replace, next) {
	const uri = new URI(document.location.href);
	const query = uri.query(true);
	const {code} = query;
	
	if(code) {
			/**
			 * get openid
			 */
			axios.get(generateGetTokenUrl(code))
				.then(function(res){
					console.log(res);
					if(res.data && res.data.obj){
						localStorage.setItem('gfsq_openId',res.data.obj);
						next();
					}
					else{
						alert('获取openID失败!');
					}
				});
	} else {
			document.location = generateGetCodeUrl(document.location.href);
	}
}

ReactDOM.render(
	(<Router history={browserHistory}>
		<Route path="/" 
			onEnter={wechatAuth.bind(this)}
			component={AppSearch} />
		<Route path="/place/:id" component={AppPlace} />
		<Route path="/bill/:id" component={AppBill} />
		<Route path="/search(/:uses)(/:county)(/:max_people)(/:keywords)" component={AppSearch} />
		<Route path="/pay/:order" component={AppPay} />
	</Router>),
	document.getElementById('app-root')
);