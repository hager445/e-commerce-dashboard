import { supabase } from "@/supabase/supabaseClient";

export const uploadImage = async (file, bucketName) => {
  const fileExtension = file.name.split(".").pop();
  const fileName = `${Date.now()}.${fileExtension}`;
  const filePath = `${fileName}`;
  try {
    // upload to supabase storage
    const { data, error } = await supabase.storage
      .from(bucketName)
      .upload(filePath, file);
    if (error) {
      throw new Error(error);
    }
    // get public url
    const { data: urlData } = supabase.storage
      .from(bucketName)
      .getPublicUrl(filePath);
    return urlData;
  } catch (error) {
    throw new Error(error);
  }
};
