import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useFetchAndLoad from "../../../hooks/useFetch";
import api from "../../../services";
import Carousel from "better-react-carousel";
import { CardImage } from "../../../components/card/CardImage";

export const Ofertas = () => {
  const { callEndpoint } = useFetchAndLoad();

  const [ofertas, setOfertas] = useState([]);

  const getOfertas = () => {
    const responseOfertas = ({ status, data }) => {
      if (status) {
        setOfertas(data);
      }
    };
    callEndpoint(api.producto.getProductosOfertas(), responseOfertas);
  };

  useEffect(() => {
    getOfertas();
  }, []);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6" textAlign={"center"} fontWeight={600}>
          Ofertas
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Carousel cols={6} rows={1} gap={5} loop={true} autoplay={5000}>
          {ofertas.map(
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
