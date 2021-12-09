/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState, useEffect } from "react";
import { gsap } from "gsap/dist/gsap";

import { assets } from "@Constants";

const PageFooter = ({ ref_loading, pageWidth, pageHeight }) => {
  const _refElement = {};
  const beginPage = 0;
  const marker = false;
  const config = {
    scrub: 1,
    markers: marker,
  };

  useEffect(() => {
    gsap.to(_refElement.section10, {
      scrollTrigger: {
        trigger: ref_loading,
        start: `${pageHeight / 2 + 14000}`,
        id: "begin_section10",
        ...config,
        onUpdate: self => {
          const progress = Number(self.progress.toFixed(3));

          if (progress > 0) {
            _refElement.footer.style.display = "block";
          } else {
            _refElement.footer.style.display = "none";
          }
          const posY = pageHeight * (1 - progress);

          _refElement.footer.style.top = `${posY}px`;
        },
      },
    });
  });

  return (
    <>
      <footer
        id="footer"
        ref={ele => {
          if (ele) {
            _refElement.footer = ele;
          }
        }}
        style={{
          display: "none",
          top: pageHeight,
        }}
      >
        <div className="footer_inner">
          <div className="col1">
            <div className="logo_footer">
              <img src={assets("logo2.png")} alt="ibe" />
            </div>
            <ul className="list_content">
              <li>
                <i className="icon fi-location" />
                <p>47 Điện Biên Phủ, P. ĐaKao, Q.1, TP.HCM</p>
              </li>
              <li>
                <i className="icon fi-email" />
                <p>HR@ibenefit.vn</p>
              </li>
              <li>
                <i className="icon fi-company" />
                <p>ibenefit.vn</p>
              </li>
              <li>
                <i className="icon fi-phone" />
                <p>091 333 0804</p>
              </li>
            </ul>
          </div>
          <div className="col3">
            <div className="logo_stt">
              <img
                className="logo_stt"
                src={assets("logo_black.png")}
                alt="ibe"
              />
              <p>“Lợi ích thông minh, kết nối cộng đồng”</p>
            </div>
            <div className="download_app">
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
            <div className="social">
              <li>
                <a href="https://www.facebook.com/ibenefit.vn/" target="_blank">
                  <i className="fi-fb" />
                </a>
              </li>

              <li>
                <a href="https://www.instagram.com/ibe.app/" target="_blank">
                  <i className="fi-insta" />
                </a>
              </li>

              <li>
                <a
                  href="https://www.youtube.com/channel/UCLUynRGmkqK76-8EvYU6ZYw"
                  target="_blank"
                >
                  <i className="fi-play-circle" />
                </a>
              </li>
              <li>
                <a href="https://vt.tiktok.com/ZSaMQBWw/" target="_blank">
                  <img
                    src={assets("desktop/footer/iTT.png")}
                    alt="ibe brand titok"
                    className="icon_tittok"
                    style={{
                      width: 30,
                      height: "auto"
                    }}
                  />
                </a>
              </li>
            </div>
          </div>
        </div>
        <div className="copying">
          <p>iBenefit © 2020</p>
        </div>
      </footer>
    </>
  );
};

export default PageFooter;
