import { Container, Grid, Typography } from "@mui/material";
import { Details } from "./components/Details";

export const UserDetail = () => {
  return (
    <Container maxWidth="xl">
      <Grid container sx={{ pt: 5 }} spacing={5}>
        <Grid item xs={12}>
          <Typography component="div" variant="h5">
            Mis datos
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Grid container display="flex" justifyContent={"center"}>
            <Grid item xs={5}>
              <Details />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
