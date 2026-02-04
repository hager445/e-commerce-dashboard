import { addProduct } from "@/services/apiProducts";
import { useMutation } from "@tanstack/react-query";
// {
//   mutate,        // لتشغيل العملية
//   mutateAsync,   // نفس mutate لكن Promise
//   isLoading,     // هل العملية شغالة
//   isError,       // هل حصل خطأ
//   error,         // الخطأ نفسه
//   isSuccess,     // هل نجحت
//   data,          // نتيجة السيرفر
//   reset
// }
export const useAddProduct = () => {
  const mutation = useMutation({
    queryKey: ["products"],
    mutationFn: addProduct,
  });
  return mutation;
};
