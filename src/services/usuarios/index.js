const getAllUsuarios = () => {
  return {
    method: "GET",
    url: "usuarios",
  };
};

const usuario = {
  getAllUsuarios,
};
export default usuario;
