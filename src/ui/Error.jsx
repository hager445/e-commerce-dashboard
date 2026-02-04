import React from "react";

export default function Error({ error }) {
  return (
    <>
      {error && (
        <span className="text-[13px] text-red-700 text-left block ps-3 pt-2">
          {error.message}
        </span>
      )}
    </>
  );
}
