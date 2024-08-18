import { GetAllOrdersSlice } from "@/entities/slice/order"
import { EQueryKeys } from "@/shared/enum/query_keys"
import { IOrderDto } from "@/shared/interfaces/order"
import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { AxiosResponse } from "axios"

export const useGetAllOrdersUseCase = (): UseQueryResult<AxiosResponse<IOrderDto[]>, Error> => {
    const callback = async () => {
        return GetAllOrdersSlice();
    }
    
    return useQuery({queryKey: [EQueryKeys.ALL_ORDERS], queryFn: callback})
}