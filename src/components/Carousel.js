import React, { useCallback, useEffect, useRef, useState } from "react";
import CarouselItem from "./CarouselItem";
import banner from "../data/banner";
import "../SCSS/Carousel.scss";
import Prev from "./icons/Prev";
import Next from "./icons/Next";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(Math.random() * 11) + 12
  );
  // const [active, setActive] = useState(false);
  const [bannerWidth, setBannerWidth] = useState(1060);
  const bannerNum = banner.length * 3;
  const tripleBanners = [...banner, ...banner, ...banner];
  const [containerWidth, setContainerWidth] = useState(bannerWidth * bannerNum);
  const [innerWidth, SetInnerWidth] = useState(window.innerWidth);
  const resizeInnerWidth = (event) => {
    SetInnerWidth(event.target.innerWidth);
    setBannerWidth(innerWidth - 80);
    setContainerWidth((innerWidth - 80) * bannerNum);
  };
  const translateX = bannerWidth * currentIndex;
  const moveToNext = () => {
    console.log("next");
  };
  useEffect(() => {
    const timer = setTimeout(moveToNext, 5000);
    window.addEventListener("resize", resizeInnerWidth);
    return () => {
      window.removeEventListener("resize", resizeInnerWidth);
      clearInterval(timer);
    };
  });

  const handleClick = useCallback((button) => {
    if (button === "prev") {
      if (currentIndex <= 1) {
        setCurrentIndex(bannerNum - 2);
      } else {
        // setCurrentIndex();
      }
    } else if (button === "next") {
      if (currentIndex >= bannerNum - 2) {
        setCurrentIndex(1);
      } else {
        // setCurrentIndex();
      }
    }
  });

  return (
    <div className="Main_Main">
      <div className="TopBanner_TopBanner">
        <div className="slick-slider">
          <div className="slick-list">
            <div
              className="slick-track"
              style={{
                width: containerWidth,
                transform: `translateX(${-translateX}px)`,
                transition:
                  currentIndex == 1 || currentIndex >= bannerNum - 2
                    ? "none"
                    : "350ms all ease-in-out",
              }}>
              {tripleBanners.map(({ title, description, img, kind }, idx) => {
                return (
                  <CarouselItem
                    bannerWidth={bannerWidth}
                    key={idx}
                    title={title}
                    description={description}
                    img={img}
                    kind={kind}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <button
          type="button"
          className="arrow prev"
          name="prev"
          onClick={() => handleClick("prev")}>
          <span>
            <Prev />
          </span>
        </button>
        <button
          type="button"
          className="arrow next"
          name="next"
          onClick={() => handleClick("next")}>
          <span>
            <Next />
          </span>
        </button>
      </div>
    </div>
  );
}
