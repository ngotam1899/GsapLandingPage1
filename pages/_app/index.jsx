/* eslint-disable no-restricted-syntax */
/* eslint-disable no-continue */
// #region Global Imports
import * as React from "react";
import App from "next/app";

import "@Static/css/main.scss";

class WebApp extends App {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static async getInitialProps({ Component, ctx }) {
    const pageProps = {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    };

    let isBot = false;
    const { req } = ctx;
    if (typeof req === "object" && req !== null) {
      const userAgent =
        (req.headers &&
          req.headers["user-agent"] &&
          req.headers["user-agent"].toLowerCase()) ||
        "";

      const arrBot = [
        "bot",
        "lighthouse",
        "google",
        "facebook",
        "twitter",
        "linked",
        "speed",
        "test",
        "search",
        "craw",
      ];
      for (const i in arrBot) {
        if (userAgent.indexOf(arrBot[i]) < 0) {
          continue;
        }
        isBot = true;
        break;
      }
    }

    pageProps.isBot = isBot;

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default WebApp;
