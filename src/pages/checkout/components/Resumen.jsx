import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CarritoContext } from "../../../context/CarritoContext";
import useFetchAndLoad from "../../../hooks/useFetch";
import api from "../../../services";
import { ItemCarrito } from "../../carrito/componentes/ItemCarrito";

export const Resumen = () => {
  const { carrito } = useContext(CarritoContext);
  const { callEndpoint } = useFetchAndLoad();
  const navigate = useNavigate();

  const handleComprar = () => {
    const responseCreatePedido = ({ status, data }) => {
      if (status) {
        navigate(`/pedidos`);
      }
    };

    callEndpoint(
      api.pedido.createPedido({
        direccionEnvio: "catamarca 123",
        idUsuario: 1,
        detallePedido: carrito.map((item) => ({
          cantidad: item.cantidad,
          productoId: item.id,
        })),
      }),
      responseCreatePedido
    );
  };
  return (
    <Card>
      <CardContent>
        <Grid container display="flex" justifyContent={"center"}>
          <Grid item xs={12}>
            <Typography variant="h6">Resumen</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Productos a comprar
            </Typography>{" "}
          </Grid>
          <Grid item xs={7}>
            <Grid container spacing={2}>
              {carrito.map((item) => (
                <Grid item xs={12}>
                  <ItemCarrito {...item} />
                </Grid>
              ))}

              <Grid item xs={12}>
                <Typography
                  variant="h5"
                  color="text.secondary"
                  component="div"
                  textAlign={"center"}
                >
                  Total: $1100
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" fullWidth onClick={handleComprar}>
                  Finalizar compra
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
