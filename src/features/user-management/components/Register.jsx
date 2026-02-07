import Form from "@/ui/Form";
import FormGroup from "@/ui/FormGroup";
import InputGroup from "@/ui/InputGroup";
import { useForm } from "react-hook-form";
import ButtonUi from "@/ui/ButtonUi";
import FormTitle from "@/ui/FormTitle";
import { NavLink, useNavigate } from "react-router-dom";

import { registerFields } from "@/utils/forms/registerFields";
import { registerUser } from "@/services/apiUsers";
import TermsAcceptedBox from "../ui/TermsAcceptedBox";
import { userRegisterValidation } from "../validation/userValidationSchema";

import { displayError } from "@/utils/displayError";
import { displaySuccess } from "@/utils/displaySuccess";
import { formatErrors } from "@/helpers/formatErrors";

import DisplayToastr from "@/ui/DisplayToastr";
import { useEffect } from "react";

// timeout server problem , the operation ddint completed or no response
// لو response = 401
// → اعملي Logout تلقائي
// → Redirect للـ Login
// → رسالة بسيطة:
// "Session expired, please login again"
// ========================================
// No => Admin Self-Register
// يا اما بيتعمل يدوي اول مرة من الباك اند او بيتبعتله دعوة
export default function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();
  async function onSubmit(data) {
    console.log(data);
    // أي .then() أو .catch() بيرجع Promise جديد

    return registerUser(data)
      .then((data) => {
        console.log(data);
        displaySuccess("you have been registered successfully! please login");
      })
      .catch((error) => {
        const errorMsg = formatErrors(error);
        displayError(errorMsg);
        // .catch() بدون throw
        // ➜ يحوّل الـ rejected promise إلى fulfilled
        // so that if we want react hook to know that the server returns error we have to throw that error
        throw error;
      });
  }
  useEffect(() => {
    if (isSubmitSuccessful) {
      const timer = setTimeout(() => {
        navigate("/login");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isSubmitSuccessful, navigate]);
  return (
    <>
      <DisplayToastr />
      <div className="flex justify-center items-center py-5">
        <Form
          formStyle="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%]"
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

            <FormTitle title="Create your account">
              <span className="text-sm text-gray-500">
                Enter your personal details to create account
              </span>
            </FormTitle>
            {registerFields.map((field) => (
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
            ))}
            {/* user roles permissions */}
            {/* <InputGroup
              label="Role"
              value="USER"
              readOnly={true}
              inputGroupStyle="w-full"
              placeholder="User Role"
              inputType="text"
              fieldName="role"
              validation={userRegisterValidation.role}
              register={register}
              errors={errors}
            /> */}
            {/* <RoleSelect errors={errors} control={control} /> */}

            <TermsAcceptedBox
              label="Agree with Privacy Policy"
              fieldName="accepted_terms"
              register={register}
              errors={errors}
              validation={userRegisterValidation.termsAccepted}
            />

            <ButtonUi
              isSubmitting={isSubmitting}
              isSubmitSuccessful={isSubmitSuccessful}
              buttonStyle="mx-auto w-full mb-4 mt-8"
              type="submit"
              substitutiveText="Creating Your Account!"
            >
              Register User
            </ButtonUi>
            <span className="mx-auto mt-3 text-sm text-gray-400">
              You have an account?
              <NavLink to={"/login"} className="text-gray-800 underline">
                Login Now
              </NavLink>
            </span>
          </FormGroup>
        </Form>
      </div>
    </>
  );
}
