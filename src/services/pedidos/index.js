const createPedido = (pedido) => {
  return {
    method: "POST",
    url: "pedidos/create-pedido",
    body: pedido,
  };
};

const getPedidos = () => {
  return {
    method: "GET",
    url: "pedidos/detalle",
  };
};

const pedido = {
  createPedido,
  getPedidos,
};
export default pedido;
