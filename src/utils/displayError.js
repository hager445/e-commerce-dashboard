import toast from "react-hot-toast";

export const displayError = (message) => {
  return toast.error(message);
};
