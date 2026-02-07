import React from "react";
import { ClipLoader } from "react-spinners";

export default function ButtonLoader() {
  return (
    <ClipLoader size={20} color="#fff" cssOverride={{ marginLeft: "5px" }} />
  );
}
