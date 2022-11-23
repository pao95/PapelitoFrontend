const getAllUsuarios = () => {
  return {
    method: "GET",
    url: "usuarios",
  };
};

const getUsuario = (id) => {
  return {
    method: "GET",
    url: `usuarios/${id}`,
  };
};
const getUsuarioByEmail = (email) => {
  return {
    method: "GET",
    url: `usuarios/usuarioByEmail?email=${email}`,
  };
};

const updateUsuario = (idUsuario, persona) => {
  return {
    method: "PUT",
    url: `usuarios/${idUsuario}`,
    body: persona,
  };
};

const createUsuario = (user) => {
  return {
    method: "POST",
    url: `usuarios/save`,
    body: user,
  };
};

const usuario = {
  getAllUsuarios,
  getUsuario,
  updateUsuario,
  createUsuario,
  getUsuarioByEmail,
};
export default usuario;
