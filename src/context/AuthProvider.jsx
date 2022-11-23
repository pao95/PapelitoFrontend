import axios from "axios";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import useFetchAndLoad from "../hooks/useFetch";
import api from "../services";
import { AuthContext } from "./AuthContext";
import { SppinerContext } from "./SppinerContext";

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    authenticated: false,
  });
  const { callEndpoint } = useFetchAndLoad();

  const [userAuth, setUserAuth] = useState({
    id: "",
  });

  const { setShowSppiner } = useContext(SppinerContext);

  const login = async (data) => {
    setShowSppiner(true);

    const responseCrearUsuario = ({ status, data }) => {
      setShowSppiner(false);
    };

    const headers = {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    };
    const getQueryString = (data = {}) => {
      return Object.entries(data)
        .map(
          ([key, value]) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
        )
        .join("&");
    };

    try {
      const response = await axios.post(
        "https://papelito-production.up.railway.app/api/v1/login",
        getQueryString(data),
        {
          headers: headers,
        }
      );

      if (response.status === 200) {
        setShowSppiner(false);

        console.log(response.data.user);
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("refresh_token", response.data.refresh_token);
        localStorage.setItem("user", response.data.user);

        const responseCrearUsuario = ({ status, data }) => {
          setShowSppiner(false);

          if (status) {
            localStorage.setItem("idUser", data.id);
          }
        };
        setShowSppiner(true);

        callEndpoint(
          api.usuario.getUsuarioByEmail(response.data.user),
          responseCrearUsuario
        );

        setAuth({ authenticated: true });
        setUserAuth({
          id: data.id,
        });
        toast.success("Éxito al realizar el login!");
      }
    } catch {
      toast.error("Ha ocurrido un error al loguearse!");

      setShowSppiner(false);
    }
  };
  const logout = () => {
    setShowSppiner(true);

    setTimeout(() => {
      setShowSppiner(false);

      toast.success("Éxito al realizar el logout!");

      setAuth({ authenticated: false });
    }, 1000);
  };
  console.log(auth);

  useEffect(() => {
    const idUser = localStorage.getItem("idUser");
    const user = localStorage.getItem("user");

    if (idUser && user) {
      setShowSppiner(true);

      const responseCrearUsuario = ({ status, data }) => {
        if (status) {
          localStorage.setItem("idUser", data.id);
          setAuth({ authenticated: true });
          setUserAuth({
            id: data.id,
          });
        } else {
          setAuth({ authenticated: false });
          setUserAuth({
            id: "",
          });
        }
        setShowSppiner(false);
      };
      callEndpoint(api.usuario.getUsuarioByEmail(user), responseCrearUsuario);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authenticated: auth.authenticated,
        idUserAuth: userAuth.id,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
