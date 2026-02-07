import React, { Children } from "react";

export default function FormTitle({ title, children }) {
  return (
    <div className="pb-12  px-4">
      <h2 className="font-bold  text-2xl text-center md:text-left text-nowrap">
        {title}
      </h2>
      {children}
    </div>
  );
}
