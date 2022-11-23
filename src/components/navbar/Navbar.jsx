import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

import { Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ResumenCarrito } from "../../pages/carrito/componentes/ResumenCarrito";
import { CarritoContext } from "../../context/CarritoContext";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function NavbarPapepilito() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElCarrito, setAnchorElCarrito] = React.useState(null);
  const [cantidadItems, setCantidadItems] = React.useState(0);

  const { login, logout, authenticated } = useContext(AuthContext);

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [carritoAnchor, setCarritoAnchor] = React.useState(null);
  const isMenuOpen = anchorEl;
  const isMenuCarritoOpen = anchorElCarrito;
  const { carrito } = React.useContext(CarritoContext);
  const navigate = useNavigate();

  const isMobileMenuOpen = mobileMoreAnchorEl;

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleCarritoAnchor = (event) => {
    if (carrito.length === 0) return;
    setAnchorElCarrito(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    // navigate(`/user`);
  };

  const handleUSer = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    navigate(`/user`);
  };
  const handleCarritoMenuClose = () => {
    setAnchorElCarrito(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleSalir = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    logout();
  };
  const handleLogin = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    navigate(`/login`);
  };

  const handleRegistro = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    navigate(`/registro`);
  };

  const menuId = "primary-search-account-menu";
  const menuCarritoId = "primary-carrito-menu";

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {authenticated && <MenuItem onClick={handleUSer}>Perfil</MenuItem>}

      {authenticated && <MenuItem onClick={handleSalir}>Salir</MenuItem>}
      {!authenticated && <MenuItem onClick={handleLogin}>Login</MenuItem>}
      {!authenticated && (
        <MenuItem onClick={handleRegistro}>Registrarse</MenuItem>
      )}
    </Menu>
  );

  React.useEffect(() => {
    let cantidad = 0;
    carrito.forEach((element) => {
      cantidad = cantidad + element.cantidad;
    });

    setCantidadItems(cantidad);
  }, [carrito]);

  const renderCarrito = (
    <Menu
      anchorEl={anchorElCarrito}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuCarritoId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuCarritoOpen}
      onClose={handleCarritoMenuClose}
    >
      <ResumenCarrito />
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={carritoAnchor}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Carrito</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Cuenta</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Grid container>
            <Grid
              item
              sm={4}
              justifyContent="left"
              display={"flex"}
              alignContent="center"
              alignItems={"center"}
            >
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Grid>
            <Grid
              item
              sm={4}
              justifyContent="center"
              display={"flex"}
              alignContent="center"
              alignItems={"center"}
            >
              <AutoStoriesIcon sx={{ fontSize: "25px", mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "inline" }, fontWeight: 700 }}
              >
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to={"home"}
                >
                  Papelito
                </Link>
              </Typography>
            </Grid>
            <Grid
              item
              sm={4}
              justifyContent="right"
              display={"flex"}
              alignContent="center"
              alignItems={"center"}
            >
              <div>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                  <IconButton
                    size="large"
                    aria-label="show 4 new mails"
                    color="inherit"
                    onClick={handleCarritoAnchor}
                    aria-controls={menuCarritoId}
                  >
                    <Badge badgeContent={cantidadItems} color="error">
                      <ShoppingCartIcon />
                    </Badge>
                  </IconButton>

                  <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                </Box>
                <Box sx={{ display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="inherit"
                  >
                    <MoreIcon />
                  </IconButton>
                </Box>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      {renderCarrito}
    </Box>
  );
}
