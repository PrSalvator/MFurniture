import { getAllFurnituresSlice } from "@/entities/slice/furniture";
import { EQueryKeys } from "@/shared/enum/query_keys";
import { useQuery } from "@tanstack/react-query";

export const useGetAllFurnituresUseCase = () => {
  const callback = async () => {
    return getAllFurnituresSlice();
  };

  return useQuery({queryKey: [EQueryKeys.ALL_FURNITURES], queryFn: callback})
};
