import { Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetchAndLoad from "../../hooks/useFetch";
import api from "../../services";
import { ItemPedido } from "./components/ItemPedido";

export const Pedidos = () => {
  const { callEndpoint } = useFetchAndLoad();
  const navigate = useNavigate();

  const [pedidos, setPedidos] = useState([]);

  const obtenerPedidos = () => {
    const responseObtenerPedidos = ({ status, data }) => {
      if (status) {
        const idUser = localStorage.getItem("idUser");
        const filterPedidos = data.filter(
          (item) => item.idUsuario.toString() === idUser.toString()
        );

        setPedidos(filterPedidos);
      }
    };

    callEndpoint(api.pedido.getPedidos(), responseObtenerPedidos);
  };

  useEffect(() => {
    obtenerPedidos();
  }, []);

  return (
    <Container maxWidth="xl">
      <Grid container sx={{ pt: 5 }} spacing={5}>
        <Grid item xs={12}>
          <Typography component="div" variant="h5">
            Pedidos
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Grid container display="flex" justifyContent={"center"} spacing={2}>
            {pedidos.map((item) => (
              <Grid item xs={8}>
                <ItemPedido {...item} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
