import React, { useEffect, useRef, useState } from "react";
import CarouselItem from "./CarouselItem";
import banner from "../data/banner";
import "../SCSS/Carousel.scss";
import Prev from "./icons/Prev";
import Next from "./icons/Next";

export default function Carousel() {
  const containerRef = useRef(null);
  const tripleBanners = [...banner, ...banner, ...banner]; // 1~11 , 12~22 , 23~33
  const bannerCount = banner.length * 3; // container 안 총 배너 개수 (1~33)
  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(Math.random() * 10) + 12 // 12~22 사이의 랜덤 숫자
    // 12
  );
  const [innerWidth, SetInnerWidth] = useState(window.innerWidth);
  const bannerWidth = innerWidth >= 1200 ? 1060 : innerWidth - 80;
  const containerWidth = bannerWidth * bannerCount;

  const resizeInnerWidth = (event) => {
    SetInnerWidth(event.target.innerWidth);
  };

  const moveToNext = () => {
    if (currentIndex <= bannerCount - 2) {
      containerRef.current.style.transition = "all 0.5s ease-in-out";
      setCurrentIndex(currentIndex + 1);
    }
    if (currentIndex === bannerCount - 2) {
      setTimeout(() => {
        containerRef.current.style.transition = "0ms";
        setCurrentIndex(currentIndex - (bannerCount * 2) / 3 + 1);
      }, 500);
    }
  };

  const moveToPrev = () => {
    if (currentIndex >= 3) {
      containerRef.current.style.transition = "all 0.5s ease-in-out";
      setCurrentIndex(currentIndex - 1);
    }
    if (currentIndex === 3) {
      setTimeout(() => {
        containerRef.current.style.transition = "0ms";
        setCurrentIndex(currentIndex + (bannerCount * 2) / 3 - 1);
      }, 500);
    }
  };

  useEffect(() => {
    const timer = setTimeout(moveToNext, 5000);
    window.addEventListener("resize", resizeInnerWidth);
    return () => {
      window.removeEventListener("resize", resizeInnerWidth);
      clearInterval(timer);
    };
  });

  console.log(currentIndex);

  return (
    <div className="Main_Main">
      <div className="TopBanner_TopBanner">
        <div className="slick-slider">
          <div className="slick-list">
            <div
              className="slick-track"
              ref={containerRef}
              style={{
                width: containerWidth,
                transform: `${
                  innerWidth >= 1200
                    ? `translateX(-${
                        (currentIndex - 1) * bannerWidth -
                        (innerWidth - bannerWidth) / 2 +
                        40
                      }px)`
                    : `translateX(-${(currentIndex - 1) * bannerWidth}px)`
                }`,
              }}>
              {tripleBanners.map(({ title, description, img, kind }, idx) => {
                return (
                  <CarouselItem
                    bannerWidth={bannerWidth}
                    currentIndex={currentIndex}
                    key={idx}
                    idx={idx + 1}
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
          onClick={() => moveToPrev()}>
          <span>
            <Prev />
          </span>
        </button>
        <button
          type="button"
          className="arrow next"
          name="next"
          onClick={() => moveToNext()}>
          <span>
            <Next />
          </span>
        </button>
      </div>
    </div>
  );
}
