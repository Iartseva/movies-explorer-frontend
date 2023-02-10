import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";

function ProtectedRoute ({ component: Component, ...props }) {
  const location = useLocation();
  const path = location.pathname;

  return (
    <Route>
      {() =>
        props.isLoggedIn ? <Component {...props} /> : <Redirect to={path} />
      }
    </Route>
  );
};

export default ProtectedRoute; 
