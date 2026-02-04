import React from "react";

export default function FormGroup({ children, formGroupStyle }) {
  return (
    <div
      className={
        formGroupStyle +
        ` flex flex-wrap  mb-4 bg-white border border-gray-100 rounded-lg py-14 px-7`
      }
    >
      {children}
    </div>
  );
}
