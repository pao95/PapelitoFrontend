import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect } from "react";
import { Carrouselmages } from "../../components/carrousel/Carrouselmages";
import useFetchAndLoad from "../../hooks/useFetch";
import api from "../../services";
import { Destacados } from "./components/Destacados";
import { Duenios } from "./components/Duenios";
import { Ofertas } from "./components/Ofertas";
import { Pasos } from "./components/Pasos";

export const Home = () => {
  const { callEndpoint } = useFetchAndLoad();

  return (
    <>
      <Carrouselmages />
      <Container maxWidth="xl">
        <Grid container sx={{ pt: 8 }} spacing={15}>
          <Grid item xs={12}>
            <Destacados />
          </Grid>
          <Grid item xs={12}>
            <Ofertas />
          </Grid>
          <Grid item xs={12}>
            <Pasos />
          </Grid>
          <Grid item xs={12}>
            <Duenios />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
