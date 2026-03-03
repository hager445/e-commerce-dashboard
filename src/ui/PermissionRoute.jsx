import { AuthContext } from "@/contexts/Auth/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

export default function PermissionRoute({ permission, children }) {
  const { isAllowed, session, loading } = useContext(AuthContext);
  if (!session?.user) return <Navigate to="/login" replace />;
  if (loading) return <Loader />;
  if (!isAllowed(permission)) {
    return <Navigate to={"/unautharized"} replace />;
  }
  return <>{children}</>;
}
