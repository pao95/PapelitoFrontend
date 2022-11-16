import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useFetchAndLoad from "../../../hooks/useFetch";
import api from "../../../services";
import Carousel from "better-react-carousel";
import { CardImage } from "../../../components/card/CardImage";

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
        <Carousel cols={6} rows={1} gap={5} loop={true} autoplay={5000}>
          {destacados.map(
            ({ id, nombreProducto, precioProducto, imageProducto }) => (
              <Carousel.Item>
                <CardImage
                  id={id}
                  nombre={nombreProducto}
                  precio={precioProducto}
                  image={imageProducto}
                />
              </Carousel.Item>
            )
          )}
        </Carousel>
      </Grid>
    </Grid>
  );
};
