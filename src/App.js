import { Container } from "react-bootstrap";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgetPassword from "./components/ForgetPassword";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";
import Update from "./components/Update";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <Switch>
              <PrivateRoute path="/" exact>
                <Dashboard />
              </PrivateRoute>
              <PrivateRoute path="/update" exact>
                <Update />
              </PrivateRoute>
              <Route path="/signup">
                <Signup />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/forget-password">
                <ForgetPassword />
              </Route>
            </Switch>
          </div>
        </Container>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
