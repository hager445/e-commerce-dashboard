import { supabase } from "@/supabase/supabaseClient";

export const getCategories = async () => {
  try {
    const { data: categories, error } = await supabase
      .from("categories")
      .select("*");
    if (error) throw new Error(`${error.message}`);
    return categories;
  } catch (error) {
    return error;
  }
};
