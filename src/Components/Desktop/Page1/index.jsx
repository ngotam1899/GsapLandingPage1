/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import * as ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import gsap, { Linear, TimelineMax, to } from "gsap";
import { assetsPage1 } from "@Constants";

import "./page1.css";

class LandingPage3 extends Component {
  componentDidMount() {
    this.handleScroll();
  }

  handleScroll = () => {
    ScrollMagicPluginGsap(ScrollMagic, TimelineMax);
    const controller = new ScrollMagic.Controller();

    gsap.set("#trigger1,#pageTwo, .pageThree, .pageFour", { display: "none" });

    gsap.set(".page2_img_app", { display: "none" });
    gsap.set(".pageTwo", { y: "-100vh" });
    gsap.set(".page4_img_phonedeg img", { y: "50vh" });
    gsap.set(".page4_mi1k img", { x: "5vw" });
    gsap.set(".page4_gao1k img", { x: "2vw", y: "5vh" });
    gsap.set(".page4_onghut1k img", { y: "10vh" });
    gsap.set(".page4_sua1k img", { y: "15vh" });

    const timeline = new TimelineMax();
    timeline
      .set("#trigger1, #pageTwo", { display: "block" })
      .set(".pageThree,.pageFour", { display: "none" })
      .to(".img_logo img", 2, {})
      .to(".img_logo img", 2, { scale: 0.35, y: "-40vh", x: "-40vh" })
      .from(".page1_content", 2, { y: "-100vh" }, "-=2")
      .from(".img_girl img", 2, { y: "70vh" }, "-=2")
      .to(".pageOne", 2, {})
      .to("#trigger1", 5, {})
      .from(".page2_img_phone img", 2, {
        y: "25vh",
        x: "18vh",
        scale: 0.35,
        opacity: 0,
      })
      .to(".page2_img_phone img", 2, { x: "30vh" })
      .to("#trigger1", 2, { opacity: 0 }, "-=2")
      .from(".page2_ct1", { opacity: 0, y: "-10vh" })
      .from(".page2_ct2", 1, { opacity: 0, y: "-10vh" })
      .from(".page2_ct3", 1, { opacity: 0, y: "-10vh" })
      .from(".page2_ct4", 1, { opacity: 0, y: "-10vh" })
      .from(".page2_ct5", 1, { opacity: 0, y: "-10vh" })
      .to(".page2_img_app", 4, { display: "block", y: "70vh" }, "-=2")
      .to(".page2_img_app", 5, {}, "+=1.5")
      .to([".page2_content", ".page2_img_phone img"], 1.5, { y: "-30vh" })
      .to(".page2_img_app", 5, {opacity:0}, "-=1.5")
      .from(".page2_ct6", 0.7, { opacity: 0, y: "30vh" })
      .to(".pageTwo", 2, {});

    new ScrollMagic.Scene({
      triggerElement: ".pageOne",
      triggerHook: 0,
      duration: "1000%",
    })
      .setTween(timeline)
      .setPin(".pageOne")
      .addTo(controller);

    const timeline2 = new TimelineMax();
    timeline2
      .to(".page3_img", 1, { y: "40vh" })
      .to(".page2_ct6", 2, { y: "-65vh" }, "-=1")
      .to([".page2_content", ".page2_img_phone img"], 2, { opacity: 0 }, "-=2")
      // Page 3
      .set(".pageThree", { display: "block" })
      .set("#trigger1, #pageTwo, .pageFour", { display: "none" })
      .from(".page3_title", 1, {
        y: "-50vh",
      })
      .from("#icon1", 1, { y: "-10vh", opacity: 0 }, "-=1")
      .from("#icon2", 1, { y: "-10vh", opacity: 0 })
      .from("#icon3", 1, { y: "-10vh", opacity: 0 })
      .from("#icon4", 1, { y: "-10vh", opacity: 0 })
      .to(".pageThree", 3, {})
      // page 4
      .set(".pageFour", { display: "block" })
      .set("#trigger1, .pageThree, #pageTwo", { display: "none" })
      .to(".page4_img_phonegift img", 1, {
        scale: 1,
      })
      .to(".page4_img_phonegift img", 2, {
        scale: 0.4,
        rotate: "-70deg",
        x: "5vh",
        y: "20vh",
      })
      .to(".page4_img_phonegift img", 2, { opacity: 0 })
      .from(".page4_img_phonedeg img", 2, { opacity: 0 }, "-=2")
      // product 1k
      .from(
        [".page4_mi1k", ".page4_gao1k", ".page4_onghut1k", ".page4_sua1k"],
        4,
        { y: "-50vh", opacity: 0 }
      )
      .to(".page4_img_phonedeg img", 3, { y: "10vh" })
      .to(
        [".page4_mi1k", ".page4_gao1k", ".page4_onghut1k", ".page4_sua1k"],
        4,
        { y: "-40vh" },
        "-=3.5"
      )
      .to(".page4_content", 2, { opacity: 0 }, "-=4")
      // final
      .from(".p4_ct_tx1", 1, { opacity: 0 })
      .from(".p4_ct_tx2", 1, { opacity: 0 })
      .from(".page4_ct2_img", 1, { opacity: 0 })
      .from(".page4_downloadapp", 1, { opacity: 0 })
      .to(".pageFour", 3, {});

    new ScrollMagic.Scene({
      triggerElement: ".pageTwo",
      offset: 0,
      triggerHook: 1,
      duration: "2000%",
    })
      .setTween(timeline2)
      .setPin(".pageTwo")
      .addTo(controller);
  };

