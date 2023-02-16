import React from "react";
import { Route, Redirect, /* useLocation */ } from "react-router-dom";

function ProtectedRoute ({ component: Component, ...props }) {
// const { pathname } = useLocation();

  return (
    <Route>
      {() =>
        props.isLoggedIn ? <Component {...props} /> : <Redirect to='/' />
      }
    </Route>
  );
};

export default ProtectedRoute; 
