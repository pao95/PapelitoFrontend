import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Grid } from "@mui/material";
import useFetchAndLoad from "../../hooks/useFetch";
import { useEffect } from "react";
import api from "../../services";
import { useNavigate } from "react-router-dom";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export const Categories = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [categorias, setCategorias] = React.useState([]);
  const navigate = useNavigate();

  const { callEndpoint } = useFetchAndLoad();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (idCategoria) => {
    setAnchorElNav(null);

    navigate(`/productos?categoria=${idCategoria}`);
  };

  const handleCloseUserMenu = (idCategoria) => {
    setAnchorElUser(null);
  };

  const getCategorias = () => {
    const responseCategorias = ({ status, data }) => {
      if (status) {
        setCategorias(data.sort(() => Math.random() - 0.5).slice(0, 6));
      }
    };
    callEndpoint(api.categoria.getAllCategorias(), responseCategorias);
  };

  useEffect(() => {
    getCategorias();
  }, []);

  return (
    <AppBar position="relative">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />

          <Grid container>
            {categorias.map(({ nombreCategoria, id }) => (
              <Grid
                item
                sm={2}
                justifyContent="center"
                display={"flex"}
                key={id}
              >
                <Box>
                  <Button
                    onClick={() => handleCloseNavMenu(id)}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    <Typography variant="subtitle2">
                      {nombreCategoria}
                    </Typography>
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
