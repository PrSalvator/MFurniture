import { GetDirectorsSlice } from "@/entities/slice/director";
import { EQueryKeys } from "@/shared/enum/query_keys";
import { IDirectorDto } from "@/shared/interfaces/director";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useGetDirectorsUseCase = (): UseQueryResult<AxiosResponse<IDirectorDto[]>> => {
  const callback = async () => {
    return GetDirectorsSlice();
  };

  return useQuery({
    queryFn: callback,
    queryKey: [EQueryKeys.ALL_DIRECTORS],
  });
};
