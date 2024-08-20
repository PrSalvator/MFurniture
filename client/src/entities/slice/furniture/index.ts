import { EApi } from "@/shared/enum/api";
import { instance } from "@/shared/instance";
import {
  IAddFurniturePort,
  IEditFurniturePort,
  IFurnitureDto,
} from "@/shared/interfaces/furniture";
import { AxiosResponse } from "axios";

export const GetAllFurnituresSlice = async (): Promise<
  AxiosResponse<IFurnitureDto[]>
> => {
  return instance.get(EApi.FURNITURES);
};

export const AddFurnitureSlice = async (
  data: IAddFurniturePort
): Promise<AxiosResponse<void>> => {
  const formData = new FormData();
  formData.append("file", new Blob([new Uint8Array(await data.file[0].arrayBuffer())], {type: data.file[0].type }))
  formData.append("name", data.name);
  return instance.post(EApi.ADD_FURNITURE, formData);
};

export const EditFurnitureSlice = async (data: IEditFurniturePort): Promise<AxiosResponse<void>> => {
  const formData = new FormData();
  formData.append("file", new Blob([new Uint8Array(await data.file[0].arrayBuffer())], {type: data.file[0].type }))
  formData.append("name", data.name);
  return instance.put(EApi.EDIT_FURNITURE + `/${data.id}`, formData);
}
