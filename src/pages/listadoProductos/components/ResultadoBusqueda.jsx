import { Grid } from "@mui/material";
import { useContext } from "react";
import { CardImage } from "../../../components/card/CardImage";
import { ListadoProductosContext } from "../context/ListadoProductosContext";

export const ResultadoBusqueda = () => {
  const { productosSearched } = useContext(ListadoProductosContext);

  const { content } = productosSearched;
  return (
    <Grid container spacing={2}>
      {content?.map(({ id, nombreProducto, precioProducto, imageProducto }) => (
        <Grid item xs={12} md={3} sm={6}>
          <CardImage
            id={id}
            nombre={nombreProducto}
            precio={precioProducto}
            image={imageProducto}
          />
        </Grid>
      ))}
    </Grid>
  );
};
