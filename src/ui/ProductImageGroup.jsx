// import React, { useEffect, useState } from "react";
import { useState } from "react";
import uploadImg1 from "../assets/add-image/upload-1.png";
import uploadImg2 from "../assets/add-image/upload-2.png";
import { uploadImage } from "@/services/uploadImage";
import Loader from "./Loader";
import ImageInput from "./ImageInput";
export default function ProductImageGroup({ setValue, bucketName }) {
  const [uploading, setUploading] = useState(false);
  const [url, setUrl] = useState("");

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
        <ImageInput
          setValue={setValue}
          setUrl={setUrl}
          setUploading={setUploading}
          bucketName={bucketName}
        />
        <p className="text-gray-600 font-medium text-[13px]">
          Drop your image here
        </p>

        <span className="text-[12px] text-gray-400">or click to browse</span>
      </div>
    </div>
  );
}
