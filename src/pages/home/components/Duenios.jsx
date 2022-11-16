import { Avatar, Grid, Typography } from "@mui/material";
import { CardImage } from "../../../components/card/CardImage";
import avatarMujer from "./../../../assets/avatar.webp";
import avatarHombre from "./../../../assets/avatarHombre.webp";

export const Duenios = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6" textAlign={"center"} fontWeight={600}>
          Somos tu Mejor Opción
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Grid container>
              <Grid item xs={12} display={"flex"} justifyContent="center">
                <Avatar
                  alt="Remy Sharp"
                  src={avatarHombre}
                  sx={{ width: 200, height: 200 }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" textAlign={"center"}>
                  Renzo
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid container>
              <Grid item xs={12} display={"flex"} justifyContent="center">
                <Avatar
                  alt="Remy Sharp"
                  src={avatarMujer}
                  sx={{ width: 200, height: 200 }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" textAlign={"center"}>
                  Pau
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid container>
              <Grid item xs={12} display={"flex"} justifyContent="center">
                <Avatar
                  alt="Remy Sharp"
                  src={avatarMujer}
                  sx={{ width: 200, height: 200 }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" textAlign={"center"}>
                  Mari
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid container>
              <Grid item xs={12} display={"flex"} justifyContent="center">
                <Avatar
                  alt="Remy Sharp"
                  src={avatarMujer}
                  sx={{ width: 200, height: 200 }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" textAlign={"center"}>
                  Pao
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
