import { Grid, Pagination } from "@mui/material";

export const PaginationResultados = () => {
  return (
    <Grid container sx={{ m: 5 }} display="flex" justifyContent={"center"}>
      <Grid item>
        <Pagination count={10} color="secondary" />
      </Grid>
    </Grid>
  );
};
