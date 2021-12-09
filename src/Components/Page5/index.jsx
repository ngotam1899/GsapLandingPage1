import React, { useState, useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { assets } from "@Constants";

const Page5 = ({ ref_loading, pageWidth, pageHeight }) => {
  const _refElement = {};
  // const pageHeight = window.innerHeight;
  // const pageWidth = window.innerWidth;
  const beginPage = 0;
  const marker = false;
  const config = {
    scrub: 1,
    markers: marker,
  };

  const [link_video, setLink] = useState("intro_mobile.mp4");

  useEffect(() => {
    if (pageWidth > 768) {
      setLink("intro_desktop.mp4");
    }
  }, [pageWidth]);

  useEffect(() => {
    // begin section 5
    gsap.to(_refElement.section5, {
      scrollTrigger: {
        trigger: ref_loading,
        start: `${pageHeight / 2 + 10500}`,
        end: `+=${400}`,
        id: "begin_section_5",
        ...config,
        onUpdate: self => {
          const progress = Number(self.progress.toFixed(3));

          if (progress > 0) {
            _refElement.section5.style.display = "block";
            _refElement.video.style.display = "block";
            _refElement.clip_path.style.display = "block";
          } else {
            _refElement.section5.style.display = "none";
            _refElement.video.style.display = "none";
            _refElement.clip_path.style.display = "none";
          }

          _refElement.section5.style.opacity = progress;
        },
      },
    });

    // zoom text
    gsap.to(_refElement.text_ibe_video, {
      scrollTrigger: {
        trigger: ref_loading,
        start: `${pageHeight / 2 + 11000}`,
        end: `+=${500}`,
        id: "text_ibe_video",
        ...config,
        onUpdate: self => {
          const progress = Number(self.progress.toFixed(3));

          const beginX = pageWidth / 2 - (pageWidth * 0.4) / 2;
          const beginY = pageHeight / 2;

          _refElement.text_ibe_video.setAttribute(
            "x",
            beginX - pageWidth * 1.5 * progress
          );
          _refElement.text_ibe_video.setAttribute(
            "y",
            beginY + (pageHeight / 2) * progress
          );

          _refElement.text_ibe_video.style.fontSize = `${30 +
            260 * progress}vw`;

          _refElement.clip_path.style.opacity = 1 - progress;
        },
      },
    });

    // remove text mark and open full video
    gsap.to(_refElement.text_ibe_video, {
      scrollTrigger: {
        trigger: ref_loading,
        start: `${pageHeight / 2 + 11500}`,
        end: `+=${500}`,
        id: "text_ibe_video",
        ...config,
        onUpdate: self => {
          const progress = Number(self.progress.toFixed(3));

          if (progress > 0) {
            _refElement.clip_path.style.display = "none";
          } else {
            _refElement.clip_path.style.display = "block";
          }
        },
      },
    });

    // end section 5
    gsap.to(_refElement.video, {
      scrollTrigger: {
        trigger: ref_loading,
        start: `${pageHeight / 2 + 12000}`,
        end: `+=${500}`,
        id: "video",
        ...config,
        onUpdate: self => {
          const progress = Number(self.progress.toFixed(3));

          _refElement.video.style.opacity = 1 - progress;
        },
      },
    });
  });

  return (
    <>
      <div id="page5">
        <div
          className="section5"
          ref={ele => {
            if (ele) {
              _refElement.section5 = ele;
            }
          }}
          style={{
            display: "none",
            opacity: 0,
          }}
        >
          <video
            muted
            playsInline
            loop
            aria-hidden
            autoPlay
            className="svg-video-text"
            style={{
              zIndex: 40,
              display: "none",
              opacity: 1,
              width: "100%",
              height: "100%",
            }}
            ref={ele => {
              if (ele) {
                _refElement.video = ele;
              }
            }}
          >
            <source src={assets("intro_mobile.mp4")} type="video/mp4" />
          </video>
          <svg height="0" width="0">
            <clipPath
              id="SVGID_2_"
              style={{
                display: "none",
              }}
              ref={ele => {
                if (ele) {
                  _refElement.clip_path = ele;
                }
              }}
            >
              <text
                x={pageWidth / 2 - (pageWidth * 0.4) / 2}
                y={pageHeight / 2}
                className="text_video"
                fill="red"
                ref={ele => {
                  if (ele) {
                    _refElement.text_ibe_video = ele;
                  }
                }}
              >
                iBe
              </text>
            </clipPath>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Page5;
