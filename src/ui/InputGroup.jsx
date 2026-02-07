import { Input } from "@/components/ui/input";
import React from "react";
import Error from "./Error";

export default function InputGroup({
  label,
  inputType,
  placeholder,
  inputGroupStyle,
  children,
  register,
  fieldName,
  validation,
  errors,
}) {
  return (
    <div className={`mb-6 px-3 ${inputGroupStyle}`}>
      <label className="font-bold text-left block ps-2 text-black mb-1 capitalize">
        {label} <span className="text-red-500">*</span>
      </label>
      {children ? (
        children
      ) : (
        <Input
          {...register?.(`${fieldName}`, validation)}
          type={inputType}
          name={fieldName}
          placeholder={placeholder}
          className="bg-white border border-gray-100 rounded-lg px-4 py-2  focus-visible:border-0! focus:outline-none! focus:ring-0!"
        />
      )}
      <Error error={errors?.[fieldName]} />
    </div>
  );
}
