/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { assets } from "@Constants";

const Page4 = ({ ref_loading, pageWidth, pageHeight }) => {
  const _refElement = {};
  // const pageHeight = window.innerHeight;
  // const pageWidth = window.innerWidth;
  const beginPage = 0;
  const marker = false;
  const config = {
    scrub: 1,
    markers: marker,
  };

  const page4 = {};

  useEffect(() => {
    // begin section 4
    gsap.to(_refElement.section4, {
      scrollTrigger: {
        trigger: ref_loading,
        start: `${pageHeight / 2 + 8000}`,
        end: `+=${500}`,
        id: "section4",
        ...config,
        onUpdate: self => {
          const progress = Number(self.progress.toFixed(3));

          if (progress > 0) {
            _refElement.section4.style.display = "block";
            _refElement.section4_title1.style.display = "block";
            _refElement.section4_title2.style.display = "block";
            _refElement.phone_section4.style.display = "block";
          } else {
            _refElement.section4.style.display = "none";
            _refElement.section4_title1.style.display = "none";
            _refElement.section4_title2.style.display = "none";
            _refElement.phone_section4.style.display = "none";
          }

          _refElement.section4_title1.style.opacity = progress;
          _refElement.section4_title2.style.opacity = progress;
          _refElement.phone_section4.style.opacity = progress;

          _refElement.section4_title1.style.top = `${20 * progress -
            100 * (1 - progress)}px`;

          _refElement.section4_title2.style.top = `${60 * progress -
            150 * (1 - progress)}px`;

          let posYPhoneBegin = 100;

          if (pageWidth > 768) {
            posYPhoneBegin = 0;
          }

          _refElement.phone_section4.style.bottom = `${posYPhoneBegin *
            progress -
            150 * (1 - progress)}px`;
        },
      },
    });

    // move 1k from top to phone
    gsap.to(_refElement.page4_item4, {
      scrollTrigger: {
        trigger: ref_loading,
        start: `${pageHeight / 2 + 8500}`,
        end: `+=${200}`,
        id: "page4_item4",
        ...config,
        onUpdate: self => {
          const progress = Number(self.progress.toFixed(3));

          if (progress > 0) {
            _refElement.page4_item1.style.display = "block";
            _refElement.page4_item2.style.display = "block";
            _refElement.page4_item3.style.display = "block";
            _refElement.page4_item4.style.display = "block";
          } else {
            _refElement.page4_item1.style.display = "none";
            _refElement.page4_item2.style.display = "none";
            _refElement.page4_item3.style.display = "none";
            _refElement.page4_item4.style.display = "none";
          }

          _refElement.page4_item1.style.opacity = 1;
          _refElement.page4_item2.style.opacity = 1;
          _refElement.page4_item3.style.opacity = 1;
          _refElement.page4_item4.style.opacity = 1;

          // _refElement.page4_item1.style.bottom = `${220 * progress +
          //   (pageHeight + 250) * (1 - progress)}px`;

          // _refElement.page4_item2.style.bottom = `${180 * progress +
          //   (pageHeight + 50) * (1 - progress)}px`;

          // _refElement.page4_item3.style.bottom = `${200 * progress +
          //   (pageHeight + 350) * (1 - progress)}px`;

          // _refElement.page4_item4.style.bottom = `${150 * progress +
          //   (pageHeight + 500) * (1 - progress)}px`;

          _refElement.page4_item1.className = "page4_item slide-in-top";
          _refElement.page4_item2.className = "page4_item slide-in-top";
          _refElement.page4_item3.className = "page4_item slide-in-top";
          _refElement.page4_item4.className = "page4_item slide-in-top";

          if (progress > 0) {
            _refElement.page4_item1.className = "page4_item slide-in-top";
            _refElement.page4_item2.className = "page4_item slide-in-top";
            _refElement.page4_item3.className = "page4_item slide-in-top";
            _refElement.page4_item4.className = "page4_item slide-in-top";
          } else {
            _refElement.page4_item1.className = "page4_item";
            _refElement.page4_item2.className = "page4_item";
            _refElement.page4_item3.className = "page4_item";
            _refElement.page4_item4.className = "page4_item";
          }
        },
      },
    });

    // move phone and element go to top
    gsap.to(_refElement.phone_section4, {
      scrollTrigger: {
        trigger: ref_loading,
        start: `${pageHeight / 2 + 9500}`,
        end: `+=${400}`,
        id: "phone_section4",
        ...config,
        onUpdate: self => {
          const progress = Number(self.progress.toFixed(3));
          // _refElement.page4_item1.style.opacity = 1 - progress * 2;
          // _refElement.page4_item2.style.opacity = 1 - progress * 2;
          // _refElement.page4_item3.style.opacity = 1 - progress * 2;
          // _refElement.page4_item4.style.opacity = 1 - progress * 2;

          if (progress > 0) {
            _refElement.page4_item1.className = "page4_item slide-out-top";
            _refElement.page4_item2.className = "page4_item slide-out-top";
            _refElement.page4_item3.className = "page4_item slide-out-top";
            _refElement.page4_item4.className = "page4_item slide-out-top";
          } else {
            _refElement.page4_item1.className = "page4_item";
            _refElement.page4_item2.className = "page4_item";
            _refElement.page4_item3.className = "page4_item";
            _refElement.page4_item4.className = "page4_item";
          }

          let posYPhoneBegin = 100;
          let posYPhoneEnd = pageHeight - pageHeight / 2;

          if (pageWidth > 768) {
            posYPhoneBegin = 0;
            posYPhoneEnd = 300;
          }
          _refElement.phone_section4.style.bottom = `${posYPhoneBegin *
            (1 - progress) +
            posYPhoneEnd * progress}px`;
        },
      },
    });

    // append text and button download
    gsap.to(_refElement.section4_text_1, {
      scrollTrigger: {
        trigger: ref_loading,
        start: `${pageHeight / 2 + 9500}`,
        end: `+=${500}`,
        id: "section4_text_1",
        ...config,
        onUpdate: self => {
          const progress = Number(self.progress.toFixed(3));

          if (progress > 0) {
            _refElement.section4_text_1.style.display = "block";
            _refElement.section4_text_2.style.display = "block";
            _refElement.download_button.style.display = "block";
          } else {
            _refElement.section4_text_1.style.display = "none";
            _refElement.section4_text_2.style.display = "none";
            _refElement.download_button.style.display = "none";
          }

          _refElement.section4_text_1.style.opacity = progress;
          _refElement.section4_text_2.style.opacity =
            progress - 0.5 * (1 - progress);
          _refElement.download_button.style.opacity =
            progress - 0.75 * (1 - progress);
        },
      },
    });

    // end section 4
    gsap.to(_refElement.section4_text_1, {
      scrollTrigger: {
        trigger: ref_loading,
        start: `${pageHeight / 2 + 10000}`,
        end: `+=${400}`,
        id: "section4_text_1",
        ...config,
        onUpdate: self => {
          const progress = Number(self.progress.toFixed(3));

          _refElement.phone_section4.style.opacity = 1 - progress;
          _refElement.section4_text_1.style.opacity = 1 - progress;
          _refElement.section4_text_2.style.opacity = 1 - progress;
          _refElement.download_button.style.opacity = 1 - progress;
          _refElement.section4_title1.style.opacity = 1 - progress;
          _refElement.section4_title2.style.opacity = 1 - progress;
        },
      },
    });

    gsap.to(_refElement.section4, {
      scrollTrigger: {
        trigger: ref_loading,
        start: `${pageHeight / 2 + 10500}`,
        end: `+=${400}`,
        id: "section4_text_1",
        ...config,
        onUpdate: self => {
          const progress = Number(self.progress.toFixed(3));

          if (progress > 0) {
            _refElement.section4.style.display = "none";
          } else {
            _refElement.section4.style.display = "block";
          }
        },
      },
    });
  });

  return (
    <>
      <div id="page4">
        <div
          className="section4"
          ref={ele => {
            if (ele) {
              _refElement.section4 = ele;
            }
          }}
          style={{
            display: "none",
          }}
        >
          <div className="title_section4">
            <h2
              id="section4_title1"
              ref={ele => {
                if (ele) {
                  _refElement.section4_title1 = ele;
                }
              }}
              style={{
                display: "none",
                top: -100,
              }}
            >
              Ứng tiền ngay
            </h2>
            <h1
              id="section4_title2"
              ref={ele => {
                if (ele) {
                  _refElement.section4_title2 = ele;
                }
              }}
              style={{
                display: "none",
                top: -150,
              }}
            >
              Ưu đãi liền tay
            </h1>
          </div>
          <div className="image_inner">
            <img
              className="phone_section4"
              src={assets("phone_page4.png")}
              ref={ele => {
                if (ele) {
                  _refElement.phone_section4 = ele;
                }
              }}
              style={{
                display: "none",
                bottom: -150,
              }}
              alt="ibe"
            />
            <img
              className="page4_item"
              src={assets("page4_item1.png")}
              id="page4_item1"
              ref={ele => {
                if (ele) {
                  _refElement.page4_item1 = ele;
                }
              }}
              style={{
                display: "none",
                zIndex: 28,
                width: 130 * (pageWidth / 375),
                bottom: 220,
                left: 50 * (pageWidth / 375),
              }}
              alt="ibe"
            />
            <img
              className="page4_item"
              src={assets("page4_item2.png")}
              id="page4_item2"
              ref={ele => {
                if (ele) {
                  _refElement.page4_item2 = ele;
                }
              }}
              style={{
                zIndex: 29,
                display: "none",
                width: 130 * (pageWidth / 375),
                bottom: 180,
                left: 100 * (pageWidth / 375),
              }}
              alt="ibe"
            />
            <img
              className="page4_item"
              src={assets("page4_item3.png")}
              id="page4_item3"
              ref={ele => {
                if (ele) {
                  _refElement.page4_item3 = ele;
                }
              }}
              style={{
                zIndex: 28,
                display: "none",
                width: 100 * (pageWidth / 375),
                bottom: 200,
                left: 190 * (pageWidth / 375),
              }}
              alt="ibe"
            />
            <img
              className="page4_item"
              src={assets("page4_item4.png")}
              id="page4_item4"
              ref={ele => {
                if (ele) {
                  _refElement.page4_item4 = ele;
                }
              }}
              style={{
                zIndex: 26,
                display: "none",
                width: 130 * (pageWidth / 375),
                bottom: 150,
                left: 230 * (pageWidth / 375),
              }}
              alt="ibe"
            />
          </div>
          <div className="section4_text_footer">
            <h3
              ref={ele => {
                if (ele) {
                  _refElement.section4_text_1 = ele;
                }
              }}
              style={{
                display: "none",
                bottom: pageHeight / 3,
                opacity: 0,
              }}
            >
              Phần quà của bạn là gì?
            </h3>
            <h3
              ref={ele => {
                if (ele) {
                  _refElement.section4_text_2 = ele;
                }
              }}
              style={{
                display: "none",
                bottom: pageHeight / 3 - 75,
                opacity: 0,
              }}
            >
              Tải app ứng tiền ngay để cùng khám phá nhé
            </h3>
            <div
              className="img_group"
              ref={ele => {
                if (ele) {
                  _refElement.download_button = ele;
                }
              }}
              style={{
                display: "none",
                bottom: pageHeight / 3 - 205,
                opacity: 0,
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
              <a
                href="https://www.youtube.com/embed/3MtUBarJz7w"
                target="_blank"
              >
                Hướng dẫn tải app
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page4;
