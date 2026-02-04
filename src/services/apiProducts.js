import { supabase } from "@/supabase/supabaseClient";
// handling remote state in react :
// 1️⃣ Basic way: useState + useEffect (OK for very small apps)
// Manual loading & error handling

// No caching

// No retry

// Refetching on every mount

// Hard to sync after mutations
// ===========
// 2️⃣ Best practice: React Query (TanStack Query) ✅
// It gives you automatically:

// ✅ Caching
// ✅ Background refetching
// ✅ Deduplication
// ✅ Pagination
// ✅ Optimistic updates
// ✅ Retry on failure
// ✅ Request cancellation
// ✅ Stale-while-revalidate
// ✅ Devtools
export const getProducts = async () => {
  try {
    const { data: products, error } = await supabase
      .from("products")
      .select("*")
      .range(0, 9);
    if (error) throw new Error(`${error.message}`);
    return products;
  } catch (error) {
    return error;
  }
};
export const addProduct = async (newProduct) => {
  try {
    const { data, error } = await supabase
      .from("products")
      .insert([newProduct])
      .select();
    if (error) throw new Error(`${error.message}`);
    return data;
  } catch (error) {
    return error;
  }
};
