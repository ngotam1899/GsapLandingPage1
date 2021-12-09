/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import { assetsFooter } from "@Constants";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container footer_content1">
          <div className="row">
            {/* col 1 */}
            <div className="col-6 footer_col1">
              <div className="col1_img_logo">
                <img src={assetsFooter("brand.png")} alt="ibe brand" />
              </div>
              <ul>
                <li>
                  <img
                    src={assetsFooter("iconaddress.png")}
                    alt="ibe icon address"
                  />
                  <a href="/#">
                    47 Điện Biên Phủ, Đa Kao,
                    <br /> Quận 1, Thành phố Hồ Chí Minh
                  </a>
                </li>
                <li>
                  <img
                    src={assetsFooter("iconemail.png")}
                    alt="ibe icon email"
                  />
                  <a href="/#">Hr@iBenefit.vn</a>
                </li>
                <li>
                  <img src={assetsFooter("iconweb.png")} alt="ibe icon web" />
                  <a href="/#">ibenefit.vn</a>
                </li>
                <li>
                  <img src={assetsFooter("iconcall.png")} alt="ibe icon call" />
                  <a href="/#">091 333 0804</a>
                </li>
              </ul>
            </div>
            <div className="col-6 footer_col3">
              <div className="col3_imglogo">
                <img src={assetsFooter("logo.png")} alt="ibe brand" />
                <i className="col3_content">
                  "Lợi ích thông minh,
                  <br />
                  kết nối cộng đồng"
                </i>
              </div>
              <div className="col3_imgapp">
                <a
                  href="https://apps.apple.com/us/app/ibenefit/id1475237080"
                  target="_blank"
                >
                  <img
                    src={assetsFooter("appStore.png")}
                    alt="download ibe app"
                  />
                </a>
                <div>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.ibenefitvn.wpp&hl=vi"
                    target="_blank"
                  >
                    <img
                      src={assetsFooter("googlePlay.png")}
                      alt="download ibe app"
                    />
                  </a>
                </div>
              </div>
              <div className="col3_iconsocial">
                <a href="https://www.facebook.com/ibenefit.vn/" target="_blank">
                  <img src={assetsFooter("iFB.png")} alt="ibe icon facebook" />
                </a>
                <a href="https://www.instagram.com/ibe.app/" target="_blank">
                  <img src={assetsFooter("iIS.png")} alt="ibe icon instagram" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCLUynRGmkqK76-8EvYU6ZYw"
                  target="_blank"
                >
                  <img src={assetsFooter("iYT.png")} alt="ibe brand youtube" />
                </a>
                <a
                  href="https://vt.tiktok.com/ZSaMQBWw/"
                  target="_blank" 
                >
                  <img src={assetsFooter("iTT.png")} alt="ibe brand titok" className="icon_tittok"/>
                </a>
              </div>      
            </div>
          </div>
        </div>
        <div className=" footer_content2">
          <h5>iBenefit © 2020</h5>
        </div>
      </div>
    );
  }
}
export default Footer;
