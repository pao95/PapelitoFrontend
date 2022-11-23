import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CarritoContext } from "../../../context/CarritoContext";
import { SppinerContext } from "../../../context/SppinerContext";
import useFetchAndLoad from "../../../hooks/useFetch";
import api from "../../../services";
import { ItemCarrito } from "../../carrito/componentes/ItemCarrito";

export const Resumen = () => {
  const { carrito, getTotal, setCarrito } = useContext(CarritoContext);
  const { setShowSppiner } = useContext(SppinerContext);

  const { callEndpoint } = useFetchAndLoad();
  const navigate = useNavigate();

  const handleComprar = () => {
    const responseCreatePedido = ({ status, data }) => {
      if (status) {
        setShowSppiner(false);
        setCarrito([]);
        toast.success("Éxito realizar el pedido!");
        navigate(`/pedidos`);
      }
    };
    setShowSppiner(true);
    const idUser = localStorage.getItem("idUser");
    callEndpoint(
      api.pedido.createPedido({
        direccionEnvio: "catamarca 123",
        idUsuario: idUser,
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
                  Total: ${getTotal()}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={handleComprar}
                  disabled={carrito.length === 0}
                >
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
