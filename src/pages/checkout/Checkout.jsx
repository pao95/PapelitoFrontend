import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { InfoClient } from "./components/InfoClient";
import { MethodPay } from "./components/MethodPay";
import { Resumen } from "./components/Resumen";

export const Checkout = () => {
  return (
    <Container maxWidth="xl">
      <Grid container sx={{ pt: 5 }} spacing={5}>
        <Grid item xs={12}>
          <Typography component="div" variant="h5">
            Checkout
          </Typography>
        </Grid>

        <Grid item xs={5}>
          <InfoClient />
        </Grid>
        <Grid item xs={7}>
          <MethodPay />
        </Grid>
        <Grid item xs={12}>
          <Resumen />
        </Grid>
      </Grid>
    </Container>
  );
};
