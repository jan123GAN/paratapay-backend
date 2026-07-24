import cloudinary from "../config/cloudinary.js";

export const uploadImageToCloudinary = async (file: Buffer, fileName: string) => {
  return new Promise<string>((res, rej) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "avatars",
        public_id: fileName,
        resource_type: "image",
        overwrite: true,
      },
      (error, result) => {
        if (error || !result) {
          return rej(error);
        }
        res(result.secure_url);
      },
    );
    stream.end(file);
  });
};
