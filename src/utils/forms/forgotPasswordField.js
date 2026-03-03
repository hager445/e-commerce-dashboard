import { userFieldsValidation } from "@/features/user-management/validation/userValidationSchema";

export const forgotPasswordFields = [
  {
    name: "email",
    label: "user email",
    type: "email",
    placeholder: "Enter User Email",
    validation: userFieldsValidation.email,
  },
];
