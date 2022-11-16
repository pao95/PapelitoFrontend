import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

export const FormSignin = () => {
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
                <Grid item xs={6}>
                  <TextField
                    required
                    id="outlined-required"
                    label="Nombre"
                    type={"text"}
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    id="outlined-required"
                    label="Apellido"
                    type={"text"}
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
                    label="Correo"
                    type="email"
                    show
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
                  <TextField
                    required
                    id="outlined-number"
                    label="Confirmar contraseña"
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
                    Registrarse
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
