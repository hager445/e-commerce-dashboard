// let { data, error } = await supabase.auth.signUp({
//   email: 'someone@email.com',
//   password: 'nGCqkGiUKhCEtqkOSIzo'
// })
// let { data, error } = await supabase.auth.signInWithPassword({
//   email: 'someone@email.com',
//   password: 'nGCqkGiUKhCEtqkOSIzo'

import { supabase } from "@/supabase/supabaseClient";

// })
export const registerUser = async (userData) => {
  try {
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: userData.email,
      password: userData.password,
    });
    if (authError) throw authError;
    // await supabase.auth.signOut();
    console.log(authData.user);
    const userID = authData?.user?.id;
    console.log(userID);
    const { data, error } = await supabase
      .from("users")
      .insert([
        {
          id: userID,
          name: userData.name,
          email: userData.email,
          avatar_url: userData.avatar || null,
          role: "USER",
          is_active: true,
          accepted_terms: userData.accepted_terms,
        },
      ])
      .select();
    console.log(data);
    if (error) throw error;

    return data;
  } catch (error) {
    if (error.message === "Failed to fetch") {
      throw new Error(
        "No internet connection. Please check your network and try again.",
      );
    }
    throw error;
  }
};
export const loginUser = async (userData) => {
  try {
    const { data: authData, error: authError } =
      await supabase.auth.signInWithPassword({
        email: userData.email,
        password: userData.password,
      });
    if (authError) throw authError;

    return authData;
  } catch (error) {
    if (error) throw error;
  }
};
export const fetchProfile = async (id) => {
  console.log(id);
  if (!id) return;
  try {
    const { data, error } = await supabase
      .from("users")
      .select()
      .eq("id", id)
      .single();
    if (error) throw error;
    return data;
  } catch (error) {
    if (error) throw error;
  }
};
export const getSession = async () => {
  try {
    const { data, error } = await supabase.auth.getSession();
    if (error) throw error;

    return data;
  } catch (error) {
    if (error) throw error;
  }
};
export const onAuthChange = (callback) => {
  return supabase.auth.onAuthStateChange(callback);
};
export const updateUser = async (userData) => {
  try {
    const { data, error } = await supabase
      .from("users")
      .update(userData)
      .eq("id", userData?.id)
      .select();

    if (error) throw error;
    return data;
  } catch (error) {
    if (error) throw error;
  }
};
export const forgotPassword = async (email) => {
  try {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) throw error;
    return data;
  } catch (error) {
    if (error) throw error;
  }
};
export const logout = async () => {
  console.log("user logout");

  const { error } = await supabase.auth.signOut();
  console.log("SignOut error:", error);

  // 4. Check session again
  const { data: afterSession } = await supabase.auth.getSession();
  console.log("Session after signOut:", afterSession);
  // try {
  //   const { data, error } = await supabase.auth.signOut();
  //   console.log(data);
  //   if (error) throw error;
  //   return data;
  // } catch (error) {
  //   if (error) throw error;
  // }
};
