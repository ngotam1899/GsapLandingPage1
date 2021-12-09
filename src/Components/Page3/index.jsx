import React, { useState, useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { assets } from "@Constants";

const Page3 = ({ ref_loading, pageWidth, pageHeight }) => {
  const _refElement = {};
  // const pageHeight = window.innerHeight;
  // const pageWidth = window.innerWidth;
  const beginPage = 0;
  const marker = false;
  const config = {
    scrub: 1,
    markers: marker,
  };

  const page3 = {};

  useEffect(() => {
    // begin section 3
    gsap.to(_refElement.end_section_2, {
      scrollTrigger: {
        trigger: ref_loading,
        start: `${pageHeight / 2 + 3100}`,
        end: `+=${200}`,
        id: "end_section_2",
        ...config,
        onUpdate: self => {
          const progress = Number(self.progress.toFixed(3));

          if (progress > 0) {
            _refElement.section3.style.display = "block";
            _refElement.title_footer_section2.style.display = "block";
          } else {
            _refElement.section3.style.display = "none";
            _refElement.title_footer_section2.style.display = "none";
          }

          _refElement.section_inner.style.opacity = progress;
          _refElement.title_footer_section2.style.opacity = progress;
        },
      },
    });

    // slide 1 section 3
    gsap.to(_refElement.slide_1, {
      scrollTrigger: {
        trigger: ref_loading,
        start: `${pageHeight / 2 + 3600}`,
        end: `+=${500}`,
        id: "slide_1",
        ...config,
        onUpdate: self => {
          const progress = Number(self.progress.toFixed(3));

          _refElement.slide_1.style.opacity = progress;
        },
      },
    });

    // slide 2 section 3
    gsap.to(_refElement.slide_2, {
      scrollTrigger: {
        trigger: ref_loading,
        start: `${pageHeight / 2 + 4500}`,
        end: `+=${500}`,
        id: "slide_2",
        ...config,
        onUpdate: self => {
          const progress = Number(self.progress.toFixed(3));

          _refElement.slide_1.style.left = `${-pageWidth * progress}px`;
          _refElement.slide_2.style.left = `${pageWidth *
            2 *
            (1 - progress)}px`;
          _refElement.slide_2.style.opacity = progress;
        },
      },
    });

    // slide 3 section 3
    gsap.to(_refElement.slide_3, {
      scrollTrigger: {
        trigger: ref_loading,
        start: `${pageHeight / 2 + 5500}`,
        end: `+=${500}`,
        id: "slide_3",
        ...config,
        onUpdate: self => {
          const progress = Number(self.progress.toFixed(3));

          _refElement.slide_2.style.left = `${-pageWidth * progress}px`;
          _refElement.slide_3.style.left = `${pageWidth *
            3 *
            (1 - progress)}px`;
          _refElement.slide_3.style.opacity = progress;
        },
      },
    });

    // slide 4 section 3
    gsap.to(_refElement.slide_4, {
      scrollTrigger: {
        trigger: ref_loading,
        start: `${pageHeight / 2 + 6500}`,
        end: `+=${500}`,
        id: "slide_4",
        ...config,
        onUpdate: self => {
          const progress = Number(self.progress.toFixed(3));

          _refElement.slide_3.style.left = `${-pageWidth * progress}px`;

          _refElement.slide_4.style.left = `${pageWidth *
            4 *
            (1 - progress)}px`;

          _refElement.slide_4.style.opacity = progress;
        },
      },
    });

    // end section 3
    gsap.to(_refElement.slide_4, {
      scrollTrigger: {
        trigger: _refElement.loading,
        start: `${pageHeight / 2 + 7500}`,
        end: `+=${1000}`,
        scrub: 1,
        id: "end_section3",
        ...config,
        onUpdate: self => {
          const progress = Number(self.progress.toFixed(3));

          _refElement.slide_4.style.top = `${pageHeight / 2 -
            pageHeight * progress}px`;

          _refElement.slide_4.style.opacity = 1 - progress;
          _refElement.title_footer_section2.style.opacity = 1 - progress;
        },
      },
    });
  });

  return (
    <>
      <div id="page3">
        <div
          className="section3"
          ref={ele => {
            if (ele) {
              _refElement.section3 = ele;
            }
          }}
        >
          <div
            className="section_inner"
            ref={ele => {
              if (ele) {
                _refElement.section_inner = ele;
              }
            }}
          />
          <div
            className="title_footer_section2"
            id="title_footer_section2"
            style={{
              left: 0,
              top: 50,
              display: "none",
            }}
            ref={ele => {
              if (ele) {
                _refElement.title_footer_section2 = ele;
              }
            }}
          >
            <h3>Ưu đãi chỉ dành cho sinh viên.</h3>
            <h3>Bạn cần cung cấp</h3>
          </div>

          <div
            className="slide_inner"
            ref={ele => {
              if (ele) {
                _refElement.slide_inner = ele;
              }
            }}
          >
            <div
              className="slide"
              id="slide_1"
              ref={ele => {
                if (ele) {
                  _refElement.slide_1 = ele;
                }
              }}
              style={{
                top: pageHeight / 2,
                left: 0,
                opacity: 0,
              }}
            >
              <img
                className="img-sm"
                src={assets("icon/TenDangNhap.png")}
                alt="ibe"
              />
              <h5>
                Tên đăng nhập, mật khẩu, bảng điểm để chứng minh bạn là sinh
                viên
              </h5>
            </div>
            <div
              className="slide"
              id="slide_2"
              ref={ele => {
                if (ele) {
                  _refElement.slide_2 = ele;
                }
              }}
              style={{
                top: pageHeight / 2,
                left: pageWidth * 2,
                opacity: 0,
              }}
            >
              <img className="img-sm" src={assets("icon/CMND.png")} alt="ibe" />
              <h5>CMND/CCCD</h5>
            </div>
            <div
              className="slide"
              id="slide_3"
              ref={ele => {
                if (ele) {
                  _refElement.slide_3 = ele;
                }
              }}
              style={{
                top: pageHeight / 2,
                left: pageWidth * 3,
                opacity: 0,
              }}
            >
              <img
                className="img-sm"
                src={assets("icon/TheSV.png")}
                alt="ibe"
              />
              <h5>Thẻ sinh viên</h5>
            </div>
            <div
              className="slide"
              id="slide_4"
              ref={ele => {
                if (ele) {
                  _refElement.slide_4 = ele;
                }
              }}
              style={{
                top: pageHeight / 2,
                left: pageWidth * 4,
                opacity: 0,
              }}
            >
              <img
                className="img-sm"
                src={assets("icon/canhan.png")}
                alt="ibe"
              />
              <h5>Thông tin cá nhân</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page3;
