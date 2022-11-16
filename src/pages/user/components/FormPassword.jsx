import {
  Autocomplete,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

export const FormPassword = () => {
  return (
    <Grid container display="flex" justifyContent={"center"} spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">Constraseña</Typography>
      </Grid>

      <Grid item xs={12}>
        <Box component="form" noValidate autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                required
                id="outlined-required"
                label="Contraseña"
                type="password"
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
                label="Repetir contraseña"
                type="password"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>

            <Grid item xs={12} display="flex" justifyContent={"right"}>
              <Button variant="contained">Guardar contraseña</Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};
