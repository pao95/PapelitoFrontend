import axios from "axios";
import { useEffect } from "react";

// import { useAuthStore } from "./useAuthStore";

export const axiosPrivate = axios.create({
  // validateStatus: () => true,
});

const useAxiosPrivate = () => {
  // const { startLogout } = useAuthStore();

  useEffect(() => {
    const controller = new AbortController();
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers.Authorization) {
          const token = localStorage.getItem("access_token") || "";
          //   config.signal = controller.signal;
          //   config.baseURL = import.meta.env.VITE_API;

          config.headers.Authorization = `Bearer ${token}`;
        }

        config.baseURL = import.meta.env.VITE_API;

        return config;
      },
      (error) => Promise.reject(error)
    );
    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        switch (error?.response?.status) {
          case 401:
            // startLogout();
            break;
          case 403:
            // Todo: redireccionar a pagina de: "no tiene permisos para acceder a este recurso"
            // startLogout();
            break;
          default:
            break;
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, []);

  return axiosPrivate;
};

export default useAxiosPrivate;
