import { formatErrors } from "@/helpers/formatErrors";
import { uploadImage } from "@/services/uploadImage";
import { displayError } from "@/utils/displayError";
import React, { useState } from "react";

export default function ImageInput({
  setValue,
  setUploading,
  setUrl,
  bucketName,
}) {
  return (
    <input
      onChange={(e) => {
        setUploading?.(true);
        const file = e.target.files[0];
        uploadImage(file, bucketName)
          .then((url) => {
            setUrl?.(url.publicUrl);
            setValue?.("image", url.publicUrl);
          })
          .catch((error) => {
            const msg = formatErrors(error);
            displayError(msg);
          })
          .finally(() => setUploading?.(false));
      }}
      className="absolute top-0 bottom-0 left-0 right-0 opacity-0 cursor-pointer "
      type="file"
    />
  );
}
