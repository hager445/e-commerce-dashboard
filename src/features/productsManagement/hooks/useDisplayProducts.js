import { getProducts } from "@/services/apiProducts";
import { useQuery } from "@tanstack/react-query";

export const useDisplayProducts = () => {
  const {
    data: products,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  return [products, isError, isLoading];
};
