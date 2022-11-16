import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from "react-responsive-carousel";
import accesoriosCarrousel from "./../../assets/accesoriosCarrousel.jpg";
import acuarelaCarrousel from "./../../assets/acuarelaCarrousel.jpg";
import oficinaCarrousel from "./../../assets/oficinaCarrousel.jpg";
import tecnicoCarrousel from "./../../assets/tecnicoCarrousel.jpg";

export const Carrouselmages = () => {
  return (
    <Carousel
      dynamicHeight={false}
      renderThumbs={() => {}}
      autoPlay
      infiniteLoop
    >
      <div>
        <img
          src={accesoriosCarrousel}
          style={{ width: "100%", height: "350px", objectFit: "cover" }}
        />
        <p className="legend">Organizadores</p>
      </div>
      <div>
        <img
          src={acuarelaCarrousel}
          style={{ width: "100%", height: "350px", objectFit: "cover" }}
        />
        <p className="legend">Arte</p>
      </div>
      <div>
        <img
          src={oficinaCarrousel}
          style={{ width: "100%", height: "350px", objectFit: "cover" }}
        />
        <p className="legend">Escolores y universitarios</p>
      </div>
      <div>
        <img
          src={tecnicoCarrousel}
          style={{ width: "100%", height: "350px", objectFit: "cover" }}
        />
        <p className="legend">Dibujo Ténico</p>
      </div>
    </Carousel>
  );
};
