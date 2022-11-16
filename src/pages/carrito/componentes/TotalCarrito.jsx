import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
export const TotalCarrito = ({ getTotal }) => {
  const navigate = useNavigate();

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5" component="div">
              Resumen
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Total: ${getTotal()}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => {
                navigate(`/home`);
              }}
            >
              Continuar comprando
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => {
                navigate(`/checkout`);
              }}
            >
              Proceder a la compra
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
