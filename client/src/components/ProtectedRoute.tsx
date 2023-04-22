import { useContext } from "react";
import { Route, Navigate, RouteProps } from "react-router-dom";
import { UserContext } from "../global/UserProvider";

const ProtectedRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const { userLoaded } = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={() => {
        return userLoaded === true ? (
          (children as React.ReactNode)
        ) : (
          <Navigate to="/" />
        );
      }}
    />
  );
};

export default ProtectedRoute;