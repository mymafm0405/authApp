import React, { useState } from "react";
import { Alert, Button, Card } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";

export default function Dashboard() {
  const { currentUser } = useAuth();
  const [error, setError] = useState();

  const handleLogout = () => {};
  return (
    <>
      <Card>
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <h2 className="mb-4 text-center">Profile</h2>
          <strong>Email: </strong>
          {currentUser.email}
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
