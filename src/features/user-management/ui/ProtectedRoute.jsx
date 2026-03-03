import { AuthContext } from "@/contexts/Auth/AuthContext";
import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Loader from "../../../ui/Loader";

export default function ProtectedRoute({ children }) {
  const { profile, loading, session } = useContext(AuthContext);
  useEffect(() => {
    console.log(loading);
  }, [loading]);
  if (loading) {
    return <Loader />;
  }
  if (!session && !session?.access_token) {
    return <Navigate replace to={"/login"} />;
  }
  return <>{children}</>;
}