  render() {
    return (
      <div className="main_page" style={{ overflow: "hidden" }}>
        {/* Page One */}
        <div className="pageOne">
          <div className="trigger" id="trigger1">
            <div className="img_logo">
              <img src={assetsPage1("logowhite.png")} alt="iBe" />
            </div>
            <div className="container">
              <div className="row page1_content">
                <div className="col-4 " />
                <div className="col-4 page1_ct1">
                  <h2>
                    ỨNG TIỀN CHO
                    <br />
                    SINH VIÊN
                  </h2>
                </div>
                <div className="col-4 page1_ct2">
                  <h1>
                    KO LÃI <br />
                    KO PHẠT
                  </h1>
                </div>
              </div>
            </div>
            <div className="img_girl">
              <img src={assetsPage1("imggirl.png")} alt="iBe" />
            </div>
          </div>
          <div className="trigger" id="pageTwo">
            <div className="page2_img_app">
              <div className="page2_img_appstore">
              <a
                  href="https://apps.apple.com/us/app/ibenefit/id1475237080"
                  target="_blank"
                >
                <img src={assetsPage1("appstore.png")} alt="iBe" />
                </a>
              </div>
              <div className="page2_img_chplay">
              <a
                    href="https://play.google.com/store/apps/details?id=com.ibenefitvn.wpp&hl=vi"
                    target="_blank"
                  >
                <img src={assetsPage1("chplay.png")} alt="iBe" />
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-6 page2_content">
                <div className="page2_ct1">Bạn được</div>
                <div className="page2_ct2">
                  Ứng tiền
                  <p className="page2_ct2_money">500.000-1.000.000đ</p>
                  <p className="toolcheck">
                    <img src={assetsPage1("toolcheck.png")} alt="iBe" />
                  </p>
                </div>
                <div className="page2_ct3 mt-2">
                  Từ
                  <span className="page2_ct3_money"> 1-7 ngày</span>
                  <p className="toolcheck">
                    <img src={assetsPage1("toolcheck.png")} alt="iBe" />
                  </p>
                </div>
                <div className="page2_ct4 mt-3">
                  <div className="page2_ct4_tip">
                    Tip từ
                    <span className="page2_ct4_money"> 5k-70k</span>
                    <p className="toolcheck">
                      <img src={assetsPage1("toolcheck.png")} alt="iBe" />
                    </p>
                  </div>
                  <div className="page2_ct4_ct mt-4">
                    Tùy hạn mức, thời gian và <br />
                    bảng điểm. Ngoài ra không <br />
                    có bất kì chi phí nào khác.
                  </div>
                </div>
                <br />
              </div>
              <div className="col-6 page2_img_phone">
                <img src={assetsPage1("phone.png")} alt="iBe" />
              </div>
            </div>
            <div className="page2_ct6">
              Ưu đãi chỉ dành cho sinh viên. <br />
              Bạn cần cung cấp
            </div>
          </div>
        </div>
        {/* Page Two */}
        <div className="pageTwo">
          {/* page 3 */}
          <div className="pageThree">
            <div className="page3_title">
              <h1>
                Ưu đãi chỉ dành cho sinh viên. <br />
                Bạn cần cung cấp
              </h1>
            </div>
            <div className="container page3_content">
              <div className="row page3_img">
                <div className="col-3 page3_icon" id="icon1">
                  <img src={assetsPage1("canhan.png")} alt="iBe" />
                  <p className="page3_ct page3_icon1_ct">
                    Tên đăng nhập, mật khẩu bảng điểm để chứng minh bạn là sinh
                    viên.
                  </p>
                </div>
                <div className="col-3 page3_icon" id="icon2">
                  <img src={assetsPage1("TheSV.png")} alt="iBe" />
                  <p className="page3_ct page3_icon2_ct">CMND/CCCD</p>
                </div>
                <div className="col-3 page3_icon" id="icon3">
                  <img src={assetsPage1("CMND.png")} alt="iBe" />
                  <p className="page3_ct page3_icon3_ct">Thẻ Sinh Viên</p>
                </div>
                <div className="col-3 page3_icon" id="icon4">
                  <img src={assetsPage1("TenDangNhap.png")} alt="iBe" />
                  <p className="page3_ct page3_icon4_ct">Thông tin cá nhân</p>
                </div>
              </div>
            </div>
          </div>
          {/* page 4 */}
          <div className="pageFour">
            <div className="page4_content">
              <h3>Ứng tiền ngay</h3>
              <h2>Ưu đãi liền tay</h2>
            </div>
            <div className="page4_img_phonegift">
              <img src={assetsPage1("phonegift.png")} alt="iBe" />
            </div>
            <div className="page4_img_phonedeg">
              <img src={assetsPage1("phonedeg.png")} alt="iBe" />
            </div>
            <div className="page4_product">
              <div className="page4_mi1k">
                <img src={assetsPage1("mi.png")} alt="iBe" />
              </div>
              <div className="page4_gao1k">
                <img src={assetsPage1("gao.png")} alt="iBe" />
              </div>
              <div className="page4_onghut1k">
                <img src={assetsPage1("onghut.png")} alt="iBe" />
              </div>
              <div className="page4_sua1k">
                <img src={assetsPage1("Sua.png")} alt="iBe" />
              </div>
            </div>
            <div className="page4_content2">
              <div className="page4_text p4_ct_tx1">
                Phần quà của bạn là gì?
              </div>
              <div className="page4_text p4_ct_tx2">
                Tải app ứng tiền ngay để cùng nhau khám phá nhé!
              </div>
              <div className="row page4_ct2_img">
                <div className="col-6 page4_img_appstore">
                  <a
                    href="https://apps.apple.com/us/app/ibenefit/id1475237080"
                    target="_blank"
                  >
                    <img src={assetsPage1("appstore.png")} alt="iBe" />
                  </a>
                </div>
                <div className="col-6 page4_img_chplay">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.ibenefitvn.wpp&hl=vi"
                    target="_blank"
                  >
                    <img src={assetsPage1("chplay.png")} alt="iBe" />
                  </a>
                </div>
              </div>
              <div className="page4_downloadapp">
                <a
                  href="https://www.youtube.com/embed/3MtUBarJz7w"
                  target="_blank"
                  style={{
                    color: "#ffffff"
                  }}
                >
                  Hướng dẫn tải app
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage3;
