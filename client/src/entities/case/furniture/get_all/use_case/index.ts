import { GetAllFurnituresSlice } from "@/entities/slice/furniture";
import { EQueryKeys } from "@/shared/enum/query_keys";
import { useQuery } from "@tanstack/react-query";

export const useGetAllFurnituresUseCase = () => {
  const callback = async () => {
    return GetAllFurnituresSlice();
  };

  return useQuery({queryKey: [EQueryKeys.ALL_FURNITURES], queryFn: callback})
};
