const getProductosDestacados = () => {
  return {
    method: "GET",
    url: "productos/destacados",
  };
};

const getProductosOfertas = () => {
  return {
    method: "GET",
    url: "productos/ofertas",
  };
};

const getProductosByCategoria = (idCategoria, page, size) => {
  return {
    method: "GET",
    url: `productos/categoria/paged?categoria=${idCategoria}&page=${page}&size=${size}`,
  };
};

const getDetailProducto = (idProducto) => {
  return {
    method: "GET",
    url: `productos/${idProducto}`,
  };
};

const producto = {
  getProductosDestacados,
  getProductosOfertas,
  getProductosByCategoria,
  getDetailProducto,
};
export default producto;
