const getAllCategorias = () => {
  return {
    method: "GET",
    url: "categorias",
  };
};

const categoria = {
  getAllCategorias,
};
export default categoria;
