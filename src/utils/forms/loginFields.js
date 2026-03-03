import { userFieldsValidation } from "@/features/user-management/validation/userValidationSchema";

export const loginFields = [
  {
    name: "email",
    label: "user email",
    type: "email",
    placeholder: "Enter User Email",
    validation: userFieldsValidation.email,
  },
  {
    name: "password",
    label: "user password",
    type: "password",
    placeholder: "Enter User password",
    validation: userFieldsValidation.password,
  },
];
