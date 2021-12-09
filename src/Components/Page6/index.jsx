/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { assets } from "@Constants";

const Page6 = ({ ref_loading, pageWidth, pageHeight }) => {
  const _refElement = {};
  // const pageHeight = window.innerHeight;
  // const pageWidth = window.innerWidth;
  const beginPage = 0;
  const marker = false;
  const config = {
    scrub: 1,
    markers: marker,
  };

  useEffect(() => {
    // begin section 6
    gsap.to(_refElement.section6_title, {
      scrollTrigger: {
        trigger: ref_loading,
        start: `${pageHeight / 2 + 12000}`,
        end: `+=${500}`,
        id: "video",
        ...config,
        onUpdate: self => {
          const progress = Number(self.progress.toFixed(3));

          if (progress > 0) {
            _refElement.section6_title.style.display = "block";
          } else {
            _refElement.section6_title.style.display = "none";
          }
          _refElement.section6_title.style.opacity = progress;
        },
      },
    });

    // download button
    gsap.to(_refElement.download_app, {
      scrollTrigger: {
        trigger: ref_loading,
        start: `${pageHeight / 2 + 12500}`,
        end: `+=${300}`,
        id: "section5_title",
        ...config,
        onUpdate: self => {
          const progress = Number(self.progress.toFixed(3));

          if (progress > 0) {
            _refElement.download_app.style.display = "block";
          } else {
            _refElement.download_app.style.display = "none";
          }

          _refElement.download_app.style.opacity = progress;
        },
      },
    });

    // effect append text
    gsap.to(_refElement.icon_phone, {
      scrollTrigger: {
        trigger: ref_loading,
        start: `${pageHeight / 2 + 13000}`,
        end: `+=${300}`,
        id: "icon_phone",
        ...config,
        onUpdate: self => {
          const progress = Number(self.progress.toFixed(3));

          if (progress > 0) {
            _refElement.icon_phone.style.display = "block";
            _refElement.section6.style.display = "block";
          } else {
            _refElement.icon_phone.style.display = "none";
            _refElement.section6.style.display = "none";
          }

          _refElement.icon_phone.style.opacity = progress;
        },
      },
    });

    gsap.to(_refElement.section6, {
      scrollTrigger: {
        trigger: ref_loading,
        start: `${pageHeight / 2 + 14000}`,
        id: "begin_section10",
        ...config,
        onUpdate: self => {
          const progress = Number(self.progress.toFixed(3));

          const winScrollY = window.scrollY;
          const beginScroll = pageHeight / 2 + 14000;
          const posY = beginScroll - winScrollY;

          _refElement.section6.style.top = `${posY}px`;
        },
      },
    });
  });

  return (
    <>
      <div id="page6">
        <div
          className="section6"
          ref={ele => {
            if (ele) {
              _refElement.section6 = ele;
            }
          }}
          style={{
            display: "none",
          }}
        >
          <div
            className="section_title"
            ref={ele => {
              if (ele) {
                _refElement.section6_title = ele;
              }
            }}
            style={{
              display: "none",
              opacity: 0,
            }}
          >
            <h1>UEF ĐÃ CHỌN IBE</h1>
            <h1>CÒN BẠN THÌ SAO?</h1>
          </div>
          <div
            className="download_app"
            ref={ele => {
              if (ele) {
                _refElement.download_app = ele;
              }
            }}
            style={{
              display: "none",
              opacity: 0,
            }}
          >
            <a
              href="https://apps.apple.com/us/app/ibenefit/id1475237080"
              target="_blank"
            >
              <img src={assets("download_ios.png")} alt="ibe" />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.ibenefitvn.wpp&hl=vi"
              target="_blank"
            >
              <img src={assets("download_android.png")} alt="ibe" />
            </a>
          </div>
          <div>
            <a href="tel:091 333 0804">
              <img
                ref={ele => {
                  if (ele) {
                    _refElement.icon_phone = ele;
                  }
                }}
                style={{
                  display: "none",
                  opacity: 0,
                }}
                alt="ibe"
                className="icon_phone"
                src={assets("icon_phone.png")}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page6;
