import React from "react";
import CarouselItem from "./CarouselItem";
import banner from "../data/banner";
import "../SCSS/Carousel.scss";

export default function Carousel() {
  const bannerNum = banner.length;
  const bannerWidth = 1060;
  const containerWidth = bannerWidth * bannerNum;

  return (
    <div className="Main_Main">
      <div className="TopBanner_TopBanner">
        <div className="slick-slider">
          <div className="slick-list">
            <div className="slick-track" style={{ width: containerWidth }}>
              {banner.map(({ title, description, img, kind }, idx) => {
                return (
                  <CarouselItem
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
      </div>
    </div>
  );
}
