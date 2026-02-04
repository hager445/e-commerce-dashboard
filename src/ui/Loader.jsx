import React from "react";
import { BounceLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="flex items-center justify-center">
      <BounceLoader />
    </div>
  );
}
