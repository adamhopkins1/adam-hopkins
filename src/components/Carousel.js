import React from "react";

function Carousel() {
  return (
    <>
      <div
        id="carouselDarkVariant"
        className="carousel slide carousel-fade carousel-dark relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="1"
            aria-label="Slide 1"
          ></button>
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="2"
            aria-label="Slide 1"
          ></button>
        </div>

        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full">
            <img
              src="https://static.bandainamcoent.eu/high/elden-ring/elden-ring/00-page-setup/elden-ring-new-header-mobile.jpg"
              className="block w-full"
              alt="Motorbike Smoke"
            />

            <div className="carousel-caption hidden md:block absolute text-center">
              <h5 className="text-xl">Elden Ring exceeded my expectations for creating game worlds.</h5>
              <p>
              Truly a amazing experience and the most unforgettable worlds ever devised by From Software.
              </p>
            </div>
          </div>

          <div className="carousel-item relative float-left w-full">
            <img
              src="https://portforward.com/far-cry-6/far-cry-6-header-small.webp"
              className="block w-full"
              alt="Mountaintop"
            />
            <div className="carousel-caption hidden md:block absolute text-center">
              <h5 className="text-xl">Far Cry 6 is a fun but cautious duality of the aftereffects of coupes. </h5>
              <p>
                Though the game is fun to play and can be a timesink, the narriatives themselves can hit close to home as a warning for autocracies and the damages they leave in their wake.
              </p>
            </div>
          </div>

          <div className="carousel-item relative float-left w-full">
            <img
              src="https://d1lss44hh2trtw.cloudfront.net/resize?type=webp&url=https%3A%2F%2Fshacknews-www.s3.amazonaws.com%2Fassets%2Farticle%2F2022%2F11%2F14%2Fwitcher-3_feature.jpg&width=1032&sign=C-o8ShlEJaKT97jZqQZnFZYl62q-vlhRVi-KTdQyOas"
              className="block w-full"
              alt="Witcher 3 Geralt"
            />
            <div className="carousel-caption hidden md:block absolute text-center">
              <h5 className="text-xl">The Witcher 3 is more than a revolutionary approach to open-world game design,narriative and environments.</h5>
              <p>
                On many fronts The Witcher 3 represented a high point in game direction and storytelling in an open world environment I loved the witcher because of how Andjej Sarpachokow's world is fully embraced and fully realized becoming a living actualized piece of interactive fiction.
              </p>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carousel;
