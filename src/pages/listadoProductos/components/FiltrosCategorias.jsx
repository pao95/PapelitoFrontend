import {
  Button,
  Checkbox,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  OutlinedInput,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useContext, useEffect, useState } from "react";
import { ListadoProductosContext } from "../context/ListadoProductosContext";
import { useSearchParams } from "react-router-dom";

export const FiltrosCategorias = () => {
  const {
    categorias,
    checkedCategories,
    setCheckedCategories,
    getProductosCategoria,
  } = useContext(ListadoProductosContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const [inputSearch, setInputSearch] = useState("");

  const handleToggle = (value) => () => {
    const currentIndex = checkedCategories.indexOf(value);
    // const newChecked = [...checkedCategories];
    const newChecked = [];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setCheckedCategories(newChecked);
  };

  const handleSearchOptions = (e) => {
    setInputSearch(e.target.value);
  };

  const getSearchOptions = () => {
    const optionesFiterByInput = categorias.filter((item) => {
      return item.nombreCategoria
        .toLowerCase()
        .includes(inputSearch.toLowerCase());
    });
    return optionesFiterByInput;
  };

  const handleAplicar = () => {
    const idCategoria = categorias.filter(
      (cat) => cat.nombreCategoria === checkedCategories[0]
    )[0].id;

    setSearchParams({ categoria: idCategoria });

    getProductosCategoria(idCategoria);
  };

  useEffect(() => {
    const idCategoria = searchParams.get("categoria");

    const categoria = categorias.filter(
      (cat) => parseInt(cat.id) === parseInt(idCategoria)
    )[0]?.nombreCategoria;
    setCheckedCategories([categoria]);
  }, [categorias, searchParams]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-password" sx={{ mt: "-5px" }}>
            Buscar
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={"text"}
            size="small"
            fullWidth
            value={inputSearch}
            onChange={handleSearchOptions}
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" edge="end">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <List sx={{ maxHeight: "400px", overflow: "auto", mt: 2, mb: 2 }}>
          {getSearchOptions().map(({ nombreCategoria, id }) => (
            <ListItem key={id} disablePadding>
              <ListItemButton
                role={undefined}
                onClick={handleToggle(nombreCategoria)}
                dense
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={
                      checkedCategories.filter(
                        (item) => item === nombreCategoria
                      ).length > 0
                    }
                    tabIndex={-1}
                    color="secondary"
                    disableRipple
                  />
                </ListItemIcon>
                <ListItemText id={"labelId"} primary={nombreCategoria} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Grid>

      <Grid item xs={12}>
        <Button
          variant="contained"
          fullWidth
          color="secondary"
          onClick={handleAplicar}
          disabled={categorias.length === 0 || checkedCategories.length === 0}
        >
          Aplicar
        </Button>
      </Grid>
    </Grid>
  );
};
