import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from "react-responsive-carousel";

import acuarelaCarrousel from "./../../../assets/acuarelaCarrousel.jpg";
import oficinaCarrousel from "./../../../assets/oficinaCarrousel.jpg";
import tecnicoCarrousel from "./../../../assets/tecnicoCarrousel.jpg";
export const ProductoImages = ({ image }) => {
  return (
    <Carousel dynamicHeight={false} renderThumbs={() => {}} infiniteLoop>
      <div>
        <img
          src={image}
          style={{ width: "350px", height: "350px", objectFit: "cover" }}
        />
      </div>
      <div>
        <img
          src={acuarelaCarrousel}
          style={{ width: "350px", height: "350px", objectFit: "cover" }}
        />
      </div>
      <div>
        <img
          src={oficinaCarrousel}
          style={{ width: "350px", height: "350px", objectFit: "cover" }}
        />
      </div>
      <div>
        <img
          src={tecnicoCarrousel}
          style={{ width: "350px", height: "350px", objectFit: "cover" }}
        />
      </div>
    </Carousel>
  );
};
