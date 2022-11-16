import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CarritoContext } from "../../../context/CarritoContext";
import { ItemCarrito } from "./ItemCarrito";

export const ResumenCarrito = () => {
  const { carrito, getTotal } = useContext(CarritoContext);
  const navigate = useNavigate();

  return (
    <Grid container spacing={1} sx={{ p: 1, width: "400px" }}>
      {carrito.map(
        ({ nombreProducto, imageProducto, precioProducto, cantidad }) => (
          <Grid item xs={12}>
            <Grid container sx={{ diplay: "flex", justifyContent: "center" }}>
              <Grid item xs={2}>
                <CardMedia
                  component="img"
                  sx={{ width: 50 }}
                  image={imageProducto}
                  alt="Live from space album cover"
                />
              </Grid>
              <Grid
                item
                xs={10}
                sx={{ diplay: "flex", justifyContent: "center" }}
              >
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    // sx={{ diplay: "flex", justifyContent: "center" }}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontSize: "12px",
                        // textAlign: "center",
                      }}
                    >
                      {nombreProducto}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{ diplay: "flex", justifyContent: "center" }}
                  >
                    <Grid
                      container
                      sx={{ diplay: "flex", justifyContent: "center" }}
                    >
                      <Grid item xs={4}>
                        <Grid container>
                          <Grid
                            item
                            xs={12}
                            sx={{ diplay: "flex", justifyContent: "center" }}
                          >
                            <Typography
                              variant="subtitle1"
                              color="text.secondary"
                              component="div"
                              textAlign={"center"}
                              sx={{
                                fontSize: "12px",
                              }}
                            >
                              Precio
                            </Typography>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sx={{ diplay: "flex", justifyContent: "center" }}
                          >
                            <Typography
                              variant="subtitle1"
                              color="text.secondary"
                              component="div"
                              textAlign={"center"}
                              sx={{
                                fontSize: "12px",
                              }}
                            >
                              ${precioProducto}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={4}>
                        <Grid container>
                          <Grid
                            item
                            xs={12}
                            sx={{ diplay: "flex", justifyContent: "center" }}
                          >
                            <Typography
                              variant="subtitle1"
                              color="text.secondary"
                              component="div"
                              textAlign={"center"}
                              sx={{
                                fontSize: "12px",
                              }}
                            >
                              Cantidad
                            </Typography>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sx={{ diplay: "flex", justifyContent: "center" }}
                          >
                            <Typography
                              variant="subtitle1"
                              color="text.secondary"
                              component="div"
                              textAlign={"center"}
                              sx={{
                                fontSize: "12px",
                              }}
                            >
                              {cantidad}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={4}>
                        <Grid container>
                          <Grid
                            item
                            xs={12}
                            sx={{ diplay: "flex", justifyContent: "center" }}
                          >
                            <Typography
                              variant="subtitle1"
                              color="text.secondary"
                              component="div"
                              textAlign={"center"}
                              sx={{
                                fontSize: "12px",
                              }}
                            >
                              Subtotal
                            </Typography>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sx={{ diplay: "flex", justifyContent: "center" }}
                          >
                            <Typography
                              variant="subtitle1"
                              color="text.secondary"
                              component="div"
                              textAlign={"center"}
                              sx={{
                                fontSize: "12px",
                              }}
                            >
                              $200
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )
      )}
      <Grid item xs={12}>
        <Button
          fullWidth
          variant="contained"
          onClick={() => {
            navigate(`/carrito`);
          }}
        >
          <Typography variant="subtitle1">
            Total: ${getTotal()} - Ir al carrito
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
};
