import {
  Autocomplete,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { SppinerContext } from "../../../context/SppinerContext";
import useFetchAndLoad from "../../../hooks/useFetch";
import api from "../../../services";

export const FormDatosGenerales = () => {
  const { callEndpoint } = useFetchAndLoad();
  const { setShowSppiner } = useContext(SppinerContext);

  const [usuario, setUsuario] = useState({});
  const [provincias, setProvincias] = useState([]);
  const [ciudades, setCiudaddes] = useState([]);

  const {
    apellido,
    celular,
    email,
    id,
    nombreUsuario,
    fk_domicilio,
    password,
    roles,
  } = usuario;

  const [formDataGeneralDG, setFormDataGeneral] = useState({
    nombre: "",
    apellido: "",
    password: "",
    passwordRepetido: "",
  });

  const [formDataDomicilio, setFormDataDomicilio] = useState({
    id: "",
    nombreCalle: "",
    numCalle: "",
    numDpto: "",
    piso: "",
  });

  const [formDataCidudad, setFormDataCidudad] = useState({
    id: "",
    nombreCiudad: "",
    codPostal: "",
  });

  const [formDataProvincia, setFormDataProvincia] = useState({
    id: "",
    nombreProvincia: "",
    codProvincia: "",
  });

  useEffect(() => {
    setFormDataGeneral({
      nombre: nombreUsuario ? nombreUsuario : "",
      apellido: apellido ? apellido : "",
      password: password ? password : "",
      passwordRepetido: "",
    });

    if (fk_domicilio) {
      setFormDataDomicilio({
        id: fk_domicilio.id,
        nombreCalle: fk_domicilio.nombreCalle,
        numCalle: fk_domicilio.numCalle,
        numDpto: fk_domicilio.numDpto,
        piso: fk_domicilio.piso,
      });

      setFormDataCidudad({
        id: fk_domicilio.fk_ciudad.id,
        nombreCiudad: fk_domicilio.fk_ciudad.nombreCiudad,
        codPostal: fk_domicilio.fk_ciudad.codPostal,
      });

      setFormDataProvincia({
        id: fk_domicilio.fk_ciudad.fk_provincia.id,
        nombreProvincia: fk_domicilio.fk_ciudad.fk_provincia.nombreProvincia,
        codProvincia: fk_domicilio.fk_ciudad.fk_provincia.codProvincia,
      });
    }
  }, [usuario]);

  const handleChangeFormDataGeneral = (e) => {
    setFormDataGeneral({
      ...formDataGeneralDG,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeFormDomicilio = (e) => {
    setFormDataDomicilio({
      ...formDataDomicilio,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeFormCiudad = (e) => {
    e?.target?.name !== "codPostal"
      ? setFormDataCidudad({
          ...e,
        })
      : setFormDataCidudad({
          ...formDataCidudad,
          [e.target.name]: e.target.value,
        });
  };

  console.log(formDataCidudad);

  const handleChangeFormProvincia = (e) => {
    setFormDataCidudad({
      id: "",
      nombreCiudad: "",
      codPostal: "",
    });
    setFormDataProvincia({
      ...e,
    });

    getCiudades(e.id);
  };

  const getDatosUsuario = () => {
    setShowSppiner(true);

    const responseUsuario = ({ status, data }) => {
      if (status) {
        setShowSppiner(false);

        setUsuario(data);
      }
    };

    const idUser = localStorage.getItem("idUser");

    callEndpoint(api.usuario.getUsuario(idUser), responseUsuario);
  };

  useEffect(() => {
    getDatosUsuario();
  }, []);

  const updateDomicilio = () => {
    setShowSppiner(true);
    const responseUpdateDom = ({ status, data }) => {
      if (status) {
        // setUsuario(data);
        setShowSppiner(false);

        toast.success("Éxito al actualizar el domicilio !");
      }
    };
    callEndpoint(
      api.domicilio.updateDomicilio(formDataDomicilio.id, {
        ...formDataDomicilio,
        fk_ciudad: {
          ...formDataCidudad,
          fk_provincia: {
            ...formDataProvincia,
          },
        },
      }),
      responseUpdateDom
    );
  };

  const createDomicilio = () => {
    setShowSppiner(true);

    const responseCreateDom = ({ status, data }) => {
      if (status) {
        updateUser(true);
        setShowSppiner(false);

        toast.success("Éxito al actualizar el domicilio !");
      }
    };
    callEndpoint(
      api.domicilio.crearDomicilio({
        ...formDataDomicilio,
        fk_ciudad: {
          ...formDataCidudad,
          fk_provincia: {
            ...formDataProvincia,
          },
        },
      }),
      responseCreateDom
    );
  };

  const updateUser = (dom = false) => {
    setShowSppiner(true);

    const responseUpdateUser = ({ status, data }) => {
      if (status) {
        // setUsuario(data);
        setShowSppiner(false);
        toast.success("Éxito al actualizar el usuario !");
      }
      setShowSppiner(false);
    };
    const idUser = localStorage.getItem("idUser");

    callEndpoint(
      api.usuario.createUsuario({
        id: idUser,
        nombreUsuario: formDataGeneralDG.nombre,
        apellido: formDataGeneralDG.apellido,
        email: email,
        password: null,
        celular: celular,
        roles: [{ id: 38, name: "ROL_ADMIN" }],
        fk_domicilio:
          fk_domicilio || formDataDomicilio.nombreCalle !== ""
            ? {
                ...formDataDomicilio,
                fk_ciudad: {
                  ...formDataCidudad,
                  fk_provincia: {
                    ...formDataProvincia,
                  },
                },
              }
            : null,
      }),
      responseUpdateUser
    );
  };

  const getProvincias = () => {
    setShowSppiner(true);

    const responseProvincias = ({ status, data }) => {
      if (status) {
        setShowSppiner(false);

        setProvincias(data);
      }
    };
    callEndpoint(api.provincia.getProvincias(), responseProvincias);
  };

  const getCiudades = (e) => {
    setShowSppiner(true);

    const responseCreateDom = ({ status, data }) => {
      if (status) {
        setShowSppiner(false);
        setCiudaddes(data);
      }
    };
    callEndpoint(api.ciudad.getCiudades(e), responseCreateDom);
  };

  useEffect(() => {
    getProvincias();
  }, []);

  return (
    <Grid container display="flex" justifyContent={"center"} spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">Datos Generales</Typography>
      </Grid>

      <Grid item xs={12}>
        <Box component="form" noValidate autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                required
                id="outlined-required"
                label="Nombre"
                type="text"
                name="nombre"
                onChange={handleChangeFormDataGeneral}
                value={formDataGeneralDG.nombre}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                id="outlined-number"
                label="Apellido"
                name="apellido"
                onChange={handleChangeFormDataGeneral}
                value={formDataGeneralDG.apellido}
                type="text"
                show
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            {/* <Grid item xs={6}>
              <TextField
                required
                id="outlined-required"
                name="password"
                label="Contraseña"
                value={formDataGeneralDG.password}
                onChange={handleChangeFormDataGeneral}
                type="password"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                id="outlined-required"
                label="Repetir password"
                onChange={handleChangeFormDataGeneral}
                name="passwordRepetido"
                value={formDataGeneralDG.passwordRepetido}
                type="password"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid> */}
            <Grid item xs={12} display="flex" justifyContent={"right"}>
              <Button variant="contained" onClick={updateUser}>
                Guardar mis datos
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h7" color="text.secondary" component="div">
                Dirección
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <TextField
                required
                id="outlined-number"
                label="Calle"
                type="text"
                name="nombreCalle"
                onChange={handleChangeFormDomicilio}
                value={formDataDomicilio.nombreCalle}
                show
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                required
                id="outlined-number"
                label="Altura"
                onChange={handleChangeFormDomicilio}
                type="number"
                name="numCalle"
                value={formDataDomicilio.numCalle}
                show
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                required
                id="outlined-number"
                label="Num. dpto."
                type="number"
                show
                onChange={handleChangeFormDomicilio}
                name="numDpto"
                value={formDataDomicilio.numDpto}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                required
                id="outlined-number"
                label="Piso"
                name="piso"
                value={formDataDomicilio.piso}
                onChange={handleChangeFormDomicilio}
                type="number"
                show
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={4}></Grid>

            <Grid item xs={4.5}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={provincias}
                value={formDataProvincia}
                onChange={(a, e) => handleChangeFormProvincia(e)}
                getOptionLabel={(option) => option.nombreProvincia ?? option}
                itemID="id"
                renderInput={(params) => (
                  <TextField {...params} label="Provincia" name="provincia" />
                )}
              />
            </Grid>
            <Grid item xs={4.5}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                value={formDataCidudad}
                options={ciudades}
                onChange={(a, e) => handleChangeFormCiudad(e)}
                getOptionLabel={(option) => option.nombreCiudad ?? option}
                renderInput={(params) => (
                  <TextField {...params} label="Ciudad" name="ciudad" />
                )}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                required
                id="outlined-number"
                label="Cod. Postal"
                type="number"
                onChange={handleChangeFormCiudad}
                name="codPostal"
                value={formDataCidudad.codPostal}
                show
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>

            <Grid item xs={12} display="flex" justifyContent={"right"}>
              <Button
                variant="contained"
                onClick={() => {
                  fk_domicilio ? updateDomicilio() : createDomicilio();
                }}
              >
                Guardar dirección
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};
