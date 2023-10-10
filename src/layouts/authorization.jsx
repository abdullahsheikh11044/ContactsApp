import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useCurrentQuery } from "../features/user/userApiSlice";

const Authorization = () => {
  const { data: user, isLoading, isError } = useCurrentQuery(); // Destructure user, isLoading, and isError

  //   useEffect(() => {
  //     // No need to fetch data here since useCurrentQuery already fetches it
  //     // Remove the async fetchData function
  //   }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>An error occurred while fetching user data.</p>;
  }

  return <>{user ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default Authorization;
