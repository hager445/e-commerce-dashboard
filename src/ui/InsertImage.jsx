// import React, { useEffect, useState } from "react";
import { useState } from "react";
import uploadImg1 from "../assets/add-image/upload-1.png";
import uploadImg2 from "../assets/add-image/upload-2.png";
import { uploadImage } from "@/services/uploadImage";
import Loader from "./Loader";
export default function InsertImage({ setValue }) {
  const [uploading, setUploading] = useState(false);
  const [url, setUrl] = useState("");
  //   useEffect(() => {
  //     console.log("coming from supabase", url);
  //   }, [url]);
  return (
    <div className="flex gap-4 w-full">
      <div className="w-[30%] flex items-center justify-center rounded-lg border border-gray-300">
        <img src={uploadImg1} />
      </div>
      <div className="w-[30%] flex items-center justify-center rounded-lg border border-gray-300">
        {uploading ? <Loader /> : <img src={url || uploadImg2} />}
      </div>

      <div
        className="w-[30%] flex flex-col items-center justify-center gap-3  relative
        border-2 border-dashed border-gray-300 
        rounded-2xl p-6 
        cursor-pointer 
        hover:border-blue-500 
        hover:bg-blue-50/30 
        transition"
      >
        <input
          onChange={(e) => {
            setUploading(true);
            const file = e.target.files[0];
            uploadImage(file)
              .then((url) => {
                setUrl(url.publicUrl);
                setValue("image", url.publicUrl);
              })
              .finally(() => setUploading(false));
          }}
          className="absolute top-0 bottom-0 left-0 right-0 opacity-0 cursor-pointer "
          type="file"
        />
        <p className="text-gray-600 font-medium text-[13px]">
          Drop your image here
        </p>

        <span className="text-[12px] text-gray-400">or click to browse</span>
      </div>
    </div>
  );
}
