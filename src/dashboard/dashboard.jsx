import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="container d-flex justify-content-center">
      <p>dashboard</p>
      <Button
        onClick={() => {
          navigate("/register");
        }}
      >
        Register
      </Button>
      <Button
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </Button>
    </div>
  );
};

export default Dashboard;
