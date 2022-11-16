import { useEffect, useState } from "react";

import { CarritoContext } from "./CarritoContext";

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const updateCarrito = (producto) => {
    const exist = carrito.find((item) => item.id === producto.id);
    if (exist) {
      const carritoActualizado = carrito
        .map((item) => {
          if (item.id === producto.id) {
            return { ...item, cantidad: producto.cantidad };
          } else {
            return { ...item };
          }
        })
        .filter((item) => item.cantidad !== 0);
      setCarrito(carritoActualizado);
    } else {
      setCarrito([...carrito, producto]);
    }
  };

  const getTotal = () => {
    let total = 0;
    carrito.forEach((element) => {
      total = total + element.precioProducto * element.cantidad;
    });
    return total;
  };

  return (
    <CarritoContext.Provider value={{ carrito, updateCarrito, getTotal }}>
      {children}
    </CarritoContext.Provider>
  );
};
