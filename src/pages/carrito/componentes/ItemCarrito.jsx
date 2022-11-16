import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { CantidadAgregar } from "../../detalleProducto/components/CantidadAgregar";
import resaltador from "./../../../assets/resaltador.webp";

export const ItemCarrito = (props) => {
  const {
    imageProducto,
    nombreProducto,
    precioProducto,
    cantidad,
    descripcionProducto,
    subtotal,
    editable,
  } = props;
  return (
    <Card sx={{ display: "flex", justifyContent: "space-between" }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={imageProducto}
        alt="Live from space album cover"
      />
      <Box>
        <CardContent
          sx={{
            flex: "1 0 auto",
            maxWidth: "500px",
          }}
        >
          <Typography component="div" variant="h7">
            {nombreProducto}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            sx={{
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              fontSize: "12px",
              WebkitLineClamp: 2,
            }}
          >
            {descripcionProducto}
          </Typography>
        </CardContent>
      </Box>
      <Box>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Grid container>
            <Grid item xs={4}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                    textAlign={"center"}
                  >
                    Precio
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                    textAlign={"center"}
                  >
                    ${precioProducto}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            {editable ? (
              <Grid item xs={4}>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                      textAlign={"center"}
                    >
                      Cantidad
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <CantidadAgregar {...props} />
                  </Grid>
                </Grid>
              </Grid>
            ) : (
              <Grid item xs={4}>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                      textAlign={"center"}
                    >
                      Cantidad
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                      textAlign={"center"}
                    >
                      17
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            )}
            <Grid item xs={4}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                    textAlign={"center"}
                  >
                    Subtotal
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                    textAlign={"center"}
                  >
                    $200
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Box>
    </Card>
  );
};
