import { Grid, Pagination } from "@mui/material";
import { useContext } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ListadoProductosContext } from "../context/ListadoProductosContext";

export const PaginationResultados = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { getProductosCategoria, totalSizeResults, page, setPage } = useContext(
    ListadoProductosContext
  );
  const handleChange = (event, value) => {
    const idCategoria = searchParams.get("categoria");
    getProductosCategoria(idCategoria, value, 10);
    setPage(value);
  };
  return (
    <Grid container sx={{ m: 5 }} display="flex" justifyContent={"center"}>
      <Grid item>
        <Pagination
          count={totalSizeResults - 1}
          page={page}
          onChange={handleChange}
        />
      </Grid>
    </Grid>
  );
};
