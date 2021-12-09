import React, { useState, useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { assets } from "@Constants";

import "./page1.scss";

const Page1 = ({ ref_loading, pageWidth, pageHeight }) => {
  const _refElement = {};
  // const pageHeight = pageHeight;
  // const pageWidth = window.innerWidth;
  const beginPage = 0;
  const marker = false;
  const config = {
    scrub: 1,
    markers: marker,
  };

  const page1 = {
    girl: {
      bottom: -pageHeight,
      right: 0,
    },
    phone: {
      top: pageHeight,
      right: 25,
      width: 100,
      display: "none",
      opacity: 0,
    },
    text1: {
      right: -window.innerWidth,
      width: window.innerWidth / 2,
      top: 40,
    },
    text2: {
      right: -window.innerWidth,
      width: window.innerWidth / 2,
      top: 105,
    },
    text3: {
      right: -window.innerWidth,
      width: window.innerWidth / 2,
      top: 155,
    },
  };

  const _handleScroll = () => {
    // text 1
    gsap.to(_refElement.logo, {
      scrollTrigger: {
        trigger: ref_loading,
        start: `${beginPage + 150}`,
        end: `+=${pageHeight / 2}`,
        id: "logo",
        ...config,
        onUpdate: self => {
          const progress = Number(self.progress.toFixed(3));

          const maxY = pageHeight / 2;
          const maxX = pageWidth / 2;

          // logo
          _refElement.logo.style.top = `${maxY -
            (progress * maxY - progress * 80)}px`;
          _refElement.logo.style.left = `${maxX -
            (progress * maxX - progress * 80)}px`;
          _refElement.logo.style.width = `${170 - progress * 80}px`;
        },
      },
    });

    // text 2
    gsap.to(_refElement.text1, {
      scrollTrigger: {
        trigger: ref_loading,
        start: `${pageHeight / 2}`,
        end: `+=${200}`,
        id: "text1",
        ...config,
        onUpdate: self => {
          const progress = Number(self.progress.toFixed(3));

          _refElement.text1.style.right = `${20 -
            pageWidth +
            progress * pageWidth}px`;

          // gsap.to( _refElement.text1, {x: 20, duration: 1});
        },
      },
    });

    // text 3
    gsap.to(_refElement.text2, {
      scrollTrigger: {
        trigger: ref_loading,
        start: `${pageHeight / 2 + 100}`,
        end: `+=${200}`,
        id: "text2",
        ...config,
        onUpdate: self => {
          const progress = Number(self.progress.toFixed(3));

          _refElement.text2.style.right = `${20 -
            pageWidth +
            progress * pageWidth}px`;
          _refElement.text3.style.right = `${20 -
            pageWidth +
            progress * pageWidth}px`;
        },
      },
    });

    // text 3
    gsap.to(_refElement.text3, {
      scrollTrigger: {
        trigger: ref_loading,
        start: `${pageHeight / 2 + 200}`,
        end: `+=${200}`,
        id: "text3",
        ...config,
        onUpdate: self => {
          const progress = Number(self.progress.toFixed(3));

          _refElement.text3.style.right = `${20 -
            pageWidth +
            progress * pageWidth}px`;
        },
      },
    });

    // girl
    gsap.to(_refElement.girl, {
      scrollTrigger: {
        trigger: ref_loading,
        start: `${pageHeight / 2 + 200}`,
        end: `+=${300}`,
        id: "girl",
        ...config,
        onUpdate: self => {
          const progress = Number(self.progress.toFixed(3));

          _refElement.girl.style.bottom = `${-pageHeight +
            progress * pageHeight}px`;
        },
      },
    });

    // phone
    gsap.to(_refElement.phone, {
      scrollTrigger: {
        trigger: ref_loading,
        start: `${pageHeight / 2 + 1000}`,
        end: `+=${300}`,
        id: "phone",
        ...config,
        onUpdate: self => {
          const progress = Number(self.progress.toFixed(3));

          const opacity = progress;

          if (progress > 0) {
            _refElement.phone.style.display = "block";
          } else {
            _refElement.phone.style.display = "none";
          }

            _refElement.phone.style.transform = "rotate(0deg) translate(50%, 0%)";

          _refElement.phone.style.opacity = opacity <= 1 ? opacity : 1;
          _refElement.phone.style.width = "auto";

          let heightPhone = pageHeight - 100;

          if (heightPhone > 750) {
            heightPhone = 750;
          }

          _refElement.phone.style.height = `${100 + progress * heightPhone}px`;

          _refElement.phone.style.top = `${pageWidth * (1 - progress) +
            25 * progress}px`;

          _refElement.phone.style.right = `${50 * (1 - progress) +
            (pageWidth / 2) * progress}px`;
        },
      },
    });

    // over inner phone
    // over_page
    gsap.to(_refElement.over_page, {
      scrollTrigger: {
        trigger: _refElement.loading,
        start: `${pageHeight / 2 + 1000}`,
        end: `+=${300}`,
        scrub: 1,
        id: "over_page",
        ...config,
        onUpdate: self => {
          const progress = Number(self.progress.toFixed(3));

          if (progress > 0) {
            _refElement.over_page.style.display = "block";
          } else {
            _refElement.over_page.style.display = "none";
          }

          const opacity = progress;

          _refElement.over_page.style.opacity = opacity;

          if (progress >= 1) {
            _refElement.girl.style.display = "none";
            _refElement.logo.style.display = "none";
            _refElement.text1.style.display = "none";
          } else {
            _refElement.girl.style.display = "block";
            _refElement.logo.style.display = "block";
            _refElement.text1.style.display = "block";
          }
        },
      },
    });

    // text intro phone section2
    gsap.to(_refElement.phone, {
      scrollTrigger: {
        trigger: ref_loading,
        start: `${pageHeight / 2 + 1200}`,
        end: `+=${300}`,
        id: "phone_2",
        ...config,
        onUpdate: self => {
          const progress = Number(self.progress.toFixed(3));

          const widthPhone = gsap.getProperty("#phone", "width");
          const paddingRight = widthPhone / 2 - pageWidth / 2;

          const posX =
            (pageWidth / 2) * (1 - progress) - (paddingRight + 50) * progress;

          _refElement.phone.style.right = `${posX}px`;

          const posY = gsap.getProperty("#phone", "top");

          _refElement.phone.setAttribute("data-y", posY);
        },
      },
    });

    // phone when end section 1
    // gsap.to(_refElement.phone, {
    //   scrollTrigger: {
    //     trigger: ref_loading,
    //     start: `${pageHeight / 2 + 2800}`,
    //     end: `+=${200}`,
    //     id: "phone3",
    //     ...config,
    //     onUpdate: self => {
    //       const progress = Number(self.progress.toFixed(3));
    //       const begin_pos = pageHeight / 3;

    //       // change pos phone
    //       const positionY_phone = gsap.getProperty("#phone", "data-y");

    //       const posPhoneY = positionY_phone + begin_pos * progress;

    //       if (_refElement.phone) {
    //         _refElement.phone.style.bottom = `${posPhoneY}px`;
    //       }
    //     },
    //   },
    // });

    // phone when end section2
    gsap.to(_refElement.phone, {
      scrollTrigger: {
        trigger: ref_loading,
        start: `${pageHeight / 2 + 3000}`,
        end: `+=${200}`,
        id: "phone4",
        ...config,
        onUpdate: self => {
          const progress = Number(self.progress.toFixed(3));

          // change pos phone
          const positionY_phone = gsap.getProperty("#phone", "data-y");
          const startPosPhone = pageHeight / 2;

          _refElement.phone.style.bottom = `${startPosPhone +
            pageHeight * progress}px`;
        },
      },
    });
  };

  useEffect(() => {
    try {
      _handleScroll();
    } catch (err) {
      //
    }

    return () => {
      // gsap.
    };
  });

  return (
    <>
      <div id="page1">
        <img
          ref={ele => {
            if (ele) {
              _refElement.logo = ele;
            }
          }}
          style={{
            top: pageHeight / 2,
          }}
          className="logo"
          src={assets("logo.png")}
          alt="ibe"
        />
        <div className="page1_text">
          <h3
            className="text1"
            ref={ele => {
              if (ele) {
                _refElement.text1 = ele;
              }
            }}
            style={{
              top: page1.text1.top,
              right: page1.text1.right,
              width: page1.text1.width,
            }}
          >
            Ứng tiền cho sinh viên
          </h3>
          <h2
            ref={ele => {
              if (ele) {
                _refElement.text2 = ele;
              }
            }}
            className="text2"
            style={{
              top: page1.text2.top,
              right: page1.text2.right,
              width: page1.text2.width,
            }}
          >
            KO lãi
          </h2>
          <h2
            ref={ele => {
              if (ele) {
                _refElement.text3 = ele;
              }
            }}
            className="text2"
            style={{
              top: page1.text3.top,
              right: page1.text3.right,
              width: page1.text3.width,
            }}
          >
            KO phạt
          </h2>
        </div>
        <img
          ref={ele => {
            if (ele) {
              _refElement.girl = ele;
            }
          }}
          className="girl"
          src={assets("page1_girl.png")}
          style={{
            bottom: page1.girl.bottom,
            maxWidth: 578,
          }}
          alt="ibe"
        />
        <img
          ref={ele => {
            if (ele) {
              _refElement.phone = ele;
            }
          }}
          className="phone"
          id="phone"
          src={assets("page1_phone.png")}
          style={{
            top: page1.phone.top,
            right: page1.phone.right,
            width: page1.phone.width,
            display: page1.phone.display,
            opacity: page1.phone.opacity,
          }}
          alt="ibe"
        />
        <div
          className="over_page"
          ref={ele => {
            if (ele) {
              _refElement.over_page = ele;
            }
          }}
        />
      </div>
    </>
  );
};

export default Page1;
