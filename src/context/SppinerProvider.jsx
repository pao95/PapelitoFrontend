import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";
import { useState } from "react";
import { SppinerContext } from "./SppinerContext";

export const SppinerProvider = ({ children }) => {
  const [show, setShowSppiner] = useState(false);

  return (
    <SppinerContext.Provider
      value={{
        show,
        setShowSppiner,
      }}
    >
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={show}
        // onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {children}
    </SppinerContext.Provider>
  );
};
