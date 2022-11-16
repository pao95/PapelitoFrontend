import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

export const FormLogin = () => {
  return (
    <Card>
      <CardContent>
        <Grid container display="flex" justifyContent={"center"} spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6">Complete los datos</Typography>
          </Grid>

          <Grid item xs={12}>
            <Box component="form" noValidate autoComplete="off">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="outlined-required"
                    label="Correo"
                    type="email"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="outlined-number"
                    label="Contraseña"
                    type="password"
                    show
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" fullWidth>
                    Ingresar
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
