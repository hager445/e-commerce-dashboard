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
    const userID = authData.user.id;
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
    if (error) throw error;

    return data;
  } catch (error) {
    if (error) throw error;
  }
};
