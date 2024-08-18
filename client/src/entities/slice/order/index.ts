import { EApi } from "@/shared/enum/api"
import { instance } from "@/shared/instance"
import { IOrderDto } from "@/shared/interfaces/order"
import { AxiosResponse } from "axios"

export const GetAllOrdersSlice = async (): Promise<AxiosResponse<IOrderDto[]>> => {
    return instance.get(EApi.ORDERS);
}