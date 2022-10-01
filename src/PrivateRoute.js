import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

export default function PrivateRoute(props) {
  const { currentUser } = useAuth();
  return (
    <Route>
      {currentUser ? props.children : <Redirect to="/login" />}
    </Route>
  );
}
