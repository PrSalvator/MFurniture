import { EApi } from "@/shared/enum/api";
import { instance } from "@/shared/instance";
import { IShopDto } from "@/shared/interfaces/shop";
import { AxiosResponse } from "axios";

export const getAllShopsSlice = async (): Promise<AxiosResponse<IShopDto[]>>  => {
  return instance.get(EApi.SHOPS);
};
