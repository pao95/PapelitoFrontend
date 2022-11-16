import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useFetchAndLoad from "../../../hooks/useFetch";
import api from "../../../services";
import { ListadoProductosContext } from "./ListadoProductosContext";

export const ListadoProductosProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { callEndpoint } = useFetchAndLoad();

  const [checkedCategories, setCheckedCategories] = useState([]);

  const [categorias, setCategorias] = useState([]);

  const [productosSearched, setProductosSearched] = useState([]);

  const getCategorias = () => {
    const responseCategorias = ({ status, data }) => {
      if (status) {
        setCategorias(data);
      }
    };
    callEndpoint(api.categoria.getAllCategorias(), responseCategorias);
  };

  const getProductosCategoria = (idCategoria) => {
    const responseProductosByCategoria = ({ status, data }) => {
      if (status) {
        setProductosSearched(data);
      }
    };
    callEndpoint(
      api.producto.getProductosByCategoria(idCategoria),
      responseProductosByCategoria
    );
  };

  useEffect(() => {
    getCategorias();
    const idCategoria = searchParams.get("categoria");
    getProductosCategoria(idCategoria);
  }, [searchParams]);

  return (
    <ListadoProductosContext.Provider
      value={{
        categorias,
        checkedCategories,
        setCheckedCategories,
        getProductosCategoria,
        productosSearched,
      }}
    >
      {children}
    </ListadoProductosContext.Provider>
  );
};
