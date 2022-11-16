import { IconButton, Menu, MenuItem } from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import { useState } from "react";
export const OrdenListado = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = anchorEl;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton aria-label="delete" onClick={handleClick}>
        <SortIcon />
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Menor precio</MenuItem>
        <MenuItem onClick={handleClose}>Mayor precio</MenuItem>
      </Menu>
    </>
  );
};
