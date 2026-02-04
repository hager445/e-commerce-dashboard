import Form from "@/ui/Form";
import FormGroup from "@/ui/FormGroup";
import InputGroup from "@/ui/InputGroup";
import React from "react";
import { userRegisterValidation } from "../validation/userValidationSchema";
import { useForm } from "react-hook-form";
import ControllerUi from "@/ui/ControllerUi";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function Register() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Form formStyle={"w-[50%]"}>
        <FormGroup formGroupStyle={"w-full"}>
          {/* name */}
          <InputGroup
            label={"user name"}
            groupStyle={{ width: " w-full" }}
            placeholder={"Enter User Name"}
            inputType={"text"}
            fieldName={"name"}
            validation={userRegisterValidation.name}
            register={register}
            errors={errors}
          />
          {/* email */}
          <InputGroup
            label={"user email"}
            groupStyle={{ width: " w-full" }}
            placeholder={"Enter User Email"}
            inputType={"text"}
            fieldName={"email"}
            validation={userRegisterValidation.email}
            register={register}
            errors={errors}
          />
          {/* password */}
          <InputGroup
            label={"user password"}
            groupStyle={{ width: " w-full" }}
            placeholder={"Enter User password"}
            inputType={"text"}
            fieldName={"password"}
            validation={userRegisterValidation.password}
            register={register}
            errors={errors}
          />
          {/* confirm password */}
          <InputGroup
            label={"confirm password"}
            groupStyle={{ width: " w-full" }}
            placeholder={"Enter User Password again"}
            inputType={"text"}
            fieldName={"confirmPassword"}
            validation={userRegisterValidation.confirmPassword}
            register={register}
            errors={errors}
          />
          {/* role */}
          <ControllerUi
            controllerName="role"
            control={control}
            rules={userRegisterValidation.role}
            render={({ field }) => (
              <>
                <InputGroup
                  label={"user role"}
                  groupStyle={{ width: "w-full" }}
                  errors={errors}
                  fieldName={"role"}
                >
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                    className="bg-white border border-gray-100 rounded-lg px-4 py-2 w-full h-20 focus-visible:outline-none! focus-visible:ring-0!"
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a User Role" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Roles</SelectLabel>
                        <SelectItem value="ADMIN">Admin</SelectItem>
                        <SelectItem value="USER">User</SelectItem>
                        <SelectItem value="CUSTOMER">Customer</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </InputGroup>
                {/* {fieldState.error && <Error error={fieldState.error} />} */}
              </>
            )}
          />
        </FormGroup>
      </Form>
    </div>
  );
}
