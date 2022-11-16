import { Container, Grid, Typography } from "@mui/material";
import { FormLogin } from "./components/FormLogin";

export const Login = () => {
  return (
    <Container maxWidth="xl">
      <Grid container sx={{ pt: 5 }} spacing={5}>
        <Grid item xs={12}>
          <Typography component="div" variant="h5">
            Login
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Grid container display="flex" justifyContent={"center"}>
            <Grid item xs={5}>
              <FormLogin />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
