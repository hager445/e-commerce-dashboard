import { Button } from "@/components/ui/button";
import React from "react";

export default function ButtonUi({ type, onClick, children }) {
  return (
    <Button className={"cursor-pointer"} onClick={onClick} type={type}>
      {children}
    </Button>
  );
}
