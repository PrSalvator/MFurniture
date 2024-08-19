import { getAllShopsSlice } from "@/entities/slice/shop";
import { EQueryKeys } from "@/shared/enum/query_keys";
import { IShopDto } from "@/shared/interfaces/shop";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useGetAllShopsUseCase = (): UseQueryResult<
  AxiosResponse<IShopDto[]>
> => {
  const callback = async () => {
    return getAllShopsSlice();
  };

  return useQuery({ queryKey: [EQueryKeys.ALL_SHOPS], queryFn: callback });
};
