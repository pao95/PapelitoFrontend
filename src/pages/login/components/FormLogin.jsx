import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

export const FormLogin = () => {
  const { login, authenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    authenticated && navigate(`/home`);
  }, [authenticated]);

  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    console.log(dataForm);
    login(dataForm);
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
                <Grid item xs={12}>
                  <TextField
                    required
                    id="outlined-required"
                    label="Correo"
                    name="email"
                    onChange={handleChange}
                    type="email"
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
                    name="password"
                    onChange={handleChange}
                    type="password"
                    show
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" fullWidth onClick={handleLogin}>
                    Ingresar
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
