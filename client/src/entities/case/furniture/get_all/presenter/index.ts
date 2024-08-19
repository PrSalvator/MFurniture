import { useEffect } from "react";
import { useGetAllFurnituresUseCase } from "@/entities/case/furniture/get_all/use_case";
import { useSnackbar } from "@/shared/hooks/useSnackbar";

export const useGetAllFurnituresPresenter = () => {
  const { data, error, isError, isPending } = useGetAllFurnituresUseCase();
  const { showErrorMessage } = useSnackbar();

  useEffect(() => {
    if (isError) {
        showErrorMessage();
    }
  }, [error]);

  return {data: data?.data, isPending}
};
