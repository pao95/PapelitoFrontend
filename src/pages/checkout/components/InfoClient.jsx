import { Button, Card, CardContent, Grid, Typography } from "@mui/material";

export const InfoClient = () => {
  return (
    <Card sx={{ height: "350px" }}>
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h6">Información del cliente</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Dirección de envío
            </Typography>{" "}
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      Nombre cliente:
                    </Typography>{" "}
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      Calle:
                    </Typography>{" "}
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      Altura:
                    </Typography>{" "}
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      Ciudad:
                    </Typography>{" "}
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      Provincia:
                    </Typography>{" "}
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      Cod. Postal:
                    </Typography>{" "}
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="outlined" fullWidth>
                      Editar dirección
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
