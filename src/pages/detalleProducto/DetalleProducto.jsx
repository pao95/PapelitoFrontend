import { Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetchAndLoad from "../../hooks/useFetch";
import api from "../../services";
import { CantidadAgregar } from "./components/CantidadAgregar";
import { DescripcionProducto } from "./components/DescripcionProducto";
import { ProductoImages } from "./components/ProductoImages";

export const DetalleProducto = () => {
  const { callEndpoint } = useFetchAndLoad();
  const { idProducto } = useParams();

  const [producto, setProducto] = useState([]);

  const getDetailProducto = () => {
    const responseDetailProducto = ({ status, data }) => {
      if (status) {
        setProducto(data);
      }
    };

    callEndpoint(
      api.producto.getDetailProducto(idProducto),
      responseDetailProducto
    );
  };

  useEffect(() => {
    getDetailProducto();
  }, []);

  return (
    <Container maxWidth="xl">
      <Grid container sx={{ pt: 5 }} spacing={5}>
        <Grid item xs={12}>
          <Typography component="div" variant="h5">
            Detalle producto
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <ProductoImages image={producto.imageProducto} />
        </Grid>
        <Grid item xs={5}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <DescripcionProducto
                title={producto.nombreProducto}
                description={producto.descripcionProducto}
                precio={producto.precioProducto}
              />
            </Grid>
            <Grid item xs={12}>
              <CantidadAgregar showButtonAdd={true} {...producto} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
