import React, { useEffect, useRef } from "react";
import "../SCSS/CarouselItem.scss";

export default function CarouselItem({
  bannerWidth,
  currentIndex,
  idx,
  title,
  description,
  img,
  kind,
}) {
  const imageRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    if (idx === currentIndex) {
      imageRef.current.style.filter = "brightness(100%)";
      infoRef.current.style.opacity = 1;
    } else {
      imageRef.current.style.filter = "brightness(50%)";
      infoRef.current.style.opacity = 0;
    }
  });

  return (
    <div
      className="slick-slide"
      style={{ width: bannerWidth }}
      data-banner-index={`${idx}`}>
      <div>
        <div
          className="home__mainBanner"
          data-content-title={title}
          data-link-kind={kind}
          style={{ width: "100%", display: "inline-block" }}>
          <div className="Image_Image">
            <a href="/">
              <img
                src={img}
                alt={title}
                ref={imageRef}
                className="Image_Image__image"
                style={{ filter: "brightness(50%)" }}></img>
            </a>
          </div>
          <div
            className="Information_Information"
            ref={infoRef}
            style={{
              opacity: 0,
              transition: "opacity 0.5s ease-in-out",
            }}>
            <h2>{title}</h2>
            <h3>{description}</h3>
            <hr className="Divider_Divider" />
            <a href="/" className="Button_Button">
              <span className="Button_label">{"바로가기"}</span>
              <span className="Button_endIcon">
                <span className="endIcon_SvgIcon">
                  <svg className="SvgICon_SvgIcon" viewBox="0 0 18 18">
                    <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                  </svg>
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
