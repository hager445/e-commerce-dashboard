import { userRegisterValidation } from "@/features/user-management/validation/userValidationSchema";

export const registerFields = [
  {
    name: "name",
    label: "user name",
    type: "text",
    placeholder: "Enter User Name",
    validation: userRegisterValidation.name,
  },
  {
    name: "email",
    label: "user email",
    type: "email",
    placeholder: "Enter User Email",
    validation: userRegisterValidation.email,
  },
  {
    name: "password",
    label: "user password",
    type: "password",
    placeholder: "Enter User password",
    validation: userRegisterValidation.password,
  },
  {
    name: "confirmPassword",
    label: "confirm password",
    type: "password",
    placeholder: "Enter User Password again",
    validation: userRegisterValidation.confirmPassword,
  },
];
