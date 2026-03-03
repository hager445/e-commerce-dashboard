import { AuthContext } from "@/contexts/Auth/AuthContext";
import Loader from "@/ui/Loader";
import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";

export default function GuestRoute({ children }) {
  const { session, loading } = useContext(AuthContext);

  //   if (loading) return <Loader />;

  if (session?.access_token) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
