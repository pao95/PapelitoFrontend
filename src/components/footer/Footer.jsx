import { Box, Grid, Typography } from "@mui/material";

import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
export const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: 300,
        backgroundColor: "primary.dark",
        display: "flex",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <Grid container color="white">
        <Grid xs={4} item display={"flex"} justifyContent="center">
          <Grid container>
            <Grid item xs={12} display={"flex"} justifyContent="center">
              <AutoStoriesIcon sx={{ fontSize: "50px" }} />
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h5"
                textAlign={"center"}
                sx={{ marginTop: "-50px" }}
              >
                Hasta la Última Línea
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={4} item display={"flex"} justifyContent="center">
          <Grid container>
            <Grid item xs={12} display={"flex"} justifyContent="center">
              <Typography variant="subtitle1" textAlign={"center"}>
                Politicas de privacidad
              </Typography>
            </Grid>
            <Grid item xs={12} display={"flex"} justifyContent="center">
              <Typography variant="subtitle1" textAlign={"center"}>
                Terminos y codiciones
              </Typography>
            </Grid>
            <Grid item xs={12} display={"flex"} justifyContent="center">
              <Grid container>
                <Grid item xs={12} display={"flex"} justifyContent="center">
                  <Typography variant="h5" textAlign={"center"}>
                    Medios de pago
                  </Typography>
                </Grid>
                <Grid item xs={12} display={"flex"} justifyContent="center">
                  <CreditCardIcon sx={{ fontSize: 35, margin: "10px" }} />
                  <CreditCardIcon sx={{ fontSize: 35, margin: "10px" }} />
                  <CreditCardIcon sx={{ fontSize: 35, margin: "10px" }} />
                </Grid>
                <Grid item xs={12}></Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={4} item display={"flex"} justifyContent="center">
          <Grid container>
            <Grid item xs={12} display={"flex"} justifyContent="center">
              <Typography variant="h5" textAlign={"center"}>
                Contacto
              </Typography>
            </Grid>
            <Grid item xs={12} display={"flex"} justifyContent="center">
              <Typography variant="subtitle1" textAlign={"center"}>
                papelito@gmail.com
              </Typography>
            </Grid>
            <Grid item xs={12} display={"flex"} justifyContent="center">
              <Grid container>
                <Grid item xs={12} display={"flex"} justifyContent="center">
                  <Typography variant="subtitle1" textAlign={"center"}>
                    2648373818
                  </Typography>
                </Grid>
                <Grid item xs={12} display={"flex"} justifyContent="center">
                  <Typography variant="h5" textAlign={"center"}>
                    Seguinos
                  </Typography>
                </Grid>
                <Grid item xs={12} display={"flex"} justifyContent="center">
                  <FacebookIcon sx={{ fontSize: 35, margin: "10px" }} />
                  <InstagramIcon sx={{ fontSize: 35, margin: "10px" }} />
                  <TwitterIcon sx={{ fontSize: 35, margin: "10px" }} />
                </Grid>
                <Grid item xs={12}></Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
