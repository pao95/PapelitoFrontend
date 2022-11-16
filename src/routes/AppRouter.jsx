import { Navigate, Route, Routes } from "react-router-dom";
import { Carrito } from "../pages/carrito/Carrito";
import { Checkout } from "../pages/checkout/Checkout";
import { DetalleProducto } from "../pages/detalleProducto/DetalleProducto";
import { Home } from "../pages/home/Home";
import { ListadoProductos } from "../pages/listadoProductos/ListadoProductos";
import { Login } from "../pages/login/Login";
import { Pedidos } from "../pages/pedidos/Pedidos";
import { Signin } from "../pages/signin/Signin";
import { UserDetail } from "../pages/user/UserDetail";
import PrivateRoute from "./PrivateRoute";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="registro" element={<Signin />} />
      <Route path="home" element={<Home />} />
      <Route path="productos" element={<ListadoProductos />} />
      <Route path="productos/:idProducto" element={<DetalleProducto />} />
      <Route path="carrito" element={<Carrito />} />
      <Route path="login" element={<Login />} />
      <Route
        path="/*"
        element={
          <PrivateRoute>
            <Routes>
              <Route path="user" element={<UserDetail />} />
              <Route path="pedidos" element={<Pedidos />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="*" element={<Navigate to="home" />} />
            </Routes>
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
