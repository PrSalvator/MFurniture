import { UploadedFile } from "express-fileupload";
import { unlinkSync } from "fs";
import { v4 as uuidv4 } from "uuid";

export const deleteFile = (fileName: string) => {
  unlinkSync("./src/static/" + fileName);
};

export const addFile = (file: UploadedFile): string => {
  const fileName = uuidv4() + ".docx";
  file.mv("./src/static/" + fileName);
  return fileName;
};
