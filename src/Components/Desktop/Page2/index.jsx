/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import { assets } from '@Constants';

import ScrollMagic from 'scrollmagic';
import { TimelineMax } from 'gsap';

import './page2.css';

class Demo extends Component {
	constructor(props) {
		super(props);
		this.winSize = {
			width: window.innerWidth,
			height: window.innerHeight
		};
	}

	componentDidMount() {
		const controller = new ScrollMagic.Controller();
		const width = 1174;
		const timeline = new TimelineMax();
		timeline
			.from('#t1 text', 0.1, {
				opacity: 0
			})
			.to('#t1 text', 0.1, {
				scale: 10,
				x: '-100%',
				y: '-100vh'
			})
			.to('#t1 svg', 0.1, {
				display: 'none'
			})
			.to('#t1 svg', 0.3, {})
			.to('#t1', 0.1, {
				opacity: 0
			})
			.from('#t2', 0.1, {
				opacity: 0
			})
			.to('#t2', 0.2, {})
			.to('#t2', 0.1, {
				opacity: 0
			})
			.from('.imgGirl', 0.1, {
				opacity: 0,
				x: '-20vw'
			})
			.from('#header3', 0.1, {
				opacity: 0
			})
			.from('.download', 0.1, {
				opacity: 0
			})
			.from('.imgPhoneIcon', 0.1, {
				opacity: 0
			})
			.to('#t3', 0.2, {});

		const scene1 = new ScrollMagic.Scene({
			triggerElement: '.page', // tùy chỉnh start
			triggerHook: 0,
			duration: '1900%' // tăng height cho #intro
		})
			.setTween(timeline)
			.setPin('.page')
			.addTo(controller);
	}

	render() {
		return (
			<div style={{ height: '1900vh', overflow: 'hidden' }}>
				<div className="container-fluid">
					<div className="page">
						<div className="row trigger" id="t1">
							<video
								muted
								playsInline
								loop
								aria-hidden
								autoPlay
								// data-video-source-basepath="/105/media/us/iphone-se/2020/90024c0f-285a-4bf5-af04-2c38de97b06e/anim/arcade-loop/"
								// class="enhanced-only vp-small video-loaded video-can-play video-download-complete"
								className="svg-clipped-text w-100"
								src={assets('intro_desktop.mp4')}
							/>
							<svg height="0" width="0" display>
								<clipPath id="SVGID_2_">
									<text
										x={this.winSize.width*0.4}
										y={this.winSize.height / 2}
										className="small"
										fill="red"
									>
										iBE
									</text>
								</clipPath>
							</svg>
						</div>
						<div className="container page">
							<div className="row trigger" id="t2">
								<div className="col-4 text-center my-auto" id="fb1">
									<img src={assets('fb1.png')} className="w-100" alt="iBe" />
								</div>
								<div className="col-4 text-center my-auto" id="fb2">
									<img src={assets('fb2.png')} className="w-100" alt="iBe" />
								</div>
								<div className="col-4 text-center my-auto" id="fb3">
									<img src={assets('fb3.png')} className="w-100" alt="iBe" />
								</div>
							</div>
							<div className="row trigger justify-content-center" id="t3">
								<div className="text-center" id="header3">
									<h1>
										UEF ĐÃ CHỌN IBE
										<br />
										CÒN BẠN THÌ SAO?
									</h1>
								</div>
								<div className="row download">
									<a
										className="h-100"
										href="https://play.google.com/store/apps/details?id=com.ibenefitvn.wpp&hl=vi"
										target="_blank"
									>
										<img src={assets('download_android.png')} className="h-100" alt="iBe" />
									</a>
									<a
										className="h-100"
										href="https://apps.apple.com/us/app/ibenefit/id1475237080"
										target="_blank"
									>
										<img src={assets('download_ios.png')} className="h-100 ml-3" alt="iBe" />
									</a>
								</div>
								<div className="row justify-content-center w-100">
									<img src={assets('page2_girl.png')} className="imgGirl" alt="iBe" />
								</div>
								<div className="imgPhoneIcon">
									<a href="tel:091 333 0804">
										<img src={assets('icon_phone.png')} className="h-100" alt="iBe" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Demo;
