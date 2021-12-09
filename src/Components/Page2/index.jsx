/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from "react";
import { gsap } from "gsap/dist/gsap";

import { assets } from "@Constants";

const Page2 = ({ ref_loading, pageWidth, pageHeight }) => {
  const _refElement = {};
  // const pageHeight = window.innerHeight;
  // const pageWidth = window.innerWidth;
  const beginPage = 0;
  const marker = false;
  const config = {
    scrub: 1,
    markers: marker,
  };

  const betaHeight = pageHeight / 812;

  const page2 = {
    intro_phone1: {
      right: -window.innerWidth,
      top: 160 * betaHeight,
      opacity: 0,
    },
    intro_phone2: {
      right: -window.innerWidth,
      top: 260 * betaHeight,
      opacity: 0,
    },
    intro_phone3: {
      right: -window.innerWidth,
      top: 390 * betaHeight,
      opacity: 0,
    },
  };

  useEffect(() => {
    // text intro phone 1
    gsap.to(_refElement.phone_feature_1, {
      scrollTrigger: {
        trigger: ref_loading,
        start: `${pageHeight / 2 + 1600}`,
        end: `+=${200}`,
        id: "phone_feature_1",
        ...config,
        onUpdate: self => {
          const progress = Number(self.progress.toFixed(3));

          if (progress > 0) {
            _refElement.title_section_2.style.position = "fixed";
            _refElement.download_app.style.display = "block";

          } else {
            _refElement.title_section_2.style.position = "absolute";
            _refElement.download_app.style.display = "none";
          }
          
          _refElement.download_app.style.opacity = progress;
          _refElement.title_section_2.style.opacity = progress;

          _refElement.phone_feature_1.style.right = `${-pageWidth +
            pageWidth * progress}px`;

          const opacity = progress + 0.5 * (1 - progress);

          _refElement.phone_feature_1.style.opacity = opacity;

          const posY = gsap.getProperty("#phone_feature_1", "top");

          _refElement.phone_feature_1.setAttribute("data-y", posY);
        },
      },
      ease: "bounce",
    });

    // text intro phone 2
    gsap.to(_refElement.phone_feature_2, {
      scrollTrigger: {
        trigger: ref_loading,
        start: `${pageHeight / 2 + 2000}`,
        end: `+=${200}`,
        id: "phone_feature_2",
        ...config,
        onUpdate: self => {
          const progress = Number(self.progress.toFixed(3));

          _refElement.phone_feature_2.style.right = `${-pageWidth +
            pageWidth * progress}px`;

          const opacity = progress + 0.5 * (1 - progress);

          _refElement.phone_feature_2.style.opacity = opacity;

          const posY = gsap.getProperty("#phone_feature_2", "top");

          _refElement.phone_feature_2.setAttribute("data-y", posY);
        },
      },
    });

    // text intro phone3
    gsap.to(_refElement.phone_feature_3, {
      scrollTrigger: {
        trigger: ref_loading,
        start: `${pageHeight / 2 + 2400}`,
        end: `+=${200}`,
        id: "phone_feature_3",
        ...config,
        onUpdate: self => {
          const progress = Number(self.progress.toFixed(3));

          _refElement.phone_feature_3.style.right = `${-pageWidth +
            pageWidth * progress}px`;

          const opacity = progress + 0.5 * (1 - progress);

          _refElement.phone_feature_3.style.opacity = opacity;

          const posY = gsap.getProperty("#phone_feature_3", "top");

          _refElement.phone_feature_3.setAttribute("data-y", posY);
        },
      },
    });

    // end section 2
    gsap.to(_refElement.end_section_2, {
      scrollTrigger: {
        trigger: _refElement.loading,
        start: `${pageHeight / 2 + 3000}`,
        end: `+=${200}`,
        id: "end_section_2",
        ...config,
        onUpdate: self => {
          const progress = Number(self.progress.toFixed(3));
          // phone text 1
          _refElement.phone_feature_1.style.opacity = 1 - progress;

          // phone text 2
          _refElement.phone_feature_2.style.opacity = 1 - progress;

          // phone text 3
          _refElement.phone_feature_3.style.opacity = 1 - progress;

          if (progress > 0) {
            _refElement.download_app.style.display = "none";
          } else {
            _refElement.download_app.style.display = "block";
          }
        },
      },
    });

  });

  return (
    <>
      <div id="page2">
        <div
          id="section2"
          className="intro_feature"
          ref={ele => {
            if (ele) {
              _refElement.section2 = ele;
            }
          }}
        >
          <p
            className="title"
            ref={ele => {
              if (ele) {
                _refElement.title_section_2 = ele;
              }
            }}
            style={{
              position: "absolute",
              opacity: 0,
            }}
          >
            Bạn được
          </p>
          <div className="text_intro_phone">
            <div
              className="line"
              id="phone_feature_1"
              ref={ele => {
                if (ele) {
                  _refElement.phone_feature_1 = ele;
                }
              }}
              style={{
                right: page2.intro_phone1.right,
                top: page2.intro_phone1.top,
                opacity: page2.intro_phone1.top,
              }}
            >
              <p>Ứng tiền</p>
              <h4>500.000đ - 1.000.000 đ</h4>
              <span />
            </div>

            <div
              className="line"
              ref={ele => {
                if (ele) {
                  _refElement.phone_feature_2 = ele;
                }
              }}
              id="phone_feature_2"
              style={{
                right: page2.intro_phone2.right,
                top: page2.intro_phone2.top,
                opacity: page2.intro_phone2.top,
              }}
            >
              <p>
                Từ<b>1 - 7 ngày</b>
              </p>
              <span />
            </div>

            <div
              className="line"
              ref={ele => {
                if (ele) {
                  _refElement.phone_feature_3 = ele;
                }
              }}
              id="phone_feature_3"
              style={{
                right: page2.intro_phone3.right,
                top: page2.intro_phone3.top,
                opacity: page2.intro_phone3.top,
              }}
            >
              <p>
                Tip từ<b>5K - 70K</b>
              </p>
              <span />
              <div className="diver" />
              <p>Tùy thuộc bảng điểm</p>
              <p>học tập & số lượng</p>
              <p>người ứng</p>
            </div>
            <div
              className="download_button"
              ref={ele => {
                if (ele) {
                  _refElement.download_app = ele;
                }
              }}
              style={{
                display: "none",
                bottom: 70,
                opacity: 0,
                left: 20,
                width: pageWidth / 2
              }}
            >
              <a
                href="https://apps.apple.com/us/app/ibenefit/id1475237080"
                target="_blank"
              >
                <img alt="ibe" src={assets("download_ios.png")} />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.ibenefitvn.wpp&hl=vi"
                target="_blank"
              >
                <img alt="ibe" src={assets("download_android.png")} />
              </a>
            </div>
          </div>
        </div>
        <div
          ref={ele => {
            if (ele) {
              _refElement.end_section_2 = ele;
            }
          }}
        />
      </div>
    </>
  );
};

export default Page2;
