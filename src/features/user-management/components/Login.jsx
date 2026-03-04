import { AuthContext } from "@/contexts/Auth/AuthContext";
import { formatErrors } from "@/helpers/formatErrors";
import { loginUser } from "@/services/apiUsers";
import ButtonUi from "@/ui/ButtonUi";
import DisplayToastr from "@/ui/DisplayToastr";
import Form from "@/ui/Form";
import FormGroup from "@/ui/FormGroup";
import FormTitle from "@/ui/FormTitle";
import InputGroup from "@/ui/InputGroup";
import { displayError } from "@/utils/displayError";
import { displaySuccess } from "@/utils/displaySuccess";
import { loginFields } from "@/utils/forms/loginFields";
import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
// Role-based Access Control (RBAC)
// react query => Data Fetching + Caching + Syncing library.
export default function Login() {
  const navigate = useNavigate();
  const { loadSession, loadProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();
  const emailValue = watch("email");
  // const emailValue = getValues("email");
  async function onSubmit(data) {
    return loginUser(data)
      .then(async () => {
        await loadSession();
        displaySuccess("Login successful! Redirecting...");
      })
      .catch((error) => {
        const msg = formatErrors(error);
        displayError(msg);
        throw error;
      });
  }
  useEffect(() => {
    if (isSubmitSuccessful) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isSubmitSuccessful, navigate]);
  // function navigateTo() {
  //   const email = getValues("email");

  //   if (email) {
  //     navigate("/forgot-password");
  //     // displaySuccess(
  //     //   '✅ "If an account with this email exists, you will receive a reset link."',
  //     // );
  //     // setTimeout(() => {
  //     // }, 3000);
  //   } else {
  //     displayError("Insert your email first!");
  //   }
  // }
  return (
    <>
      <DisplayToastr />
      <div className="flex justify-center items-center py-5 ">
        <Form
          formStyle="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] "
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormGroup formGroupStyle="w-full">
            {/* form error message  */}
            {Object.keys(errors).length > 0 && (
              <div className="p-4 mb-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-800">
                  Please fix the errors below before submitting
                </p>
              </div>
            )}
            {/* title */}

            <FormTitle title="Login your account">
              <span className="text-sm text-gray-500">
                Enter your personal details to login your account
              </span>
            </FormTitle>
            {loginFields.map((field) => (
              <>
                <InputGroup
                  key={field.name}
                  label={field.label}
                  inputGroupStyle="w-full"
                  placeholder={field.placeholder}
                  inputType={field.type}
                  fieldName={field.name}
                  validation={field.validation}
                  register={register}
                  errors={errors}
                />
                {field.type === "password" && (
                  <span className="ms-5  text-sm text-gray-400">
                    <NavLink
                      to={`/forgot-password?email=${emailValue}`}
                      className="text-gray-800 underline"
                    >
                      Forgot Password
                    </NavLink>
                  </span>
                )}
              </>
            ))}

            <ButtonUi
              isSubmitting={isSubmitting}
              isSubmitSuccessful={isSubmitSuccessful}
              buttonStyle="mx-auto w-full mb-4 mt-8"
              type="submit"
              substitutiveText="Logining in to Your Account!"
            >
              Login User
            </ButtonUi>
            <span className="mx-auto mt-3 text-sm text-gray-400">
              I don't have an account
              <NavLink to={"/register"} className="text-gray-800 underline">
                Register
              </NavLink>
            </span>
          </FormGroup>
        </Form>
      </div>
    </>
  );
}
