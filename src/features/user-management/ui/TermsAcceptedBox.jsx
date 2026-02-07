import Error from "@/ui/Error";
import React from "react";

export default function TermsAcceptedBox({
  label,
  register,
  fieldName,
  validation,
  errors,
}) {
  return (
    <>
      <div className="px-3">
        <input type="checkbox" {...register?.(`${fieldName}`, validation)} />
        <span className="text-gray-500 text-sm mx-2">{label}</span>
      </div>
      <Error error={errors?.[fieldName]} />
    </>
  );
}
