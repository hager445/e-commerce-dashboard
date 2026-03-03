import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { fetchProfile, getSession, onAuthChange } from "@/services/apiUsers";
import { displayError } from "@/utils/displayError";
import { formatErrors } from "@/helpers/formatErrors";
import { hasPermission } from "@/config/permissions";
import { useQuery } from "@tanstack/react-query";

export default function AuthProvider({ children }) {
  // const sessionValue = {
  //   accessToken: session?.access_token,
  //   refreshToken: session?.refresh_token,
  //   expiresAt: session?.expires_at,
  //   expiresIn: session?.expires_in,
  //   tokenType: session?.token_type,
  //   user: {
  //     id: session?.user.id,
  //     email: session?.user.email,
  //     role: session?.user.role,
  //   },
  // };
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  // const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comingFromRegister, setComingFromRegister] = useState(false);
  const {
    data: profile,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["profile", user?.id],
    queryFn: () => loadProfile(user?.id),
    enabled: !!user?.id,
  });
  const loadProfile = async (id) => {
    console.log("loadProfile START");
    if (id) {
      try {
        const profileData = await fetchProfile(id);
        // setProfile(profileData);
        return profileData;
      } catch (error) {
        // setProfile(null);
      } finally {
        setLoading(false);
      }
    } else {
      // setProfile(null);
    }
  };
  const loadSession = async () => {
    console.log("session");
    try {
      const response = await getSession();
      console.log(response);

      const session = response?.session;
      console.log(session);

      if (!session) {
        setLoading(false);
        setSession(null);
        setUser(null);
        // setProfile(null);
        return;
      }
      setSession(session);
      setUser(session?.user);
      if (session.user.id) {
        await loadProfile(session.user.id);
      }
    } catch (error) {
      console.error("Session error:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    console.log("bdhdnh");
    const fetchSession = async () => {
      await loadSession();
    };
    fetchSession();
    // const {
    //   data: { subscription },
    // } = onAuthChange(async (event, session) => {
    //   // logic directly here, no nesting
    //   if (!session) {
    //     setLoading(false);
    //     setSession(null);
    //     setUser(null);
    //     setProfile(null);
    //     return;
    //   }
    //   setSession(session);
    //   setUser(session?.user);
    //   if (session.user.id) {
    //     await loadProfile(session.user.id);
    //   }
    // });
    // return () => subscription?.unsubscribe();
  }, []);
  // useEffect(() => {
  //   console.log(session);
  //   if (session?.user?.id) {
  //     loadProfile(session.user.id);
  //   } else {
  //     setProfile(null);
  //   }
  // }, [session]);
  // // useEffect(() => {
  // //   const interval = setInterval(() => {
  // //     loadSession();
  // //   }, 30000); // كل 30 ثانية

  //   return () => clearInterval(interval);
  // }, []);
  function isAllowed(permission) {
    if (!profile) {
      return false;
    }
    const role = profile.role;
    return hasPermission(role, permission);
  }
  return (
    <AuthContext.Provider
      value={{
        session,
        setSession,
        user,
        setUser,
        profile,
        // setProfile,
        isAllowed,
        setComingFromRegister,
        loadSession,
        loadProfile,
        loading,
        setLoading,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
}
