import { Container, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import useFetchAndLoad from "../../hooks/useFetch";
import api from "../../services";
import { FiltrosAplicados } from "./components/FiltrosAplicados";
import { FiltrosCategorias } from "./components/FiltrosCategorias";
import { OrdenListado } from "./components/OrdenListado";
import { PaginationResultados } from "./components/PaginationResultados";
import { ResultadoBusqueda } from "./components/ResultadoBusqueda";
import { ListadoProductosProvider } from "./context/ListadoProductosProvider";

export const ListadoProductos = () => {
  return (
    <ListadoProductosProvider>
      <Container maxWidth="xl">
        <Grid container sx={{ pt: 5 }} spacing={5}>
          <Grid item xs={12}>
            <Typography component="div" variant="h5">
              Resultados búsqueda
            </Typography>
          </Grid>
          <Grid
            item
            xs={3}
            display="flex"
            justifyContent={"center"}
            sx={{ height: "fit-content" }}
          >
            <FiltrosCategorias />
          </Grid>
          <Grid item xs={9}>
            <Grid item xs={12} display="flex" justifyContent={"right"}>
              <OrdenListado />
            </Grid>
            <Grid item xs={12} display="flex" justifyContent={"left"}>
              <FiltrosAplicados />
            </Grid>
            <Grid item xs={12} display="flex" justifyContent={"center"}>
              <ResultadoBusqueda />
            </Grid>
            <Grid item xs={12} display="flex" justifyContent={"center"}>
              <PaginationResultados />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </ListadoProductosProvider>
  );
};
