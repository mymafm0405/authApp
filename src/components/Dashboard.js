import React, { useState } from "react";
import { Alert, Button, Card } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Dashboard() {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState();
  const history = useHistory();

  const handleLogout = async () => {
    setError("");
    try {
      await logout();
      history.replace("/login");
    } catch {
      setError("Could not logout!");
    }
  };
  return (
    <>
      <Card>
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <h2 className="mb-4 text-center">Profile</h2>
          <strong>Email: </strong>
          {currentUser && currentUser.email}
          <div className="mt-2">
            <Link className="btn btn-primary w-100" to="/update">Update Profile</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-3">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  );
}
