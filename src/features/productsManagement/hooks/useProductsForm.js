import { useForm } from "react-hook-form";

export const useProductForm = function () {
  const form = useForm();
  //   const submitHandler = form.handleSubmit(onSubmit);
  return { ...form };
};
