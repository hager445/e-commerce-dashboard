import { getCategories } from "@/services/apiCategories";
import { useQuery } from "@tanstack/react-query";

export const useCategories = () => {
  const {
    data: categories,
    isError,
    isLoading,
  } = useQuery({ queryKey: ["categories"], queryFn: getCategories });
  return { categories, isError, isLoading };
};
