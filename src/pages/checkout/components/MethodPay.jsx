import {
  Box,
  Button,
  Card,
  CardContent,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";

export const MethodPay = () => {
  return (
    <Card sx={{ height: "350px" }}>
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h6">Pago</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Datos de la tarjeta
            </Typography>{" "}
          </Grid>
          <Grid item xs={12}>
            <Box component="form" noValidate autoComplete="off">
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="credito"
                      control={<Radio />}
                      label="Crédito"
                    />
                    <FormControlLabel
                      value="debito"
                      control={<Radio />}
                      label="Débito"
                    />
                  </RadioGroup>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    required
                    id="outlined-required"
                    label="Titular"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    required
                    id="outlined-number"
                    label="Num. Tarjeta"
                    type="number"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    required
                    fullWidth
                    id="outlined-number"
                    label="Cod. Seguridad"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    required
                    id="outlined-number"
                    label="Fecha expiración"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
