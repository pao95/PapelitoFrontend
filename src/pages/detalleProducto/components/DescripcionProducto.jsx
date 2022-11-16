import { Grid, Typography } from "@mui/material";

export const DescripcionProducto = ({ precio, title, description }) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Typography variant="h5">{title}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">{description}</Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h6">Precio: ${precio}</Typography>
      </Grid>
    </Grid>
  );
};
