import { Button, Grid, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { CarritoContext } from "../../../context/CarritoContext";

export const CantidadAgregar = ({ showButtonAdd, ...rest }) => {
  const [cantidad, setCantidad] = useState(0);
  const dispatch = useDispatch();

  const { updateCarrito, carrito } = useContext(CarritoContext);
  const handleRestar = () => {
    setCantidad((prev) => {
      updateCarrito({ ...rest, cantidad: prev === 0 ? 0 : prev - 1 });
      return prev === 0 ? 0 : prev - 1;
    });
  };

  const handleSumar = () => {
    setCantidad((prev) => {
      updateCarrito({ ...rest, cantidad: prev + 1 });
      return prev + 1;
    });
  };

  useEffect(() => {
    const producto = carrito.find((item) => item.id === rest.id);
    if (producto) {
      setCantidad(producto.cantidad);
    }
  }, [rest]);

  return (
    <Grid container spacing={1}>
      <Grid
        item
        xs={showButtonAdd ? 2 : 3}
        display="flex"
        justifyContent={"center"}
      >
        <Button
          onClick={handleRestar}
          variant={"outlined"}
          sx={{ minWidth: "25px", maxHeight: "40px" }}
        >
          -
        </Button>
      </Grid>
      <Grid
        item
        xs={showButtonAdd ? 4 : 6}
        display="flex"
        justifyContent={"center"}
      >
        <TextField
          id="outlined-number"
          type="number"
          value={cantidad}
          size="small"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid
        item
        xs={showButtonAdd ? 2 : 3}
        display="flex"
        justifyContent={"center"}
      >
        <Button
          onClick={handleSumar}
          variant={"outlined"}
          sx={{ minWidth: "25px", maxHeight: "40px" }}
        >
          +
        </Button>
      </Grid>
    </Grid>
  );
};
