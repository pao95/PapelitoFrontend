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

const getProductosByCategoria = (idCategoria) => {
  return {
    method: "GET",
    url: `productos/categoria/paged?categoria=${idCategoria}`,
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
