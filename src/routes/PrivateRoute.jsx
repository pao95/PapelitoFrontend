import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const status = true;
  return status ? children : <Navigate to="home" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.any,
};

export default PrivateRoute;
