import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ItemCarrito } from "../../carrito/componentes/ItemCarrito";

export const ItemPedido = (props) => {
  const { id, fecha, nombreEstado, total, detallePedido } = props;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Grid container spacing={1} display="flex" alignItems={"center"}>
              <Grid item xs={12} display="flex" justifyContent={"left"}>
                <Typography variant="body2" fontWeight={600}>
                  Num. pedido: {id}
                </Typography>
              </Grid>

              <Grid item xs={4} display="flex" justifyContent={"left"}>
                <Typography variant="body2">Fecha pedido: {fecha}</Typography>
              </Grid>
              <Grid item xs={4} display="flex" justifyContent={"center"}>
                <Typography variant="body2">
                  Estado:
                  <Chip
                    label={nombreEstado}
                    color="success"
                    variant="filled"
                    sx={{ ml: 1 }}
                  />
                </Typography>
              </Grid>
              <Grid item xs={4} display="flex" justifyContent={"center"}>
                <Typography variant="body2">Total: ${total}</Typography>
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              {detallePedido.map((item) => (
                <Grid item xs={12}>
                  <ItemCarrito {...item} editable={false} />
                </Grid>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
};
