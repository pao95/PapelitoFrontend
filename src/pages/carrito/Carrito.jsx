import { Container, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { CarritoContext } from "../../context/CarritoContext";
import { ItemCarrito } from "./componentes/ItemCarrito";
import { TotalCarrito } from "./componentes/TotalCarrito";

export const Carrito = () => {
  // const { car } = useSelector((state) => state.carrito);
  const { carrito, getTotal } = useContext(CarritoContext);
  return (
    <Container maxWidth="xl">
      <Grid container sx={{ pt: 5 }} spacing={5}>
        <Grid item xs={12}>
          <Typography component="div" variant="h5">
            Carrito de compras
          </Typography>
        </Grid>

        <Grid item xs={8}>
          <Grid container spacing={1}>
            {carrito.map((item) => (
              <Grid item xs={12}>
                <ItemCarrito editable={true} {...item} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <TotalCarrito getTotal={getTotal} />
        </Grid>
      </Grid>
    </Container>
  );
};
