import React from "react";
import { Controller } from "react-hook-form";

export default function ControllerUi({
  controllerName,
  control,
  rules,
  render,
}) {
  return (
    <Controller
      name={controllerName}
      control={control}
      rules={rules}
      render={render}
    />
  );
}
