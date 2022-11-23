const updateDomicilio = (idDomicilio, domicilio) => {
  return {
    method: "PUT",
    url: `domicilios/${idDomicilio}`,
    body: domicilio,
  };
};

const crearDomicilio = (domicilio) => {
  return {
    method: "POST",
    url: "domicilios",
    body: domicilio,
  };
};

const domicilio = {
  updateDomicilio,
  crearDomicilio,
};
export default domicilio;
