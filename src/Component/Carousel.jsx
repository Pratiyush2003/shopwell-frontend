import React from "react";

const Carousel = () => {
  return (
    <div className="md:m-10">
      <div className="carousel w-full ">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://cdn.vectorstock.com/i/500p/91/98/shopping-online-with-discount-conceptual-banner-vector-47519198.jpg"
            className="w-full md:h-96"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn ">
              ❮
            </a>
            <a href="#slide2" className="btn ">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://cdn.vectorstock.com/i/500p/52/31/banner-website-development-with-laptop-vector-44645231.jpg"
            className="w-full md:h-96"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn ">
              ❮
            </a>
            <a href="#slide3" className="btn ">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/styles/webp/public/2023-06/EOSS%20Creative%202.jpg.webp?itok=aCKmfysQ"
            className="w-full md:h-96"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn ">
              ❮
            </a>
            <a href="#slide4" className="btn ">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ytimg.com/vi/u9HMyq7PPbs/maxresdefault.jpg"
            className="w-full md:h-96"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn ">
              ❮
            </a>
            <a href="#slide1" className="btn ">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
