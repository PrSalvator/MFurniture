import { EApi } from "@/shared/enum/api";
import { instance } from "@/shared/instance";
import { IAddShopPort, IEditShopPort, IShopDto } from "@/shared/interfaces/shop";
import { AxiosResponse } from "axios";

export const getAllShopsSlice = async (): Promise<
  AxiosResponse<IShopDto[]>
> => {
  return instance.get(EApi.SHOPS);
};

export const addShopSlice = async (
  data: IAddShopPort
): Promise<AxiosResponse<void>> => {
  return instance.post(EApi.ADD_SHOP, data);
};

export const editShopSlice = async (data: IEditShopPort): Promise<AxiosResponse<void>> => {
  return instance.put(EApi.EDIT_SHOP + `/${data.id}`, data);
}