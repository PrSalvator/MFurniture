import { EApi } from "@/shared/enum/api";
import { instance } from "@/shared/instance";
import { IFurnitureDto } from "@/shared/interfaces/furniture";
import { AxiosResponse } from "axios";

export const getAllFurnituresSlice = async (): Promise<AxiosResponse<IFurnitureDto[]>> => {
  return instance.get(EApi.FURNITURES);
};
