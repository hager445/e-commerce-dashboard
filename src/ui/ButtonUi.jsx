import { Button } from "@/components/ui/button";
import React from "react";
import ButtonLoader from "./ButtonLoader";
export default function ButtonUi({
  type,
  onClick,
  children,
  buttonStyle,
  isSubmitting,
  isSubmitSuccessful,
  substitutiveText,
}) {
  return (
    <Button
      disabled={isSubmitting || isSubmitSuccessful}
      className={`${buttonStyle} cursor-pointer `}
      onClick={onClick}
      type={type}
    >
      <span>{isSubmitting ? substitutiveText : children}</span>
      {isSubmitting && <ButtonLoader />}
    </Button>
  );
}
