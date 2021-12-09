import React, { useEffect } from "react";
import { assets } from "@Constants";

const PageLoading = ({}) => {
  const _refElement = {};

  useEffect(() => {
    //
  });

  return (
    <>
      <div id="page_loading">
        <img
          className="logo_loading heartbeat"
          src={assets("logo.png")}
          alt="ibe"
        />
      </div>
    </>
  );
};

export default PageLoading;
