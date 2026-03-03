import React, { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { Camera } from "lucide-react";
import ImageInput from "@/ui/ImageInput";
import Loader from "@/ui/Loader";
import InputGroup from "@/ui/InputGroup";
import { useForm } from "react-hook-form";
import { userFieldsValidation } from "../validation/userValidationSchema";
import ButtonUi from "@/ui/ButtonUi";
import { updateUser } from "@/services/apiUsers";
import { displaySuccess } from "@/utils/displaySuccess";
import { formatErrors } from "@/helpers/formatErrors";
import { displayError } from "@/utils/displayError";
import { useNavigate } from "react-router-dom";
import avatarImage from "../../../assets/avatar/istockphoto-1337144146-612x612.jpg";
import Form from "@/ui/Form";

export default function SetupUserAvatar({
  setupInfo: registeredUser,
  setOpen,
  open,
}) {
  const navigate = useNavigate();

  const [url, setUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();
  function handleUpload(data) {
    return updateUser({
      id: registeredUser?.id,
      phone: data.phone,
      avatar_url: data.image,
    })
      .then(() =>
        displaySuccess("Registration successful! Redirecting to login..."),
      )

      .catch((error) => {
        const errorMsg = formatErrors(error);
        displayError(errorMsg);
        throw error;
      });
  }
  useEffect(() => {
    if (isSubmitSuccessful || !open) {
      const timer = setTimeout(() => {
        navigate("/login");
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isSubmitSuccessful, navigate, open]);

  return (
    <>
      <Form formStyle={" w-[100%]"} onSubmit={handleSubmit(handleUpload)}>
        <div className="space-y-4">
          {/* Avatar upload area */}
          <div className="flex items-center gap-8">
            <div className="relative ms-6">
              <Avatar className="h-24 w-24">
                {uploading ? (
                  <AvatarFallback>
                    <Loader />
                  </AvatarFallback>
                ) : (
                  <AvatarImage
                    src={url || avatarImage}
                    className={"object-cover cursor-pointer"}
                  />
                )}
              </Avatar>
              <label
                htmlFor="avatar-upload"
                className="absolute bottom-0 right-0 cursor-pointer"
                aria-label="Upload profile picture"
              >
                <div className="bg-primary text-primary-foreground rounded-full p-2 hover:opacity-90 transition">
                  <Camera
                    className="h-4 w-4 cursor-pointer"
                    aria-hidden="true"
                  />
                </div>

                <ImageInput
                  setUploading={setUploading}
                  setUrl={setUrl}
                  bucketName={"user-avatar"}
                  setValue={setValue}
                />
              </label>
            </div>
            <InputGroup
              label={"phone number"}
              inputGroupStyle="w-full"
              placeholder={"Enter your phone number"}
              inputType={"tel"}
              register={register}
              fieldName={"phone"}
              errors={errors}
              validation={userFieldsValidation.phone}
            />
          </div>
          {isSubmitting && (
            // <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <span>Loading...</span>
            // </div>
          )}
          <DialogFooter className="gap-2 mt-7 justify-between! flex">
            <ButtonUi
              buttonStyle={
                "border bg-transparent hover:bg-transparent text-black hover:text-black"
              }
              type={"button"}
              onClick={() => setOpen(false)}
              className="text-muted-foreground cursor-pointer"
            >
              Skip for now
            </ButtonUi>
            <ButtonUi
              type={"submit"}
              imageUploading={uploading}
              isSubmitting={isSubmitting}
              isSubmitSuccessful={isSubmitSuccessful}
              substitutiveText={"save"}
            >
              Save
            </ButtonUi>
          </DialogFooter>
        </div>
      </Form>
    </>
  );
}
