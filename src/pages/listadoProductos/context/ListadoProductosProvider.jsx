import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useFetchAndLoad from "../../../hooks/useFetch";
import api from "../../../services";
import { ListadoProductosContext } from "./ListadoProductosContext";

export const ListadoProductosProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { callEndpoint } = useFetchAndLoad();
  const [page, setPage] = useState(1);

  const [checkedCategories, setCheckedCategories] = useState([]);
  const [totalSizeResults, setTotalSizeResults] = useState(0);

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

  const getProductosCategoria = (idCategoria, page = 1, size = 10) => {
    const responseProductosByCategoria = ({ status, data }) => {
      if (status) {
        setProductosSearched(data);
        setTotalSizeResults(data.totalPages);
      }
    };
    callEndpoint(
      api.producto.getProductosByCategoria(idCategoria, page, size),
      responseProductosByCategoria
    );
  };

  useEffect(() => {
    setPage(1);
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
        totalSizeResults,
        productosSearched,
        page,
        setPage,
      }}
    >
      {children}
    </ListadoProductosContext.Provider>
  );
};
