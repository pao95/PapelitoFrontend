import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../context/AuthContext";
import { SppinerContext } from "../../../context/SppinerContext";
import useFetchAndLoad from "../../../hooks/useFetch";
import api from "../../../services";

export const FormSignin = () => {
  const { callEndpoint } = useFetchAndLoad();
  const { setShowSppiner } = useContext(SppinerContext);
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    nombreUsuario: "",
    apellido: "",
    email: "",
    password: "",
    password2: "",
    roles: ["ROL_USER"],
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSend = () => {
    setShowSppiner(true);
    const responseCrearUsuario = ({ status, data }) => {
      if (status) {
        setShowSppiner(false);
        navigate(`/login`);
      } else {
        setShowSppiner(false);
      }
    };

    if (!checkCampletitud() && !checkPassword()) {
      callEndpoint(
        api.usuario.createUsuario({
          nombreUsuario: formData.nombreUsuario,
          apellido: formData.apellido,
          email: formData.email,
          password: formData.password,
          roles: [{ id: 38, name: "ROL_ADMIN" }],
        }),
        responseCrearUsuario
      );
    }
  };

  const checkCampletitud = () => {
    if (
      !formData.nombreUsuario ||
      !formData.apellido ||
      !formData.email ||
      !formData.password ||
      !formData.password2
    ) {
      setShowSppiner(false);
      toast.error("Debe completar todos los campos.");
      return true;
    }
  };

  const checkPassword = () => {
    if (formData.password !== formData.password2) {
      setShowSppiner(false);
      toast.error("Las contraseñas no son iguales.");
      return true;
    }
    if (formData.password.length < 10) {
      setShowSppiner(false);
      toast.error("La contraseña debe tener minimo 10 caracteres.");
      return true;
    }
  };

  return (
    <Card>
      <CardContent>
        <Grid container display="flex" justifyContent={"center"} spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6">Complete los datos</Typography>
          </Grid>

          <Grid item xs={12}>
            <Box component="form" noValidate autoComplete="off">
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    required
                    id="outlined-required"
                    label="Nombre"
                    name="nombreUsuario"
                    type={"text"}
                    onChange={handleChange}
                    value={formData.nombreUsuario}
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    name="apellido"
                    id="outlined-required"
                    label="Apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    type={"text"}
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="outlined-number"
                    label="Correo"
                    onChange={handleChange}
                    value={formData.email}
                    name="email"
                    type="email"
                    show
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="outlined-number"
                    label="Contraseña"
                    type="password"
                    value={formData.password}
                    name="password"
                    onChange={handleChange}
                    show
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="outlined-number"
                    onChange={handleChange}
                    label="Confirmar contraseña"
                    name="password2"
                    value={formData.password2}
                    type="password"
                    show
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" fullWidth onClick={handleSend}>
                    Registrarse
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
