import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { FormDatosGenerales } from "./FormDatosGenerales";
import { FormPassword } from "./FormPassword";

export const Details = () => {
  return (
    <Card>
      <CardContent>
        <Grid container display="flex" justifyContent={"center"} spacing={2}>
          <Grid item xs={12}>
            <FormDatosGenerales />
          </Grid>
          {/* <Grid item xs={12}>
            <FormPassword />
          </Grid> */}
        </Grid>
      </CardContent>
    </Card>
  );
};
