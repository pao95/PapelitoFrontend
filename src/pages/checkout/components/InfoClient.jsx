import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFetchAndLoad from "../../../hooks/useFetch";
import api from "../../../services";

export const InfoClient = () => {
  const { callEndpoint } = useFetchAndLoad();
  const [usuario, setUsuario] = useState({});
  const {
    apellido,
    celular,
    email,
    id,
    nombreUsuario,
    fk_domicilio,
    contraseña,
  } = usuario;
  const navigate = useNavigate();

  const getDatosUsuario = () => {
    const responseUsuario = ({ status, data }) => {
      if (status) {
        setUsuario(data);
      }
    };
    const idUser = localStorage.getItem("idUser");

    callEndpoint(api.usuario.getUsuario(idUser), responseUsuario);
  };

  useEffect(() => {
    getDatosUsuario();
  }, []);

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
                      Nombre cliente: {nombreUsuario} {apellido}
                    </Typography>{" "}
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      Calle: {fk_domicilio?.nombreCalle}
                    </Typography>{" "}
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      Altura:{fk_domicilio?.numCalle}
                    </Typography>{" "}
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      Ciudad:{fk_domicilio?.fk_ciudad.nombreCiudad}
                    </Typography>{" "}
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      Provincia:
                      {fk_domicilio?.fk_ciudad.fk_provincia.nombreProvincia}
                    </Typography>{" "}
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      Cod. Postal:{fk_domicilio?.fk_ciudad.codPostal}
                    </Typography>{" "}
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="outlined"
                      fullWidth
                      onClick={() => {
                        navigate(`/user`);
                      }}
                    >
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
