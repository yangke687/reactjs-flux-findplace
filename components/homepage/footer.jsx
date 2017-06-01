import React from 'react';

class Footer extends React.Component{
	render(){
		return (
			<footer className="footer">
				<section className="sectionWrapper">
					<div>
						<aside></aside>
					</div>
					<article className="footerContent">
						<div>
							<a href="#">
								<p>关于Pickone</p>
							</a>
							<ul>
								<li className="footerLiTitle">场地內容</li>
								<a href="#"><li>找场地</li></a>
								<a href="#"><li>场地志</li></a>
								<a href="#"><li>帮我找</li></a>
							</ul>
							<ul>
								<li className="footerLiTitle">合作提案</li>
								<a href="#"><li>刊场地</li></a>
							</ul>
							<ul>
								<li className="footerLiTitle">媒体报道</li>
								<a target="_blank" href="#"><li>AppWorks</li></a>
								<a target="_blank" href="#"><li>数位时代</li></a>
								<a target="_blank" href="#"><li>Inside</li></a>		
							</ul>
							<ul>
								<li className="footerLiTitle">网站条款</li>
								<a href="#"><li>服务条款</li></a>
							</ul>
							<small>
								本网站的所有内容均由用戶提供，如有触犯您的知识版权，请联系我们，我們會在接到投诉后即时处理。
								<br />
								<br />© pickone 挑场地 2014 All Rights Reserved
							</small>
						</div>
						<div>
							<a target="_blank" href="#">
								<article className="facebook"></article>
							</a>
							<a target="_blank" href="#">
								<article className="email"></article>
							</a>
							<ul className="contactUs">
								<li className="footerLiTitle">联系我們</li>
							</ul>
						</div>
					</article>
				</section>
			</footer>
		);
	}
}

export default Footer;