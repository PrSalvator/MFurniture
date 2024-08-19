import { EApi } from "@/shared/enum/api";
import { instance } from "@/shared/instance";
import {
  IOrderAddPort,
  IOrderDto,
  IOrderEditPort,
} from "@/shared/interfaces/order";
import { AxiosResponse } from "axios";

export const GetAllOrdersSlice = async (): Promise<
  AxiosResponse<IOrderDto[]>
> => {
  return instance.get(EApi.ORDERS);
};

export const AddOrderSlice = async (
  order: IOrderAddPort
): Promise<AxiosResponse<void>> => {
  return instance.post(EApi.ADD_ORDER, order);
};

export const EditOrderSlice = async (
  order: IOrderEditPort
): Promise<AxiosResponse<void>> => {
  return instance.put(EApi.EDIT_ORDER + `/${order.id}`);
};
