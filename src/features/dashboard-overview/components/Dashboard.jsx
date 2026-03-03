import { AuthContext } from "@/contexts/Auth/AuthContext";
import React, { useContext, useEffect } from "react";

export default function Dashboard() {
  const { session, profile, user } = useContext(AuthContext);
  // useEffect(() => {
  //   console.log(session, profile, user);
  // }, []);
  return <div>{profile?.name}</div>;
}
