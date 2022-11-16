import { Chip, Grid } from "@mui/material";
import { useContext } from "react";
import { ListadoProductosContext } from "../context/ListadoProductosContext";

export const FiltrosAplicados = () => {
  const { checkedCategories } = useContext(ListadoProductosContext);
  return (
    <Grid container>
      <Grid item xs={12}>
        {checkedCategories.map((item) => (
          <Chip
            color="primary"
            label={item}
            variant="outlined"
            sx={{ mr: 1 }}
            onDelete={() => {}}
          />
        ))}
      </Grid>
    </Grid>
  );
};
