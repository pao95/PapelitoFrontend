import {
  Autocomplete,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

export const FormDatosGenerales = () => {
  return (
    <Grid container display="flex" justifyContent={"center"} spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">Datos Generales</Typography>
      </Grid>

      <Grid item xs={12}>
        <Box component="form" noValidate autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                required
                id="outlined-required"
                label="Nombre"
                type="text"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                id="outlined-number"
                label="Apellido"
                type="text"
                show
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h7" color="text.secondary" component="div">
                Dirección
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <TextField
                required
                id="outlined-number"
                label="Calle"
                type="text"
                show
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                required
                id="outlined-number"
                label="Calle"
                type="number"
                show
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                required
                id="outlined-number"
                label="Num. dpto."
                type="number"
                show
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                required
                id="outlined-number"
                label="Piso"
                type="number"
                show
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={4}></Grid>

            <Grid item xs={4.5}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={[]}
                renderInput={(params) => (
                  <TextField {...params} label="Provincia" />
                )}
              />
            </Grid>
            <Grid item xs={4.5}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={[]}
                renderInput={(params) => (
                  <TextField {...params} label="Ciudad" />
                )}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                required
                id="outlined-number"
                label="Cod. Postal"
                type="number"
                show
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>

            <Grid item xs={12} display="flex" justifyContent={"right"}>
              <Button variant="contained">Guardar mis datos</Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};
