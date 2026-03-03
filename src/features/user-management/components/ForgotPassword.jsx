import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { formatErrors } from "@/helpers/formatErrors";
import { forgotPassword } from "@/services/apiUsers";
import ButtonUi from "@/ui/ButtonUi";
import { DialogUi } from "@/ui/DialogUi";
import DisplayToastr from "@/ui/DisplayToastr";
import Form from "@/ui/Form";
import FormGroup from "@/ui/FormGroup";
import FormTitle from "@/ui/FormTitle";
import InputGroup from "@/ui/InputGroup";
import { displayError } from "@/utils/displayError";
import { forgotPasswordFields } from "@/utils/forms/forgotPasswordField";
import { MailCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function ForgotPassword() {
  // way 1
  // const location = useLocation();
  // const email = location.state?.email;
  // way 2
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({ defaultValues: { email: email || "" } });
  const [openDialog, setOpenDialog] = useState(false);

  async function onSubmit(data) {
    try {
      await forgotPassword(data.email);
      setOpenDialog(true);
    } catch (error) {
      const errorMsg = formatErrors(error);
      displayError(errorMsg);
      throw error;
    }
  }
  useEffect(() => {
    if (!openDialog && isSubmitSuccessful) {
      const timer = setTimeout(() => {
        navigate("/login");
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [openDialog, navigate, isSubmitSuccessful]);
  return (
    <>
      <DisplayToastr />
      {openDialog && (
        <DialogUi open={openDialog} setOpen={setOpenDialog}>
          <Alert className="border-green-200 bg-green-50">
            <MailCheck className="h-4 w-4 text-green-600" />
            <AlertTitle className="text-green-800">Email Sent</AlertTitle>
            <AlertDescription className="text-green-700">
              If an account with this email exists, you will receive a reset
              link.
            </AlertDescription>
          </Alert>
        </DialogUi>
      )}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <FormTitle title="Check your account">
            <span className="text-sm text-gray-500">
              Enter your Email to Send the Reset Link
            </span>
          </FormTitle>
          {forgotPasswordFields.map((field) => (
            <InputGroup
              key={field.name}
              readOnly={email ? true : false}
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

          <ButtonUi
            isSubmitting={isSubmitting}
            isSubmitSuccessful={isSubmitSuccessful}
            buttonStyle="mx-auto w-[95%] mb-4 mt-4"
            type="submit"
            substitutiveText="Check your Email..."
          >
            Send Reset Link
          </ButtonUi>
        </FormGroup>
      </Form>
    </>
  );
}
