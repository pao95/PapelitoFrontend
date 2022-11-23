const getCiudades = (id) => {
  return {
    method: "GET",
    url: `ciudades/byProvincia/${id}`,
  };
};

const ciudad = {
  getCiudades,
};
export default ciudad;
