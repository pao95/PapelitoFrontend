import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export const CardImage = ({ id, nombre, precio, image }) => {
  return (
    <Link to={`/productos/${id}`}>
      <Card sx={{ height: "300px", m: 1 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Grid container>
              <Grid
                item
                xs={12}
                sx={{
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  component="div"
                  textAlign={"center"}
                  sx={{
                    display: "-webkit-box",
                    overflow: "hidden",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 2,
                    textAlign: "center",
                  }}
                >
                  {nombre}
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  height: "100px",
                }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                  textAlign={"center"}
                >
                  ${precio}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};
