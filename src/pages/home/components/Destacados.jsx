import { Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useFetchAndLoad from "../../../hooks/useFetch";
import api from "../../../services";
import { CardImage } from "../../../components/card/CardImage";

import ItemsCarousel from "react-items-carousel";

export const Destacados = () => {
  const { callEndpoint } = useFetchAndLoad();

  const [destacados, setDestacados] = useState([]);

  const getDestacados = () => {
    const responseDestacados = ({ status, data }) => {
      if (status) {
        setDestacados(data);
      }
    };
    callEndpoint(api.producto.getProductosDestacados(), responseDestacados);
  };

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  useEffect(() => {
    getDestacados();
  }, []);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6" textAlign={"center"} fontWeight={600}>
          Destacados
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <ItemsCarousel
          infiniteLoop={true}
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={6}
          gutter={20}
          leftChevron={<Button>{"<"}</Button>}
          rightChevron={<Button>{">"}</Button>}
          outsideChevron
          chevronWidth={chevronWidth}
        >
          {destacados.map(
            ({ id, nombreProducto, precioProducto, imageProducto }) => (
              <div>
                <CardImage
                  id={id}
                  nombre={nombreProducto}
                  precio={precioProducto}
                  image={imageProducto}
                />
              </div>
            )
          )}
        </ItemsCarousel>
      </Grid>
    </Grid>
  );
};
