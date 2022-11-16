import { Fab, Grid, Paper, Typography } from "@mui/material";
import { CardImage } from "../../../components/card/CardImage";

export const Pasos = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6" textAlign={"center"} fontWeight={600}>
          ¡Es muy Fácil y Seguro!
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={4} display={"flex"} justifyContent="right">
            <Paper elevation={0}>
              <Grid container spacing={2}>
                <Grid item xs={12} display={"flex"} justifyContent="center">
                  <Fab
                    disableTouchRipple
                    color="secondary"
                    disableRipple
                    sx={{
                      width: "70px",
                      height: "70px",
                    }}
                    display={"flex"}
                    justifyContent="center"
                  >
                    <Typography variant="h6" textAlign={"center"}>
                      2
                    </Typography>
                  </Fab>
                </Grid>
                <Grid item xs={12} display={"flex"} justifyContent="center">
                  <Typography variant="h6" textAlign={"center"}>
                    Buscá
                  </Typography>
                </Grid>

                <Grid item xs={12} display={"flex"} justifyContent="center">
                  <Typography variant="body2" textAlign={"center"}>
                    Busca el producto que necesitas.
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={4} display={"flex"} justifyContent="center">
            <Paper elevation={0}>
              <Grid container spacing={2}>
                <Grid item xs={12} display={"flex"} justifyContent="center">
                  <Fab
                    disableTouchRipple
                    color="secondary"
                    disableRipple
                    sx={{
                      width: "70px",
                      height: "70px",
                    }}
                    display={"flex"}
                    justifyContent="center"
                  >
                    <Typography variant="h6" textAlign={"center"}>
                      2
                    </Typography>
                  </Fab>
                </Grid>
                <Grid item xs={12} display={"flex"} justifyContent="center">
                  <Typography variant="h6" textAlign={"center"}>
                    Comprá
                  </Typography>
                </Grid>

                <Grid item xs={12} display={"flex"} justifyContent="center">
                  <Typography variant="body2" textAlign={"center"}>
                    Agrega tus productos al carrito.
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={4} display={"flex"} justifyContent="left">
            <Paper elevation={0}>
              <Grid container spacing={2}>
                <Grid item xs={12} display={"flex"} justifyContent="center">
                  <Fab
                    disableTouchRipple
                    color="secondary"
                    disableRipple
                    sx={{
                      width: "70px",
                      height: "70px",
                    }}
                    display={"flex"}
                    justifyContent="center"
                  >
                    <Typography variant="h6" textAlign={"center"}>
                      3
                    </Typography>
                  </Fab>
                </Grid>
                <Grid item xs={12} display={"flex"} justifyContent="center">
                  <Typography variant="h6" textAlign={"center"}>
                    Pagá
                  </Typography>
                </Grid>

                <Grid item xs={12} display={"flex"} justifyContent="center">
                  <Typography variant="body2" textAlign={"center"}>
                    Aceptamos todos los medios de pago.
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
