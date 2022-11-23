import { Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useFetchAndLoad from "../../../hooks/useFetch";
import api from "../../../services";
import { CardImage } from "../../../components/card/CardImage";
import ItemsCarousel from "react-items-carousel";

export const Ofertas = () => {
  const { callEndpoint } = useFetchAndLoad();

  const [ofertas, setOfertas] = useState([]);

  const getOfertas = () => {
    const responseOfertas = ({ status, data }) => {
      if (status) {
        setOfertas(data);
      }
    };
    callEndpoint(api.producto.getProductosOfertas(), responseOfertas);
  };
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  useEffect(() => {
    getOfertas();
  }, []);
  return (
    <Grid
      container
      spacing={2}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Grid item xs={12}>
        <Typography variant="h6" textAlign={"center"} fontWeight={600}>
          Ofertas
        </Typography>
      </Grid>
      <Grid item xs={11}>
        <ItemsCarousel
          infiniteLoop={true}
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={5}
          gutter={20}
          leftChevron={<Button>{"<"}</Button>}
          rightChevron={<Button>{">"}</Button>}
          outsideChevron
          chevronWidth={chevronWidth}
        >
          {ofertas.map(
            ({ id, nombreProducto, precioProducto, imageProducto }) => (
              <div>
                <CardImage
                  id={id}
                  nombre={nombreProducto}
                  precio={precioProducto}
                  image={imageProducto}
                />
              </div>
            )
          )}
        </ItemsCarousel>
      </Grid>
    </Grid>
  );
};
