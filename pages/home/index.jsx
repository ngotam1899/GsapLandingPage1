/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
import React from "react";

import Head from "next/head";
import dynamic from "next/dynamic";
import { get, cloneDeep } from "lodash";

import { gsap } from "gsap/dist/gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import MessengerCustomerChat from "react-messenger-customer-chat";

// const enableSSR = process.env.SSR || false;
const enableSSR = false;

const LoadingPageComponent = dynamic(
  () => import("../../src/Components/PageLoading/index"),
  {
    ssr: enableSSR,
  }
);

const Page1Component = dynamic(
  () => import("../../src/Components/Page1/index"),
  {
    ssr: enableSSR,
  }
);

const Page2Component = dynamic(
  () => import("../../src/Components/Page2/index"),
  {
    ssr: enableSSR,
  }
);

const Page3Component = dynamic(
  () => import("../../src/Components/Page3/index"),
  {
    ssr: enableSSR,
  }
);

const Page4Component = dynamic(
  () => import("../../src/Components/Page4/index"),
  {
    ssr: enableSSR,
  }
);

const Page5Component = dynamic(
  () => import("../../src/Components/Page5/index"),
  {
    ssr: enableSSR,
  }
);

const Page6Component = dynamic(
  () => import("../../src/Components/Page6/index"),
  {
    ssr: enableSSR,
  }
);

const PageBotComponent = dynamic(
  () => import("../../src/Components/PageBot/index"),
  {
    ssr: enableSSR,
  }
);

const Page1Desktop = dynamic(
  () => import("../../src/Components/Desktop/Page1"),
  {
    ssr: enableSSR,
  }
);

const Page2Desktop = dynamic(
  () => import("../../src/Components/Desktop/Page2"),
  {
    ssr: enableSSR,
  }
);

const PageFooter = dynamic(
  () => import("../../src/Components/PageFooter/index"),
  {
    ssr: enableSSR,
  }
);
const FooterDesktop = dynamic(
  () => import("../../src/Components/Desktop/Footer"),
  {
    ssr: enableSSR,
  }
);

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageHeight: 0,
      pageWidth: 0,
      loading: true,
      desktop: false,
    };
    this._refElement = {
      loading: null,
      phone: null,
    };
    this.pageWaiting = 2500;
    this.refTrigger = null;

    this._isBot = false;

    if (props.isBot === true) {
      this._isBot = true;
      this.state.loading = false;
    } else {
      gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    }
  }

  componentDidMount() {
    if (this._isBot === false) {
      gsap.to(window, { scrollTo: 0 });
      const posY = window.scrollY;

      if (posY === 0) {
        requestAnimationFrame(() => {
          try {
            this.setState({
              pageHeight: window.innerHeight,
              pageWidth: window.innerWidth,
              desktop: window.innerWidth >= 768,
            });

            setTimeout(() => {
              this.setState({
                loading: false,
              });

              gsap.to(window, {
                scrollTo: window.innerHeight / 2 + 1000,
                duration: 1.5,
              });
            }, this.pageWaiting);
          } catch (err) {
            //
          }
        });
      }
      window.addEventListener("resize", this._handleResize);
      window.addEventListener("scroll", this._handleScroll);
    }
  }

  componentWillUnmount() {
    if (this._isBot === false) {
      window.removeEventListener("resize", this._handleResize);
      window.removeEventListener("scroll", this._handleScroll);
    }
  }

  _handleScroll = () => {
    const posY = window.scrollY;
    // console.log(posY);
    if (posY === 0 && this.state.loading !== false) {
      setTimeout(() => {
        this.setState({
          loading: false,
        });

        gsap.to(window, {
          scrollTo: window.innerHeight / 2 + 1000,
          duration: 1.5,
        });
      }, this.pageWaiting);
    }
  };

  _handleResize = () => {
    this.setState({
      pageWidth: window.innerWidth,
      desktop: window.innerWidth >= 768,
      // pageHeight: window.innerHeight,
    });
  };

  _renderLoadingPage = () => {
    return (
      <section id="loading" className="sticky loading" style={{ zIndex: 1 }}>
        <div
          className="content"
          style={{
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <LoadingPageComponent />;
        </div>
      </section>
    );
  };

  _renderMainPage = () => {
    const { pageWidth, pageHeight } = this.state;
    const beginPage = pageHeight / 2 + 16500;
    return (
      <>
        <section
          id="loading"
          className="sticky loading"
          style={{ zIndex: 1 }}
          ref={ele => {
            if (ele) {
              this._refElement.loading = ele;
            }
          }}
        >
          <div
            className="content"
            style={{
              height: `${beginPage}px`,
              overflow: "hidden",
            }}
          >
            <Page1Component
              ref_loading={this._refElement.loading}
              pageWidth={pageWidth}
              pageHeight={pageHeight}
            />
            <Page2Component
              ref_loading={this._refElement.loading}
              pageWidth={pageWidth}
              pageHeight={pageHeight}
            />
            <Page3Component
              ref_loading={this._refElement.loading}
              pageWidth={pageWidth}
              pageHeight={pageHeight}
            />
            <Page4Component
              ref_loading={this._refElement.loading}
              pageWidth={pageWidth}
              pageHeight={pageHeight}
            />
            <Page5Component
              ref_loading={this._refElement.loading}
              pageWidth={pageWidth}
              pageHeight={pageHeight}
            />
            <Page6Component
              ref_loading={this._refElement.loading}
              pageWidth={pageWidth}
              pageHeight={pageHeight}
            />
            <PageFooter
              ref_loading={this._refElement.loading}
              pageWidth={pageWidth}
              pageHeight={pageHeight}
            />
          </div>
        </section>
      </>
    );
  };

  _renderMainDesktopPage = () => {
    const { pageWidth, pageHeight } = this.state;

    return (
      <section
        id="loading"
        className="sticky loading"
        style={{ zIndex: 1 }}
        ref={ele => {
          if (ele) {
            this._refElement.loading = ele;
          }
        }}
      >
        <div
          className="content"
          style={{
            height: "5100vh",
            overflow: "hidden",
          }}
        >
          <Page1Desktop />
          <Page2Desktop />
        </div>
        <FooterDesktop />
      </section>
    );
  };

  _renderBotPage = () => {
    return <PageBotComponent />;
  };

  render() {
    const { loading, desktop } = this.state;
    console.log("loading", loading);
    console.log("is_bot", this._isBot);
    console.log("desktop screen", desktop);

    let layoutHtml = this._renderLoadingPage();

    if (loading === false && this._isBot === false) {
      if (desktop === true) {
        layoutHtml = this._renderMainDesktopPage();
      } else {
        layoutHtml = this._renderMainPage();
      }
    }

    if (this._isBot === true) {
      layoutHtml = this._renderBotPage();
    }

    return (
      <div>
        <Head>
          <title>Ibenefit Nhận Ưu Đãi</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, 
            maximum-scale=1.0, user-scalable=no, shrink-to-fit=no"
          />
          <meta name="HandheldFriendly" content="true" />
        </Head>
        {layoutHtml}
        <MessengerCustomerChat
          pageId="1409344332677753"
          appId="323747138851500"
          // pageId="1684600495085468"
          // appId="569178380462500"
        />
      </div>
    );
  }
}

export default Home;
