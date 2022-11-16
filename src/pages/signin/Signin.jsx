import { Container, Grid, Typography } from "@mui/material";
import { FormSignin } from "./components/FormSignin";

export const Signin = () => {
  return (
    <Container maxWidth="xl">
      <Grid container sx={{ pt: 5 }} spacing={5}>
        <Grid item xs={12}>
          <Typography component="div" variant="h5">
            Registro
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Grid container display="flex" justifyContent={"center"}>
            <Grid item xs={5}>
              <FormSignin />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
