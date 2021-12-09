import React, { useState, useEffect } from "react";
import { assets } from "@Constants";

import Footer from "../Desktop/Footer";

import "./bot.scss";

const PageBot = () => {
  useEffect(() => {
    //
  });
  console.log("1");

  return (
    <div className="main-bg">
      <div id="page1">
        <img className="logo" src={assets("logo.png")} alt="ibe" />
        <div className="page1_text">
          <h3 className="text1">Ứng tiền cho sinh viên</h3>
          <h2 className="text2">KO lãi</h2>
          <h2 className="text2">KO phạt</h2>
        </div>
        <img className="girl" src={assets("page1_girl.png")} alt="ibe" />
      </div>
      <div id="page2">
        <div id="section2" className="intro_feature">
          <img
            className="phone"
            id="phone"
            src={assets("page1_phone.png")}
            alt="ibe"
          />
          <p className="title">Bạn được</p>
          <div className="text_intro_phone">
            <div className="line" id="phone_feature_1" style={{ top: 80 }}>
              <p>Ứng tiền</p>
              <h4>500.000đ - 1.000.000 đ</h4>
              <span />
            </div>

            <div className="line" id="phone_feature_2" style={{ top: 140 }}>
              <p>
                Từ<b>1 - 7 ngày</b>
              </p>
              <span />
            </div>

            <div className="line" style={{ top: 220 }}>
              <p>
                Tip từ<b>5K - 70K</b>
              </p>
              <span />
              <div className="diver" />
              <p>Tùy thuộc bảng điểm</p>
              <p>học tập & số lượng</p>
              <p>người ứng</p>
            </div>
          </div>
        </div>
        <div />
        <div className="title_footer_section2" id="title_footer_section2">
          <h3>Ưu đãi chỉ dành cho sinh viên.</h3>
          <h3>Bạn cần cung cấp</h3>
        </div>
      </div>
      <div id="page3">
        <div className="section3">
          <div className="section_inner" />
          <div className="slide_inner">
            <div className="slide" id="slide_1">
              <img className="img-lg" src={assets("slide1.png")} alt="ibe" />
            </div>
            <div className="slide" id="slide_2">
              <img className="img-sm" src={assets("slide2.png")} alt="ibe" />
            </div>
            <div className="slide" id="slide_3">
              <img className="img-sm" src={assets("slide3.png")} alt="ibe" />
            </div>
            <div className="slide" id="slide_4">
              <img className="img-md" src={assets("slide4.png")} alt="ibe" />
            </div>
          </div>
        </div>
      </div>
      <div id="page4">
        <div className="section4">
          <div className="title_section4">
            <h2 id="section4_title1">Ứng tiền ngay</h2>
            <h1 id="section4_title2">Ưu đãi liền tay</h1>
          </div>
          <div className="image_inner">
            <img
              className="phone_section4"
              src={assets("phone_page4.png")}
              style={{
                bottom: 0,
                left: 10,
                zIndex: 2,
              }}
              alt="ibe"
            />
            <img
              className="page4_item"
              src={assets("page4_item1.png")}
              id="page4_item1"
              alt="ibe"
              style={{
                bottom: 100,
                left: "10%",
                zIndex: 5,
              }}
            />
            <img
              className="page4_item"
              src={assets("page4_item2.png")}
              id="page4_item2"
              alt="ibe"
              style={{
                bottom: 80,
                left: "30%",
                zIndex: 9,
              }}
            />
            <img
              className="page4_item"
              src={assets("page4_item3.png")}
              id="page4_item3"
              alt="ibe"
              style={{
                bottom: 100,
                left: "50%",
                zIndex: 7,
              }}
            />
            <img
              className="page4_item"
              src={assets("page4_item4.png")}
              id="page4_item4"
              alt="ibe"
              style={{
                bottom: 50,
                left: "60%",
                zIndex: 10,
              }}
            />
          </div>
          <div className="section4_text_footer">
            <h3>Phần quà của bạn là gì?</h3>
            <h3>Tải app ứng tiền ngay để cùng khám phá nhé</h3>
            <div className="img_group">
              <img alt="ibe" src={assets("download_ios.png")} />
              <img alt="ibe" src={assets("download_android.png")} />
            </div>
          </div>
        </div>
      </div>
      <div id="page5">
        <div className="section5">
          <video
            muted
            playsInline
            loop
            aria-hidden
            autoPlay
            className="svg-video-text"
            src={assets("intro_desktop.mp4")}
          />
        </div>
      </div>
      <div id="page6">
        <div className="section6">
          <div
            className="section_title"
          >
            <h1>UEF ĐÃ CHỌN IBE</h1>
            <h1>CÒN BẠN THÌ SAO?</h1>
          </div>
          <div
            className="download_app"
          >
            <img alt="ibe" src={assets("download_ios.png")} />
            <img alt="ibe" src={assets("download_android.png")} />
          </div>
          <div>
            <img
              alt="ibe"
              className="icon_phone"
              src={assets("icon_phone.png")}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PageBot;
