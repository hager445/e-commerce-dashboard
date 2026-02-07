import React from "react";
import ControllerUi from "./ControllerUi";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { userRegisterValidation } from "@/features/user-management/validation/userValidationSchema";
import InputGroup from "./InputGroup";
export default function RoleSelect({ control, errors }) {
  return (
    <>
      {/* role */}
      <ControllerUi
        controllerName="role"
        control={control}
        rules={userRegisterValidation.role}
        render={({ field }) => (
          <>
            <InputGroup
              label="user role"
              inputGroupStyle="w-full"
              errors={errors}
              fieldName="role"
            >
              <Select
                value={field.value}
                onValueChange={field.onChange}
                className="bg-white border border-gray-100 rounded-lg px-4 py-2 w-full h-10 focus-visible:outline-none! focus-visible:ring-0!"
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a User Role" />
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Roles</SelectLabel>
                    <SelectItem value="MANAGER">MANAGER</SelectItem>
                    <SelectItem value="STAFF">STAFF</SelectItem>
                    <SelectItem value="SUPPORT">SUPPORT</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </InputGroup>
          </>
        )}
      />
    </>
  );
}
